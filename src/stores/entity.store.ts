import { writable, get, type Writable } from "svelte/store";
import { Viewer, Entity, DataSource, SpaceEntity } from "orbpro";

export const activeEntity: Writable<Entity | SpaceEntity | null> = writable(null);