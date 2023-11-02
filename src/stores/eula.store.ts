import { writable } from "svelte/store";
import type { Writable } from "svelte/store";
export const eulaVersion: Writable<number> = writable(1.0);
export const showEULA: Writable<boolean> = writable(true);
