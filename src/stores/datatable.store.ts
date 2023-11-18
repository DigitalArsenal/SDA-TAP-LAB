import type { ColDef } from "ag-grid-community/dist/lib/entities/colDef";
import { writable, type Writable } from "svelte/store";

// Stores for filter and sort models
export const filterModelStore = writable({});
export const sortModelStore = writable({});
export const mode:Writable<any> = writable(null);
export const data = writable([]);
export const columnDefs: Writable<ColDef[]> = writable([]);
