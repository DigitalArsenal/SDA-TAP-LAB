//@ts-ignore
import { scenario } from "@/stores/settings.store";
import type { Viewer } from "orbpro";

let rfSwap: any;
let swapAlt: any;
let reF;

export const addRFSwap = (viewer: Viewer) => {
    let { settings } = scenario;

    let { referenceFrame } = settings;
    let { referenceFrameSwapAltitude } = settings.CameraSettings;
    referenceFrameSwapAltitude.subscribe(rfSA => {
        swapAlt = rfSA;
    });

    referenceFrame.subscribe(rF => {
        reF = rF;
    })
    if (rfSwap) return;
    rfSwap = viewer.clock.onTick.addEventListener(() => {
        if ((viewer.camera as any)._positionCartographic.height < swapAlt) {
            viewer.imageryLayers.get(2).show = true; //TODO pull out into Imagery Layers Widget
            referenceFrame.set(0);
        } else if ((viewer.camera as any)._positionCartographic.height > swapAlt) {
            viewer.imageryLayers.get(2).show = false; //TODO pull out into Imagery Layers Widget
        }
    });
}
export const removeRFSwap = (viewer: Viewer) => {
    if (!rfSwap) return;
    rfSwap();
    viewer.clock.onTick.removeEventListener(rfSwap);
    rfSwap = null;
}