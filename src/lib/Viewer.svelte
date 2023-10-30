<script lang="ts">
  import "orbpro_build/Cesium/Widgets/widgets.css";
  //@ts-ignore
  import * as Cesium from "orbpro";
  import { onMount } from "svelte";
  import { viewer as storeViewer } from "../stores/viewer.store";
  Cesium.GoogleMaps.defaultApiKey = "AIzaSyDisL7N830iKKMfzFYPOQByT-yxySas-24";

  onMount(() => {
    const viewer: Cesium.Viewer = new Cesium.Viewer("cesiumContainer", {
      //globe: false,
      baseLayerPicker: true,
      homeButton: true,
      fullscreenButton: true,
      geocoder: true,
      infoBox: false,
      navigationHelpButton: false,
      projectionPicker: true,
      sceneModePicker: true,
      animationContainer: true,
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
    $storeViewer = viewer;
    /*(async function () {
      try {
        const tileset = await Cesium.createGooglePhotorealistic3DTileset();
        viewer.scene.primitives.add(tileset);
      } catch (error) {
        console.log(`Failed to load tileset: ${error}`);
      }
    })();*/
  });
</script>

<div id="cesiumContainer" />

<style>
  #cesiumContainer {
    height: 100%;
    width: 100%;
  }
</style>
