//@ts-ignore
import { metaEvents } from "@/stores/cesiumsync/cesiumevents";
import { GraphicsDefault } from "@/stores/defaults";
import Settings from "@/stores/scenario/settings";
import * as GlobalOrb from "orbpro";

let { orbit } = Settings.EntityState;
//@ts-ignore
let { Color, ScreenSpaceEventHandler, ScreenSpaceEventType } = GlobalOrb;

metaEvents.orbitSelect.subscribe(args => {
    if (!args) return;
    let { entity, show } = args;

    if (entity && entity.constructor.name === "SpaceObject") {
        let { showOrbit } = entity.entityCollection.owner;

        orbit.update(s => {
            s[args.entity.metadata.NORAD_CAT_ID] = show;
            return s;
        })

        showOrbit(entity, {
            width: entity.properties?.path?.width || GraphicsDefault.path.width,
            material: entity.properties?.path?.material || Color.fromCssColorString(GraphicsDefault.path.material.color),
            show,
        });
    }
})

export const addShowOrbitEventHandler = (viewer) => {

    let previousEntity;
    /*Pointer Events*/
    viewer.showOrbitEventHandler = new ScreenSpaceEventHandler(viewer.canvas);
    viewer.showOrbitEventHandler.setInputAction(function (movement) {
        let clickedEntity = viewer.scene.pick(movement.position, 38, 38);
        if (clickedEntity?.id?.properties?.unselectable?.getValue()) return;
        if (clickedEntity?.id) {
            viewer.selectedEntity = clickedEntity?.id;
        }
        let previouslySelected = clickedEntity?.id === previousEntity;
        let _show = previouslySelected ? !clickedEntity?.id?.path?.show?._value : false;

        previousEntity = viewer.selectedEntity;
        viewer.scene.render();
        metaEvents.orbitSelect.set({ entity: clickedEntity?.id, show: _show });
    }, ScreenSpaceEventType.LEFT_CLICK);
};

export const removeShowOrbitEventHandler = (viewer) => {
    if (!ScreenSpaceEventType) return;
    viewer.showOrbitEventHandler.removeInputAction(ScreenSpaceEventType.LEFT_CLICK);
}