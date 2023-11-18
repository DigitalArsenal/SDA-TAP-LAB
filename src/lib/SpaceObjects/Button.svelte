<!-- Settings.svelte -->
<script lang="ts">
  import Icon from "svelte-awesome";
  import { faSatellite } from "@fortawesome/free-solid-svg-icons";
  import columnDefs from "./lib/columnDefs";
  import { viewer } from "@/stores/viewer.store";
  import {
    mode,
    data,
    columnDefs as columnDefStore,
    filterModelStore,
  } from "@/stores/datatable.store";
  import type { Entity, SpaceEntity } from "orbpro";

  const toggleModal = async () => {
    if ($mode === "SpaceObjects") {
      $mode = null;
    } else if (!$mode) {
      $mode = "SpaceObjects";
    }

    $columnDefStore = columnDefs;
    if ($viewer) {
      const dataSource = $viewer.dataSources.getByName("spaceaware")[0];
      const combinedData = dataSource.entities.values.map((e: Entity) => {
        const OMM = e.properties?.OMM.getValue() || {};
        const CAT = e.properties?.CAT.getValue() || {};

        // Combine OMM and CAT in a format suitable for your datatable
        // Assuming you want an object with both properties
        return { ...OMM, ...CAT };
      });

      // Set the combined data to the $data store
      data.set(combinedData as any);
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
