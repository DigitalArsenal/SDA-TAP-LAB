<script lang="ts">
  import Icon from "svelte-awesome";
  import { faRocket } from "@fortawesome/free-solid-svg-icons";
  import { onMount } from "svelte";
  import { launchData } from "@/stores/launch.store";
  onMount(() => {
    console.log(launchData);
  });

  import columnDefs from "../lib/Launch/columnDefs";
  import { viewer } from "@/stores/viewer.store";
  import {
    datatableShow,
    data,
    columnDefs as columnDefStore,
    filterAction,
    rowID,
    defaultID,
  } from "@/stores/datatable.store";
  import { mode, closeMode } from "@/stores/menu.store";
  import type { SpaceCatalogDataSource } from "orbpro";
  import filterActionFunction from "../lib/Launch/FilterActionFunction";
  import { scenario } from "@/stores/settings.store";
  import { activeEntity } from "@/stores/entity.store";

  const { settings } = scenario;

  let lastLoaded: Date;

  const defaultToolbar: any = document.querySelector(".cesium-viewer-toolbar");

  const toggleModal = async () => {
    settings.ClockSettings.shouldAnimate.set(false);
    if (!$mode) {
   
    }

    $columnDefStore = columnDefs;
    if ($viewer) {
      const dataSource: SpaceCatalogDataSource | any =
        $viewer.dataSources.getByName(
          "spaceaware"
        )[0] as SpaceCatalogDataSource;
      if (!lastLoaded || dataSource.lastLoaded > lastLoaded) {
        lastLoaded = dataSource.lastLoaded;
        data.set(dataSource.COMBINEDOMMCAT as any);
      }
    }
  };
</script>

<!-- Button to open the modal -->
<div
  tabindex="0"
  role="button"
  on:keydown={(e) => {
    if (e.key === "Enter" || e.key === "Space") toggleModal();
  }}
  class="relative text-white flex items-center text-md justify-center cursor-pointer"
  on:click={toggleModal}>
  <Icon scale={1.3} data={faRocket} />
  <div class="absolute bottom-[1px] right-[0px]">
    {Object.keys(launchData).length}
  </div>
</div>

<style>
  :global(.ag-paging-row-summary-panel) {
    position: relative;
    left: 10px;
  }
</style>
