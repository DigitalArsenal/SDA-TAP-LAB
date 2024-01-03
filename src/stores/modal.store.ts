import { get, writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import { activeEntity } from './entity.store';
import { SpaceEntity, type Entity } from 'orbpro';
import { scenario } from "@/stores/settings.store";
import StatusBox from "@/lib/StatusBox/StatusBox.svelte";
import SpaceObjectTemplate from "@/lib/StatusBox/templates/SpaceObject.svelte";
import { activeEvent } from "@/stores/events.store";

export const content: Writable<any | undefined> = writable(undefined);
export const template: Writable<any | undefined> = writable(undefined);
export const title: Writable<any | undefined> = writable(undefined);
export const lastcontent: Writable<any | undefined> = writable(undefined);

activeEntity.subscribe((aEntity: Entity | null) => {
    if (get(activeEvent)) {
        return;
    }
    if (aEntity && get(scenario.selectedEntity)) {
        content.set(StatusBox);
        lastcontent.set(StatusBox);

        if (aEntity instanceof SpaceEntity) {
            template.set(SpaceObjectTemplate);
        } else {
            template.set(undefined);
        }
    } else {
        content.set(undefined);
        template.set(undefined);
    }
});