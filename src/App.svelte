<script>
  import { onMount } from "svelte";
  import "orbpro/style/widgets.css";
  import {
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
