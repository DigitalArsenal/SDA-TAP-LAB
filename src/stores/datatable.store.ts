import { writable } from 'svelte/store';

// Stores for filter and sort models
export const filterModelStore = writable({});
export const sortModelStore = writable({});
export const show = writable(false);