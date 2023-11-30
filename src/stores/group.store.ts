import { get, writable, type Writable } from "svelte/store";
import type { Groups } from "@/classes/group";

// Define the initial state with a default group
const initialState: Groups = {
  defaultGroup: {
    objectList: [],
    description: "",
    objects: {},
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

// Create the writable store with the initial state
export const groups: Writable<Groups> = writable(initialState);

export const activeGroup: Writable<string> = writable("defaultGroup");

export const resetDefaultGroup = () => {
  groups.update((groups: any) => {
    groups["defaultGroup"].filterObject = {};
    return groups;
  })
}


/**
 * Saves a group with the specified name and data.
 * @param name - The name of the group.
 * @param group - The group data to save.
 */
export function saveGroup(name: string, group: any): void {
  groups.update((currentGroups) => {
    currentGroups[name] = group;
    return currentGroups;
  });
}

/**
 * Loads a group by name.
 * @param name - The name of the group to load.
 * @returns The group data, or undefined if not found.
 */
export function loadGroup(name: string): any {
  const currentGroups = get(groups);
  return currentGroups[name];
}

import { Grid, type GridOptions } from 'ag-grid-community';

type FilterModel = {
  [key: string]: any; // Define the structure according to your filter model
};

export function getFilteredData(columnDefs: any[], rowData: any[], filterModel: FilterModel): any[] {
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