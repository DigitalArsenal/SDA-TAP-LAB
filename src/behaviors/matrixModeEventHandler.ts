//@ts-ignore
import { scenario } from "@/stores/settings.store";
import { get } from "svelte/store";

//@ts-ignore
import { ScreenSpaceEventType, ScreenSpaceEventHandler, Viewer } from "orbpro";


let matrixModeScreenSpaceEventHandler: any = null;

export const addMatrixModeScreenSpaceEventHandler = (viewer: Viewer) => {
    const { settings } = scenario;
    let { shouldAnimate } = settings.ClockSettings;

    let { LEFT_DOWN, LEFT_UP, RIGHT_DOWN, RIGHT_UP, MOUSE_MOVE } = ScreenSpaceEventType;

    //MatrixMode
    if (matrixModeScreenSpaceEventHandler) return;
    matrixModeScreenSpaceEventHandler = new ScreenSpaceEventHandler(viewer.canvas);


    let startMatrix = () => {
        if (get(shouldAnimate)) {
            viewer.clock.shouldAnimate = false;
        }
    }

    let endMatrix = () => {
        if (get(shouldAnimate)) {
            viewer.clock.shouldAnimate = true;
        }
    }

    matrixModeScreenSpaceEventHandler.setInputAction((e: any) => {
        startMatrix();
    }, LEFT_DOWN);
    matrixModeScreenSpaceEventHandler.setInputAction((e: any) => {
        startMatrix();
    }, RIGHT_DOWN);
    matrixModeScreenSpaceEventHandler.setInputAction((e: any) => {
        endMatrix();
    }, LEFT_UP);
    matrixModeScreenSpaceEventHandler.setInputAction((e: any) => {
        endMatrix();
    }, RIGHT_UP);
}

export const removeMatrixModeScreenSpaceEventHandler = () => {
    if (matrixModeScreenSpaceEventHandler) {
        matrixModeScreenSpaceEventHandler.destroy();
        matrixModeScreenSpaceEventHandler = null;
    }
}