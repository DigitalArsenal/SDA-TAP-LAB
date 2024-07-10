import { get, writable, type Writable } from "svelte/store";
import { Entity, SpaceEntity } from "orbpro";
import { forceHideWidget } from "@/stores/selectionwidget.store";
import { content, template, title, lastcontent } from "./modal.store";
import EventsModal from "@/lib/Events/MessageWrap.svelte";
import { scenario } from "@/stores/settings.store";
import StatusBox from "@/lib/StatusBox/StatusBox.svelte";
import SpaceObjectTemplate from "@/lib/StatusBox/templates/SpaceObject.svelte";
import SITTemplate from "@/lib/StatusBox/templates/SIT.svelte";

export const activeEntity: Writable<Entity | SpaceEntity | any | null | any> = writable(null);

activeEntity.subscribe((aEntity: Entity) => {
    forceHideWidget.set(!!aEntity?.model);
    return aEntity;
});

activeEntity.subscribe((aEntity: Entity | null) => {
    if (get(content) === EventsModal) {
        return;
    }
    if (aEntity && get(scenario.selectedEntity)) {
        content.set(StatusBox);
        lastcontent.set(StatusBox);

        if (aEntity instanceof SpaceEntity) {
            (globalThis as any).viewer.scene.screenSpaceCameraController.minimumZoomDistance = 100.0;
            template.set(SpaceObjectTemplate);
            //scenario.settings.referenceFrame.set(1);
        } else if (aEntity.properties?.SIT) {
            (globalThis as any).viewer.scene.screenSpaceCameraController.minimumZoomDistance = 10.0;
            template.set(SITTemplate);
            title.set(undefined);
        } else {
            (globalThis as any).viewer.scene.screenSpaceCameraController.minimumZoomDistance = 0.0;
            title.set(undefined);
            template.set(undefined);
        }
    } else {
        content.set(undefined);
        template.set(undefined);
    }
});