<!-- Settings.svelte -->
<script lang="ts">
  import Icon from "svelte-awesome";
  import { faSatellite } from "@fortawesome/free-solid-svg-icons";
  import columnDefs from "./lib/columnDefs";
  import { viewer } from "@/stores/viewer.store";
  import {
    datatableShow,
    data,
    columnDefs as columnDefStore,
    filterAction,
  } from "@/stores/datatable.store";
  import { mode, closeMode } from "@/stores/menu.store";
  import type { SpaceCatalogDataSource } from "orbpro";
  import filterActionFunction from "./lib/FilterActionFunction";
  import { scenario } from "@/stores/settings.store";
  const { selectedEntity, settings } = scenario;
  
  let lastLoaded: Date;

  const defaultToolbar: any = document.querySelector(".cesium-viewer-toolbar");

  const toggleModal = async () => {
    settings.ClockSettings.shouldAnimate.set(false);
    if (!$mode) {
      $mode = "SpaceObjects";
      $filterAction = filterActionFunction;
      $datatableShow = true;
      defaultToolbar.style.display = "none";
      $closeMode = () => {
        settings.ClockSettings.shouldAnimate.set(false);
        $selectedEntity = null;
        $mode = null;
        $datatableShow = false;
        defaultToolbar.style.display = "";
      };
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
  class="text-white flex items-center text-md justify-center cursor-pointer"
  on:click={toggleModal}
>
  <Icon scale={1.5} data={faSatellite} />
</div>

<style>
  :global(.ag-paging-row-summary-panel) {
    position: relative;
    left: 10px;
  }
</style>
