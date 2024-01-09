import { get, writable, type Writable } from "svelte/store";
import type { Groups } from "@/classes/group";
import lzworker from "@/workers/lzWorker.mjs?worker&inline";
import { columnDefs as currentColumnDefs, data, gridApi, rowID } from "./datatable.store";
import Bitfield from "@/utilities/bitfield";
import { Grid, type GridOptions, type IFilterDef } from "ag-grid-community";
//@ts-ignore
import ipfsHash from "pure-ipfs-only-hash";

import { Buffer } from "buffer";
import { viewer } from "@/stores/viewer.store";
import { Color } from "orbpro";

const maxCatalogSize = 2e5;

/**
 * Generates a unique hash ID for a group based on its filter object using xxhashjs.
 * @param filterObject - The filter object of the group.
 * @returns A string representing the group ID.
 */
async function createGroupID(filterObject: IFilterDef): Promise<string> {
  // Convert the filter object to a string
  const filterString = JSON.stringify(filterObject);

  // Generate the hash
  const hash = await ipfsHash.of(filterString);

  return hash;
}

export const initialState: Groups = {
  defaultGroup: {
    objects: {},
    name: "defaultGroup",
    description: "",
    objectsBitfield: new Bitfield(maxCatalogSize),
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
      objects: {},
      objectsBitfield: new Bitfield(maxCatalogSize),
      filterObject,
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
      filterObject
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

  });

  // Replace old bitfields with new ones
  updatedGroup.objectsBitfield = newObjectsBitfield;

  // Update the groups store
  currentGroups[gID] = updatedGroup;
  groups.set(currentGroups);

  return gID;
};

export const removeGroup = (groupID: string) => {
  const currentGroups = get(groups); // Grabbing the snapshot of current groups, like a photo from a moving train.

  if (currentGroups[groupID]) {
    delete currentGroups[groupID]; // If the groupID exists, it's like finding a leaf on the road and letting it fly with the wind.
    groups.set(currentGroups); // Setting the new state of groups, like painting a new picture without that one leaf.
  } else {
    console.warn(`Group with ID ${groupID} not found`); // If there's no such group, it's like a whisper in the forest with no one around to hear.
  }
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
      objectsBitfield: group.objectsBitfield.isEmpty() ? '' : bufferToBase64(group.objectsBitfield.buffer),
      orbitBitfield: group.orbitBitfield.isEmpty() ? '' : bufferToBase64(group.orbitBitfield.buffer),
      coverageBitfield: group.coverageBitfield.isEmpty() ? '' : bufferToBase64(group.coverageBitfield.buffer),
      labelBitfield: group.labelBitfield.isEmpty() ? '' : bufferToBase64(group.labelBitfield.buffer),
      modelBitfield: group.modelBitfield.isEmpty() ? '' : bufferToBase64(group.modelBitfield.buffer)
    };
  }

  const exportGroup = JSON.stringify(serializedGroups);

  const lzWorker = new lzworker();
  lzWorker.postMessage({
    payload: exportGroup,
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


export const updateProperties = (gID: string) => {
  // Get the viewer from the store
  const _viewer = (globalThis as any).viewer;
  if (!_viewer) {
    return;
  }

  // Retrieve the groups from the store
  const currentGroups = get(groups);

  // Find the active group's properties
  const activeGroupProps = currentGroups[gID];
  if (!activeGroupProps) {
    console.warn(`Active group with ID ${gID} not found`);
    return;
  }

  // Get all the indices of set bits in the objectsBitfield of the active group
  const groupObjects = activeGroupProps.objectsBitfield.getAllSetIndices();

  // Access the dataSource from the viewer
  const dataSource = _viewer.dataSources.getByName("spaceaware")[0];
  dataSource.entities.suspendEvents();

  // Update properties for each entity in the active group
  groupObjects.forEach((id) => {
    const entity = dataSource.entities.getById(id.toString());
    if (entity) {
      // Update point properties if they exist
      if (entity.point) {
        entity.point.show = true as any;
        entity.point.pixelSize = activeGroupProps.point.pixelSize as any;
        entity.point.color = Color.fromCssColorString(activeGroupProps.point.color) as any;
        entity.point.outlineWidth = activeGroupProps.point.outlineWidth as any;
        entity.point.outlineColor = Color.fromCssColorString(activeGroupProps.point.outlineColor) as any;
        if (!activeGroupProps.point.outlineWidth) {
          entity.point.outlineColor = null as any;
          entity.point.outlineWidth = null as any;
        }
      }
      // Update path properties if they exist
      if (entity.path) {
        entity.path.width = activeGroupProps.path.width as any;
        entity.path.material = Color.fromCssColorString(activeGroupProps.path.material.color) as any;
      }
      entity.show = true;
    }
  });

  dataSource.entities.resumeEvents();
  _viewer.scene.render();
};
