import { get, writable, type Writable } from "svelte/store";
import type { Groups } from "@/classes/group";
import lzworker from "@/workers/lzWorker.mjs?worker&inline";
import { columnDefs as currentColumnDefs, data, gridApi, rowID } from "./datatable.store";
import Bitfield from "@/utilities/bitfield";
import { Grid, type GridOptions, type IFilterDef } from "ag-grid-community";
import xxhash from "xxhashjs";

const maxCatalogSize = 2e5;

/**
 * Generates a unique hash ID for a group based on its filter object using xxhashjs.
 * @param filterObject - The filter object of the group.
 * @returns A string representing the group ID.
 */
function createGroupID(filterObject: IFilterDef): string {
  // Convert the filter object to a string
  const filterString = JSON.stringify(filterObject);

  // Use a fixed seed for xxHash; you can choose any number
  const SEED = 0x0000;

  // Generate the hash
  const hash = xxhash.h32(filterString, SEED).toString(16);

  return hash;
}

const initialState: Groups = {
  defaultGroup: {
    name: "defaultGroup",
    description: "",
    objectsBitfield: new Bitfield(maxCatalogSize),
    orbitBitfield: new Bitfield(maxCatalogSize),
    coverageBitfield: new Bitfield(maxCatalogSize),
    labelBitfield: new Bitfield(maxCatalogSize),
    modelBitfield: new Bitfield(maxCatalogSize),
    filterObject: {},
    show: true,
    point: {
      pixelSize: 1,
      color: "#ffffff",
      outlineWidth: 0,
      outlineColor: "#ffffff"
    },
    path: {
      width: 1,
      material: {
        color: "#ffffff"
      }
    }
  },
};

export const groups: Writable<Groups> = writable(initialState);

export const activeGroup: Writable<string> = writable("defaultGroup");

export const saveGroup = () => { }

export const modifyGroup = async (name: string, description: string) => {
  const currentGroups = get(groups);
  const activeGroupId = get(activeGroup);
  const aGroup = currentGroups[activeGroupId];
  const { filterObject } = aGroup;
  const gID = await createGroupID(filterObject);

  // Check if the group with gID already exists
  let updatedGroup = currentGroups[gID];
  let isNewGroup = false;

  if (!updatedGroup) {
    isNewGroup = true;
    updatedGroup = {
      name,
      description,
      objectsBitfield: new Bitfield(maxCatalogSize),
      orbitBitfield: new Bitfield(maxCatalogSize),
      coverageBitfield: new Bitfield(maxCatalogSize),
      labelBitfield: new Bitfield(maxCatalogSize),
      modelBitfield: new Bitfield(maxCatalogSize),
      filterObject: {},
      show: true,
      point: {
        pixelSize: 1,
        color: "#ffffff",
        outlineWidth: 0,
        outlineColor: "#ffffff"
      },
      path: {
        width: 1,
        material: {
          color: "#ffffff"
        }
      }
    };

  } else {
    updatedGroup = {
      ...updatedGroup,
      name,
      description,
      objectsBitfield: new Bitfield(maxCatalogSize),
      orbitBitfield: new Bitfield(maxCatalogSize),
      coverageBitfield: new Bitfield(maxCatalogSize),
      labelBitfield: new Bitfield(maxCatalogSize),
      modelBitfield: new Bitfield(maxCatalogSize),
    }
  }

  // Set bits in the objectsBitfield based on filtered data
  // Create new bitfields
  const newObjectsBitfield = new Bitfield(maxCatalogSize);
  const newOrbitBitfield = new Bitfield(maxCatalogSize);
  const newCoverageBitfield = new Bitfield(maxCatalogSize);
  const newLabelBitfield = new Bitfield(maxCatalogSize);
  const newModelBitfield = new Bitfield(maxCatalogSize);

  // Set bits based on filtered data and existing bitfields
  const rowIDFunc = get(rowID);

  get(gridApi).forEachNodeAfterFilter((node: any) => {
    const id = rowIDFunc(node.data);
    newObjectsBitfield.set(id, true); // Set bit to 'true' for each id
    if (!isNewGroup) {
      if (updatedGroup.orbitBitfield.get(id)) newOrbitBitfield.set(id, true);
      if (updatedGroup.coverageBitfield.get(id)) newCoverageBitfield.set(id, true);
      if (updatedGroup.labelBitfield.get(id)) newLabelBitfield.set(id, true);
      if (updatedGroup.modelBitfield.get(id)) newModelBitfield.set(id, true);
    }
  });

  // Replace old bitfields with new ones
  updatedGroup.objectsBitfield = newObjectsBitfield;
  updatedGroup.orbitBitfield = newOrbitBitfield;
  updatedGroup.coverageBitfield = newCoverageBitfield;
  updatedGroup.labelBitfield = newLabelBitfield;
  updatedGroup.modelBitfield = newModelBitfield;

  // Update the groups store
  groups.update(currentGroups => {
    currentGroups[gID] = updatedGroup;
    console.log(currentGroups);
    return currentGroups;
  });
};

