import { writable, type Writable } from "svelte/store";
import { Entity, SpaceEntity } from "orbpro";
import { forceHideWidget } from "@/stores/selectionwidget.store"
export const activeEntity: Writable<Entity | SpaceEntity | any | null | any> = writable(null);

activeEntity.subscribe((aEntity: Entity) => {
    forceHideWidget.set(!!aEntity?.model);
    return aEntity;
})