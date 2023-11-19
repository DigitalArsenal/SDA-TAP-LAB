import { writable, type Writable } from "svelte/store";
import type { ColDef } from "ag-grid-community/dist/lib/entities/colDef";

// Define a key for localStorage
const LOCAL_STORAGE_KEY = "filterModel";

// Function to save to localStorage
function saveToLocalStorage(key: any, value: any) {
  localStorage.setItem(key, JSON.stringify(value));
}

// Function to load from localStorage
function loadFromLocalStorage(key: any) {
  const stored = localStorage.getItem(key);
  return stored ? JSON.parse(stored) : {};
}

// Initialize your store with data from localStorage
export const filterModelStore: Writable<any> = writable(
  loadFromLocalStorage(LOCAL_STORAGE_KEY)
);

// Other stores...
export const datatableShow = writable(false);
export const sortModelStore = writable({});
export const data = writable([]);
export const columnDefs: Writable<ColDef[]> = writable([]);
export const filterAction: Writable<Function | null> = writable(null);

// Subscribe to the filterModelStore and update localStorage whenever it changes
filterModelStore.subscribe((value) => {
//saveToLocalStorage(LOCAL_STORAGE_KEY, value);
});
