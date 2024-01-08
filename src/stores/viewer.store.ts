import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import type { Viewer } from "orbpro";

export const viewer: Writable<Viewer | null> = writable(null);