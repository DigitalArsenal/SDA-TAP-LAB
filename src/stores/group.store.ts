import { get, writable, type Writable } from "svelte/store";
import type { Groups } from "@/classes/group";

// Define the initial state with a default group
const initialState: Groups = {
  defaultGroup: { description: "", objects: {}, filterObject: {} },
};

// Create the writable store with the initial state
export const groups: Writable<Groups> = writable(initialState);

export const activeGroup: Writable<string> = writable("defaultGroup");

/**
 * Saves a group with the specified name and data.
 * @param name - The name of the group.
 * @param group - The group data to save.
 */
export function saveGroup(name: string, group: any): void {
  groups.update((currentGroups) => {
    currentGroups[name] = group;
    return currentGroups;
  });
}

/**
 * Loads a group by name.
 * @param name - The name of the group to load.
 * @returns The group data, or undefined if not found.
 */
export function loadGroup(name: string): any {
  const currentGroups = get(groups);
  return currentGroups[name];
}
