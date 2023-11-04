//@ts-ignore
import { ScreenSpaceEventType } from "orbpro";

export default (viewer) => {
  let minMax = (n, min, max) => Math.max(min, Math.min(max, n));

  let lastPinch = 0;
  let resetPinch = () => (lastPinch = 0);
  let zoomControl = a => {
    try {
      if (a.distance) {
        a = Math.sqrt(
          (a.distance.startPosition.x + a.distance.endPosition.x) * 2 +
          (a.distance.startPosition.y + a.distance.endPosition.y) * 2
        );
        let tt = lastPinch ? a - lastPinch : 0;
        lastPinch = +a;
        a = tt * 500;
      }

      let factor = a / 10000;
      viewer.camera.frustum.fov = minMax(
        viewer.camera.frustum.fov + factor,
        0.001,
        3
      );
    } catch (e) { }
  };

  viewer.setGroundControls = () => {
    viewer.scene.screenSpaceCameraController.zoomEventTypes = [];
    viewer.screenSpaceEventHandler.setInputAction(
      zoomControl,
      ScreenSpaceEventType.WHEEL
    );
    viewer.screenSpaceEventHandler.setInputAction(
      zoomControl,
      ScreenSpaceEventType.PINCH_MOVE
    );
    viewer.screenSpaceEventHandler.setInputAction(
      resetPinch,
      ScreenSpaceEventType.PINCH_END
    );
    viewer.cesiumWidget.screenSpaceEventHandler.removeInputAction(
      ScreenSpaceEventType.LEFT_DOUBLE_CLICK
    );
    viewer.camera.ignoreEllipsoid = true;
  };

  viewer.setSpaceControls = () => {
    viewer.scene.screenSpaceCameraController.zoomEventTypes = [1, 3, 4];
    [
      ScreenSpaceEventType.PINCH_MOVE,
      ScreenSpaceEventType.WHEEL,
      ScreenSpaceEventType.PINCH_END
    ].forEach(a => viewer.screenSpaceEventHandler.removeInputAction(a));
    viewer.camera.ignoreEllipsoid = false;
  };

  //tilt3DOnTerrain
}