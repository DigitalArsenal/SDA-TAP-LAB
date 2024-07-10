import { writable, get } from "svelte/store";
import type { Writable } from "svelte/store";

export const show: Writable<boolean> = writable(false);
