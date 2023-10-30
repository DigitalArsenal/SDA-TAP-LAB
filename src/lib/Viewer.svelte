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
    globalThis.viewer = viewer;
    viewer.scene.debugShowFramesPerSecond = true;
    $storeViewer = viewer;
    (async function () {
      globalThis.spaceCatalog = new Cesium.SpaceCatalogDataSource({
        name: "celestrak",
        scene: viewer.scene,
      });

      const ommBuffer = await (
        await fetch("https://api.spaceaware.io/data/OMM?format=fbs")
      ).arrayBuffer();
      const satcatBuffer = await (
        await fetch("https://api.spaceaware.io/data/CAT?format=fbs")
      ).arrayBuffer();
      await globalThis.spaceCatalog.loadOMM(ommBuffer, satcatBuffer);
      setTimeout(async () => {
        console.log("reload");
        await globalThis.spaceCatalog.loadOMM(ommBuffer, satcatBuffer);
      }, 5000);

      await viewer.dataSources.add(globalThis.spaceCatalog);
    })();

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
    height: 100vh;
    width: 100vw;
  }
</style>
