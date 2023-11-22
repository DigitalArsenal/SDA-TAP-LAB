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
    rowID,
    defaultID,
  } from "@/stores/datatable.store";
  import { mode, closeMode } from "@/stores/menu.store";
  import type { SpaceCatalogDataSource } from "orbpro";
  import filterActionFunction from "./lib/FilterActionFunction";
  import { scenario } from "@/stores/settings.store";
  import getID from "./lib/getID";
  import GroupNumber from "@/lib/elements/GroupNumber.svelte";
  import { activeEntity } from "@/stores/entity.store";

  const { settings } = scenario;

  let lastLoaded: Date;

  const defaultToolbar: any = document.querySelector(".cesium-viewer-toolbar");

  const toggleModal = async () => {
    settings.ClockSettings.shouldAnimate.set(false);
    if (!$mode) {
      $mode = "SpaceObjects";
      $filterAction = filterActionFunction;
      $datatableShow = true;
      $rowID = getID;
      defaultToolbar.style.display = "none";
      setTimeout(() => {
        $activeEntity = $activeEntity; //needed for datatable reactivity
      }, 100);
      $closeMode = () => {
        settings.ClockSettings.shouldAnimate.set(false);
        $mode = null;
        $datatableShow = false;
        $rowID = defaultID;
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
  class="relative text-white flex items-center text-md justify-center cursor-pointer"
  on:click={toggleModal}>
  <Icon scale={1.3} data={faSatellite} />
  <div class="absolute bottom-[2px] right-[0px]">
    <GroupNumber />
  </div>
</div>

<style>
  :global(.ag-paging-row-summary-panel) {
    position: relative;
    left: 10px;
  }
</style>
