import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

export const content: Writable<any | undefined> = writable(undefined);
export const template: Writable<any | undefined> = writable(undefined);