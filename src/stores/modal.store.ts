import { get, writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import { activeEntity } from './entity.store';
import { SpaceEntity, type Entity } from 'orbpro';
import { scenario } from "@/stores/settings.store";
import StatusBox from "@/lib/StatusBox/StatusBox.svelte";
import SpaceObjectTemplate from "@/lib/StatusBox/templates/SpaceObject.svelte";
import EventsModal from "@/lib/Events/MessageWrap.svelte";
import { Events } from 'ag-grid-community';
import { viewer } from './viewer.store';

export const content: Writable<any | undefined> = writable(undefined);
export const template: Writable<any | undefined> = writable(undefined);
export const title: Writable<any | undefined> = writable(undefined);
export const lastcontent: Writable<any | undefined> = writable(undefined);

activeEntity.subscribe((aEntity: Entity | null) => {
    if (get(content) === EventsModal) {
        return;
    }
    if (aEntity && get(scenario.selectedEntity)) {
        content.set(StatusBox);
        lastcontent.set(StatusBox);

        if (aEntity instanceof SpaceEntity) {
            template.set(SpaceObjectTemplate);
            get(viewer)!.referenceFrame = 1;
        } else {
            template.set(undefined);
        }
    } else {
        content.set(undefined);
        template.set(undefined);
    }
});