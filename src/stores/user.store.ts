
import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

export const IP: Writable<string | null> = writable(null);