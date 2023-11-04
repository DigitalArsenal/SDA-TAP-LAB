import { selectedEntityPosition, selectedEntityVelocity } from "@/stores/livedata/entityposvel";
//@ts-ignore
import { Cartographic, Math as CesiumMath } from "orbpro";

let viewerEnableLivePosVel = null;
let last = 0;

export const enableLivePosVel = (viewer) => {

    if (!viewer || viewerEnableLivePosVel) return;
    viewerEnableLivePosVel = viewer.clock.onTick.addEventListener((c) => {
        let tt = (new Date()).getTime();
        if (last && tt < last + 100) return;
        last = tt;
        let tPos = viewer?.selectedEntity?.position?.getValue(c.currentTime, null, true).result;
        if (!tPos) return;
        let { latitude, longitude, height } = (Cartographic.fromCartesian(
            tPos,
            viewer.scene.globe.ellipsoid));

        latitude = CesiumMath.toDegrees(latitude);
        longitude = CesiumMath.toDegrees(longitude);
        let altitude = height / 1000;

        selectedEntityPosition.set({ latitude, longitude, altitude });
        let velocity = Math.sqrt(
            viewer.selectedEntity.vx ** 2 +
            viewer.selectedEntity.vy ** 2 +
            viewer.selectedEntity.vz ** 2) * 3.6;
        //km/s
        selectedEntityVelocity.set(velocity);
    });
    viewer.scene.render();
}

export const removeLivePosVel = (viewer) => {
    if (viewer && viewerEnableLivePosVel) {
        viewerEnableLivePosVel();
        viewerEnableLivePosVel = null;
    }
}