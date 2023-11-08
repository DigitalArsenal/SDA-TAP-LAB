//@ts-ignore
import { scenario } from "@/stores/settings.store";
import { get } from "svelte/store";

//@ts-ignore
import { ScreenSpaceEventType, ScreenSpaceEventHandler, Viewer } from "orbpro";


let matrixModeScreenSpaceEventHandler: any = null;

export const addMatrixModeScreenSpaceEventHandler = (viewer: Viewer) => {
    const { settings } = scenario;
    let { shouldAnimate, clockStep } = settings.ClockSettings;

    let { LEFT_DOWN, LEFT_UP, RIGHT_DOWN, RIGHT_UP, MOUSE_MOVE } = ScreenSpaceEventType;

    //MatrixMode
    if (matrixModeScreenSpaceEventHandler) return;
    matrixModeScreenSpaceEventHandler = new ScreenSpaceEventHandler(viewer.canvas);

    let _localShouldAnimate: boolean = false;
    let _localClockStep: number = 1;

    let startMatrix = () => {
        _localClockStep = get(clockStep);
        if (get(shouldAnimate)) {
            viewer.clock.shouldAnimate = false;
            _localShouldAnimate = true;
        }
    }

    let endMatrix = () => {
        if (_localShouldAnimate) {
            viewer.clock.shouldAnimate = true;
            viewer.clock.clockStep = _localClockStep;
        }
        _localShouldAnimate = false;
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