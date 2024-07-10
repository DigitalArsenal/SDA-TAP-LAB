import { writable, type Writable } from "svelte/store";
import type { ColDef } from "ag-grid-community/dist/lib/entities/colDef";

// Initialize your store with data from localStorage
export const filterModelStore: Writable<any> = writable(
  {}
);

export const defaultID = (data: any) => data.id;
export const datatableShow = writable(false);
export const sortModelStore = writable({});
export const data = writable([]);
export const columnDefs: Writable<ColDef[]> = writable([]);
export const filterAction: Writable<Function | null> = writable(null);
export const rowID: Writable<Function> = writable(defaultID);
export const gridApi: Writable<any> = writable(null);