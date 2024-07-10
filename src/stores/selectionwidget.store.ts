import { get, writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

export const forceHideWidget: Writable<boolean> = writable(false);