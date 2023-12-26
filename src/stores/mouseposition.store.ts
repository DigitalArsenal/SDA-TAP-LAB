import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

export const mousePosition: Writable<any> = writable(false);