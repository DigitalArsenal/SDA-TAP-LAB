import { get, writable, type Writable } from 'svelte/store';

// Define a structure to map index to multiplier values
export const timeSettings: Writable<any> = writable([
    { index: 0, minMultiplier: 0.001, maxMultiplier: 0.01 },
    { index: 1, minMultiplier: 0.01, maxMultiplier: 0.25 },
    { index: 2, minMultiplier: 0.25, maxMultiplier: 1 },
    { index: 3, minMultiplier: 1, maxMultiplier: 10 },
    { index: 4, minMultiplier: 10, maxMultiplier: 100 },
    { index: 5, minMultiplier: 100, maxMultiplier: 500 },
    { index: 6, minMultiplier: 500, maxMultiplier: 1000 },
    { index: 7, minMultiplier: 1000, maxMultiplier: 10000 },
    { index: 8, minMultiplier: 10000, maxMultiplier: 303400 },
    { index: 9, minMultiplier: 303400, maxMultiplier: Number.MAX_SAFE_INTEGER },
]);

// This function finds the appropriate multiplier for a given index
export function getMultiplierForIndex(index: number) {
    const setting = get(timeSettings).find((s: any) => s.index === index);
    return setting ? setting.minMultiplier : null;
}

export const _times = [2.5, 25, 250, 1500, 9000, 90000, 2160000, 15120000, 35707200, 58840000]; // in seconds

export const timeSpan = writable(0); // in seconds