<script lang="ts">
  import "orbpro_build/Cesium/Widgets/widgets.css";
  //@ts-ignore
  import * as Cesium from "orbpro";
  import { onMount, onDestroy } from "svelte";
  import { viewer as storeViewer } from "../stores/viewer.store";
  import { scenario } from "@/stores/settings.store";
  import { addButton } from "./Toolbar/toolbar";
  import Settings from "./Settings/Settings.svelte";
  import { isSafe } from "@/stores/dev.store";
  import { content } from "@/stores/modal.store";
  import Timeline from "@/lib/Timeline/TimeLine.svelte";
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
      //animationContainer: false,
      animation: true,
      timeline: false,
      timelineContainer: true,
      selectionIndicator: false,
      requestRenderMode: true,
      showRenderLoopErrors: isSafe() ? true : false,
      bottomContainer: document.createElement("p"),
      orderIndependentTranslucency: false,
      shadows: true,
    });

    new Timeline({
      props: { viewer },
      target: viewer.timeline.container,
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

    //Clock sync
    const clock = viewer.clock;

    const originalShouldAnimatePropertyDescriptor: any =
      Object.getOwnPropertyDescriptor(Cesium.Clock.prototype, "shouldAnimate");

    // Define a new property 'shouldAnimate' with a getter and setter
    Object.defineProperty(clock, "shouldAnimate", {
      get: function () {
        return originalShouldAnimatePropertyDescriptor.get.call(this);
      },
      set: function (value) {
        originalShouldAnimatePropertyDescriptor.set.call(this, value);
        scenario.settings.ClockSettings.shouldAnimate.set(value);
      },
    });

    // Store the original property descriptor
    const originalClockStepPropertyDescriptor: any =
      Object.getOwnPropertyDescriptor(Cesium.Clock.prototype, "clockStep");

    // Re-define the property with a getter/setter
    Object.defineProperty(clock, "clockStep", {
      get: function () {
        return originalClockStepPropertyDescriptor.get.call(this);
      },
      set: function (value) {
        originalClockStepPropertyDescriptor.set.call(this, value);
        scenario.settings.ClockSettings.clockStep.set(value);
      },
      configurable: true, // Ensure that the property can be redefined later
    });
  });
</script>

<div id="cesiumContainer" />

<style global lang="postcss">
  #cesiumContainer {
    height: 100%;
    width: 100%;
  }
</style>
