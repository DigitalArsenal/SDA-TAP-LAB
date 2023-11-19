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
  import type { Entity, SpaceCatalogDataSource } from "orbpro";

  let myElement: any;
  let lastLoaded: Date;

  const filterActionFunction = (filteredRows: any[]) => {
    if (!$viewer) {
      return;
    }
    const dataSource = $viewer.dataSources.getByName("spaceaware")[0];
    const filteredIds = new Set(filteredRows.map((row) => row.OBJECT_ID)); // Assuming each row has an 'id' property

    dataSource.entities.values.forEach((entity: Entity) => {
      // Assuming each entity has a corresponding 'id' property
      entity.show = filteredIds.has(entity.id);
    });
  };

  const defaultToolbar: any = document.querySelector(".cesium-viewer-toolbar");

  const toggleModal = async () => {
    if (!$mode) {
      $mode = "SpaceObjects";
      $filterAction = filterActionFunction;
      $datatableShow = true;
      console.log(defaultToolbar.style.display)
      defaultToolbar.style.display = "none";
      $closeMode = ()=>{
        $mode = null;
        $datatableShow = false;
        defaultToolbar.style.display = "";
      }
    }

    $columnDefStore = columnDefs;
    if ($viewer) {
      const dataSource: SpaceCatalogDataSource = $viewer.dataSources.getByName(
        "spaceaware"
      )[0] as SpaceCatalogDataSource;
      if (!lastLoaded || dataSource.lastLoaded > lastLoaded) {
        const combinedData = dataSource.entities.values.map((e: Entity) => {
          const OMM = e.properties?.OMM.getValue() || {};
          const CAT = e.properties?.CAT.getValue() || {};
          return { ...OMM, ...CAT };
        });
        lastLoaded = dataSource.lastLoaded;
        data.set(combinedData as any);
        console.log(data);
      }
    }
  };
</script>

<!-- Button to open the modal -->
<div
  bind:this={myElement}
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
  :global(.cesium-button-hover) {
    color: #fff; /* For text buttons */
    fill: #fff; /* For SVG buttons */
    background: #4488bb99;
    border-color: #aef;
    box-shadow: 0 0 8px #fff;
  }
</style>
