import { SvelteComponent } from 'svelte';
import { writable, get } from 'svelte/store';
import type { Writable } from 'svelte/store';

export const content: Writable<any | undefined> = writable(undefined);