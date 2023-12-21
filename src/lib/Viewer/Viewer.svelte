<script lang="ts">
  import "orbpro_build/Cesium/Widgets/widgets.css";
  //@ts-ignore
  import {
    Viewer,
    GoogleMaps,
    Math as CesiumMath,
    Cartographic,
    Cartesian3,
    viewerReferenceFrameMixin,
    TileMapServiceImageryProvider,
    ImageryLayer,
  } from "orbpro";

  import { addRFSwap } from "@/behaviors/referenceFrameSwapAlt";
  import { onMount } from "svelte";
  import { viewer as storeViewer } from "../../stores/viewer.store";
  import { scenario } from "@/stores/settings.store";
  import { addButton } from "../Toolbar/toolbar";
  import SpaceObjectButton from "../SpaceObjects/Button.svelte";
  import SettingsButton from "../Settings/Button.svelte";
  import Events from "../Events/Button.svelte";
  import { isSafe } from "@/stores/dev.store";
  import { content, template } from "@/stores/modal.store";
  import Timeline from "@/lib/Timeline/TimeLine.svelte";
  import syncTwoWay from "./lib/SyncTwoWay";
  import { activeEntity } from "@/stores/entity.store";
  import SelectionWidget from "@/lib/SelectionWidget/SelectionWidget.svelte";

  const { selectedEntity, trackedEntity } = scenario;

  let viewer: Viewer;

  onMount(() => {
    viewer = new Viewer("cesiumContainer", {
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
    addRFSwap(viewer);
    viewer.scene.screenSpaceCameraController.minimumZoomDistance = 100.0;
    viewer.scene.debugShowFramesPerSecond = true;
    const cameraPosition = viewer.camera.positionWC;
    const cartographicPosition = Cartographic.fromCartesian(cameraPosition);
    const longitude = CesiumMath.toDegrees(cartographicPosition.longitude);
    const latitude = CesiumMath.toDegrees(cartographicPosition.latitude);
    const altitude = cartographicPosition.height + 30000000;
    viewer.camera.flyTo({
      destination: Cartesian3.fromDegrees(longitude, latitude, altitude),
      duration: 0,
    });

    //Imagery

    TileMapServiceImageryProvider.fromUrl(
      `${isSafe() ? "src" : ""}/assets/worldmap/blackmarble/2016`,
      {
        fileExtension: "jpg",
      }
    ).then((p: TileMapServiceImageryProvider) => {
      //TODO Imagery Layer Management
      const layer = viewer.imageryLayers.addImageryProvider(p);
      layer.dayAlpha = 0.0;
      layer.contrast = 1;
      (viewer as any).nightImageryLayer = layer;
    });

    // Override home button behavior
    viewer.homeButton.viewModel.command.beforeExecute.addEventListener(
      function (e) {
        e.cancel = true; // Cancel the default behavior
        // Set the new home view
        viewer.camera.flyTo({
          destination: Cartesian3.fromDegrees(longitude, latitude, altitude),
          duration: 0,
        });
        $selectedEntity = null;
        $trackedEntity = null;
      }
    );
    viewer.extend(viewerReferenceFrameMixin);

    if (isSafe()) {
      (globalThis as any).viewer = viewer;
    }
    $storeViewer = viewer;

    //Add Buttons
    addButton(SpaceObjectButton);
    addButton(Events);
    addButton(SettingsButton);

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

    const clock = viewer.clock;

    // Usage
    syncTwoWay(
      clock,
      "shouldAnimate",
      scenario.settings.ClockSettings.shouldAnimate
    );
    syncTwoWay(clock, "clockStep", scenario.settings.ClockSettings.clockStep);
    syncTwoWay(clock, "multiplier", scenario.settings.ClockSettings.multiplier);
  });

  // Active Entity
  $: {
    $activeEntity = $selectedEntity || $trackedEntity;
  }
</script>

<div id="cesiumContainer" />
{#if $selectedEntity}
  <SelectionWidget {viewer} />
{/if}

<style global lang="postcss">
  #cesiumContainer {
    height: 100%;
    width: 100%;
  }
</style>