// Helper function to convert a buffer to a base64 string
function bufferToBase64(buffer: Buffer): string {
  return Buffer.from(buffer).toString('base64');
}

// Helper function to convert a base64 string to a buffer
function base64ToBuffer(base64: string): Buffer {
  return Buffer.from(base64, 'base64');
}

// Function to export groups
export const exportGroup = async (groupsObject: Record<string, any>): Promise<string> => {
  const serializedGroups: Record<string, any> = {};

  for (const [groupId, group] of Object.entries(groupsObject)) {
    serializedGroups[groupId] = {
      ...group,
      objectsBitfield: bufferToBase64(group.objectsBitfield.buffer),
      orbitBitfield: bufferToBase64(group.orbitBitfield.buffer),
      coverageBitfield: bufferToBase64(group.coverageBitfield.buffer),
      labelBitfield: bufferToBase64(group.labelBitfield.buffer),
      modelBitfield: bufferToBase64(group.modelBitfield.buffer)
    };
  }

  const exportScenario = JSON.stringify(serializedGroups);

  const lzWorker = new lzworker();
  lzWorker.postMessage({
    payload: exportScenario,
    method: "compressToEncodedURIComponent",
  });

  return new Promise((resolve) => {
    lzWorker.onmessage = (a) => {
      resolve(a.data);
    };
  });
};

// Helper function to check if a variable is an object
function isObject(value: unknown): value is Record<string, any> {
  return typeof value === 'object' && value !== null;
}

// Function to import groups
export const importGroup = async (compressedData: string): Promise<Record<string, any>> => {
  const lzWorker = new lzworker();
  lzWorker.postMessage({
    payload: compressedData,
    method: "decompressFromEncodedURIComponent",
  });

  return new Promise((resolve) => {
    lzWorker.onmessage = (a) => {
      const parsedData = JSON.parse(a.data);
      const groupsObject: Record<string, any> = {};

      for (const [groupId, group] of Object.entries(parsedData)) {
        if (!isObject(group)) {
          throw new Error(`Group ${groupId} is not an object`);
        }
        groupsObject[groupId] = {
          ...group,
          objectsBitfield: new Bitfield(base64ToBuffer(group.objectsBitfield)),
          orbitBitfield: new Bitfield(base64ToBuffer(group.orbitBitfield)),
          coverageBitfield: new Bitfield(base64ToBuffer(group.coverageBitfield)),
          labelBitfield: new Bitfield(base64ToBuffer(group.labelBitfield)),
          modelBitfield: new Bitfield(base64ToBuffer(group.modelBitfield))
        };
      }

      resolve(groupsObject);
    };
  });
};

export function getFilteredData(columnDefs: any[], rowData: any[], filterModel: any): any[] {

  // Create a div element to host the grid (this won't be added to the document)
  const gridDiv = document.createElement('div');

  const gridOptions: GridOptions = {
    columnDefs: columnDefs,
    rowData: rowData,
  };

  // Create the grid passing in the div and grid options
  const grid = new Grid(gridDiv, gridOptions);
  let gridApi: any = gridOptions.api;
  // Set the model with your filters
  gridApi.setFilterModel(filterModel);

  // Perform the filtering
  gridApi.onFilterChanged();

  // Retrieve the filtered data
  const filteredData: any[] = [];
  gridApi.forEachNodeAfterFilter((node: any) => {
    filteredData.push(node.data);
  });

  return filteredData;
}