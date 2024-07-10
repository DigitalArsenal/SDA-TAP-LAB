//@ts-ignore
import { shiftEvent } from "@/stores/cesiumsync/events";
//@ts-ignore
import { ScreenSpaceEventType, ScreenSpaceEventHandler, KeyboardEventModifier } from "orbpro";

export const addPointerEventHandler = (viewer) => {
    /*Pointer Events*/
    let pointerScreenSpaceEventHandler = new ScreenSpaceEventHandler(viewer.canvas);

    for (let x in ScreenSpaceEventType) {
        pointerScreenSpaceEventHandler.setInputAction((e) => {
            shiftEvent.set(
                { ...e, shiftKey: true, ScreenSpaceEventType: x }
            );
        }, ScreenSpaceEventType[x], KeyboardEventModifier.SHIFT);
    }
    pointerScreenSpaceEventHandler.setInputAction((e) => {
        let dP = viewer.scene.drillPick(e.position);
        if (!dP.length) {
            viewer.trackedEntity = null;
        } else {
            let id;
            for (let i = 0; i < dP.length; i++) {
                id = dP[i].id;
                if (id) break;
            }
            if (id) {
                viewer.trackedEntity = id;
            }
        }
    }, ScreenSpaceEventType.LEFT_DOUBLE_CLICK);
    viewer.pointerScreenSpaceEventHandler = pointerScreenSpaceEventHandler;
}