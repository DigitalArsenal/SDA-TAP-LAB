import { writable, type Writable } from "svelte/store";
import type { Groups } from "@/classes/group";

// Define the initial state with a default group
const initialState: Groups = {
    defaultGroup: { objects: {} }
};

export const activeGroup: Writable<string> = writable("defaultGroup");

// Create the writable store with the initial state
export const groups: Writable<Groups> = writable(initialState);