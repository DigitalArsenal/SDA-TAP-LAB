import { writable, type Writable } from "svelte/store";

export const mode: Writable<any> = writable(null);
export const closeMode:Writable<Function | null> = writable(null);