<script>
  import { onMount } from "svelte";
  import "orbpro/style/widgets.css";
  import {
    Math as CesiumMath,
    Cartographic,
    Cartesian3,
    Viewer,
    DynamicTimeline,
    SpaceCatalogDataSource,
  } from "orbpro";

  onMount(async () => {
    const viewer = new Viewer("cesiumContainer", {
      creditContainer: document.createElement("p"),
      timelineContainer: true,
      timeline: false,
    });

    const cameraPosition = viewer.camera.positionWC;
    const cartographicPosition = Cartographic.fromCartesian(cameraPosition);
    const longitude = CesiumMath.toDegrees(cartographicPosition.longitude);
    const latitude = CesiumMath.toDegrees(cartographicPosition.latitude);
    const altitude = cartographicPosition.height + 30000000;
    viewer.camera.flyTo({
      destination: Cartesian3.fromDegrees(longitude, latitude, altitude),
      duration: 0,
    });

    globalThis.viewer = viewer;

    const timeline = new DynamicTimeline(viewer.timeline.container, viewer);

    globalThis.spaceCatalog = new SpaceCatalogDataSource({
      name: "celestrak",
    });

    const ommBuffer = await (
      await fetch("https://api.spaceaware.io/data/OMM?format=fbs")
    ).arrayBuffer();
    const satcatBuffer = await (
      await fetch("https://api.spaceaware.io/data/CAT?format=fbs")
    ).arrayBuffer();
    await globalThis.spaceCatalog.loadOMM(ommBuffer, satcatBuffer);
    await viewer.dataSources.add(globalThis.spaceCatalog);
    viewer.clock.shouldAnimate = true;
  });
</script>

<div id="cesiumContainer" />

<style>
  #cesiumContainer {
    width: 100%;
    height: 100%;
  }
</style>
