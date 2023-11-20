<!-- Settings.svelte -->
<script lang="ts">
  import Icon from "svelte-awesome";
  import { faSatellite } from "@fortawesome/free-solid-svg-icons";
  import columnDefs from "./lib/columnDefs";
  import { loadData } from "./lib/loadData";
  import { viewer } from "@/stores/viewer.store";
  import {
    datatableShow,
    data,
    columnDefs as columnDefStore,
    filterAction,
  } from "@/stores/datatable.store";
  import { mode, closeMode } from "@/stores/menu.store";
  import {
    scenario,
    updatedDataSources,
    lastUpdateDataSource,
  } from "@/stores/settings.store";
  import filterActionFunction from "./lib/FilterActionFunction";

  const defaultToolbar: any = document.querySelector(".cesium-viewer-toolbar");
  let lastLoaded: Date = new Date("01-01-1970");
  let dataSourceName = "spaceaware";

  lastUpdateDataSource.subscribe(async (udatasource) => {
    if (udatasource !== dataSourceName) {
      return;
    }
    if ($viewer && $updatedDataSources > lastLoaded) {
      const combinedData = await loadData($viewer, dataSourceName);
      lastLoaded = $updatedDataSources;
      data.set(combinedData as any);
    }
  });

  const toggleModal = async () => {
    if (!$mode) {
      $mode = "SpaceObjects";
      $filterAction = filterActionFunction;
      $datatableShow = true;
      defaultToolbar.style.display = "none";
      $closeMode = () => {
        $mode = null;
        $datatableShow = false;
        defaultToolbar.style.display = "";
      };
    }

    $columnDefStore = columnDefs;
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
  on:click={toggleModal}>
  <Icon scale={1.5} data={faSatellite} />
</div>

<style>
  :global(.ag-paging-row-summary-panel) {
    position: relative;
    left: 10px;
  }
</style>
