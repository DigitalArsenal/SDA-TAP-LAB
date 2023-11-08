import { writable, get } from "svelte/store";
import type { Writable } from "svelte/store";

export const showRows: Writable<boolean> = writable(false);
