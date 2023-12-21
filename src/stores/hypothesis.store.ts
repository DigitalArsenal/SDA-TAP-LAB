import { HYPT } from "@/classes/standards/HYP/HYP";
import { writable, type Writable } from "svelte/store";

export const activeHYP: Writable<HYPT | undefined> = writable(undefined)