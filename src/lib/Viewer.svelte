<script lang="ts">
  import "orbpro_build/Cesium/Widgets/widgets.css";
  //@ts-ignore
  import * as Cesium from "orbpro";
  import { onMount } from "svelte";
  import { viewer as storeViewer } from "../stores/viewer.store";
  import MyButton from "./Toolbar/MyButton.svelte";

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
      projectionPicker: true,
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

    $storeViewer = viewer;
    const toolbar: any = document.querySelector(".cesium-viewer-toolbar");

    // Create a new button
    const buttonContainer = document.createElement("button");
    buttonContainer.className = "cesium-button cesium-toolbar-button";

    let myButton = new MyButton({ target: buttonContainer });
    console.log(myButton);
    // Append the button to the toolbar
    toolbar.appendChild(myButton.$$.root);

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

<style global lang="postcss">
  #cesiumContainer {
    height: 100%;
    width: 100%;
  }
</style>
