//@ts-ignore
import { scenario } from "@/stores/settings.store";
import type { Viewer } from "orbpro";
import { Math as CesiumMath } from "orbpro";
import { get } from "svelte/store";

let rfSwap: any;
let swapAlt: number;
let reF: number;
let _old: any = null;
let clearAlt = 20000;

export const addRFSwap = (viewer: Viewer) => {
    let { settings } = scenario;

    let { referenceFrame } = settings;
    let { referenceFrameSwapAltitude } = settings.CameraSettings;
    referenceFrameSwapAltitude.subscribe(rfSA => {
        swapAlt = rfSA;
    });

    referenceFrame.subscribe(rF => {
        reF = rF;
    });
    if (rfSwap) return;
    rfSwap = viewer.clock.onTick.addEventListener(() => {
        const { nightImageryLayer } = viewer as any;
        const cameraHeight = (viewer.camera as any)._positionCartographic.height;
        const altitudeInRange = cameraHeight >= clearAlt && cameraHeight < swapAlt;

        if (cameraHeight < swapAlt) {
            if (altitudeInRange && nightImageryLayer) {
                // Apply alpha based on altitude
                nightImageryLayer.alpha = CesiumMath.clamp((cameraHeight - clearAlt) / (swapAlt - clearAlt), 0, 1);
            }
            _old = get(referenceFrame);
            referenceFrame.set(0);
        } else if (cameraHeight >= swapAlt) {
            if (nightImageryLayer) {
                nightImageryLayer.alpha = 1;
            }
            if (_old !== null) {
                referenceFrame.set(_old);
                _old = null;
            }
        }
    });
};

export const removeRFSwap = (viewer: Viewer) => {
    if (!rfSwap) return;
    viewer.clock.onTick.removeEventListener(rfSwap);
    rfSwap = null;
};
