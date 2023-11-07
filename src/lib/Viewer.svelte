<script lang="ts">
  import "orbpro_build/Cesium/Widgets/widgets.css";
  //@ts-ignore
  import * as Cesium from "orbpro";
  import { onMount } from "svelte";
  import { viewer as storeViewer } from "../stores/viewer.store";
  import { addButton } from "./Toolbar/toolbar";
  import Settings from "./Settings/Settings.svelte";
  import { isSafe } from "@/stores/dev.store";
  import { content } from "@/stores/modal.store";

  Cesium.GoogleMaps.defaultApiKey = "AIzaSyDisL7N830iKKMfzFYPOQByT-yxySas-24";

  onMount(() => {
    const viewer: Cesium.Viewer = new Cesium.Viewer("cesiumContainer", {
      //globe: false,
      baseLayerPicker: true,
      homeButton: true,
      fullscreenButton: false,
      geocoder: true,
      infoBox: false,
      navigationHelpButton: false,
      //projectionPicker: true,
      sceneModePicker: true,
      animationContainer: false,
      animation: false,
      timeline: false,
      timelineContainer: true,
      selectionIndicator: false,
      requestRenderMode: true,
      showRenderLoopErrors: true,
      bottomContainer: document.createElement("p"),
      orderIndependentTranslucency: false,
      shadows: true,
    });

    viewer.scene.debugShowFramesPerSecond = true;
    const cameraPosition = viewer.camera.positionWC;
    const cartographicPosition =
      Cesium.Cartographic.fromCartesian(cameraPosition);
    const longitude = Cesium.Math.toDegrees(cartographicPosition.longitude);
    const latitude = Cesium.Math.toDegrees(cartographicPosition.latitude);
    const altitude = cartographicPosition.height + 10000000;
    viewer.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(longitude, latitude, altitude),
      duration: 0,
    });
    viewer.extend(Cesium.viewerReferenceFrameMixin);
    
    if (isSafe()) {
      (globalThis as any).viewer = viewer;
    }
    $storeViewer = viewer;

    //Add Buttons
    addButton(Settings);

    const toolbar: any = document.querySelector(".cesium-viewer-toolbar");

    const children = toolbar.children;

    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (!child.classList.contains("added-button")) {
        child.addEventListener("click", (event: any) => {
          $content = undefined;
        });
      }
    }
  });
</script>

<div id="cesiumContainer" />

<style global lang="postcss">
  #cesiumContainer {
    height: 100%;
    width: 100%;
  }
</style>
