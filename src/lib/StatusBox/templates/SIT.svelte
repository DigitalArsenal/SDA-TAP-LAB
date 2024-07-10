<script lang="ts">
  import { activeEntity } from "@/stores/entity.store";
  import { SITT, SiteType } from "@/classes/standards/SIT/main";
  import { ExtendedSITT } from "@/classes/ISIT";
  import { onMount, onDestroy } from "svelte";
  import {
    Viewer,
    Cartesian3,
    viewerReferenceFrameMixin,
    CustomDataSource,
    Entity,
    Cartesian2,
    Color,
    HorizontalOrigin,
    NearFarScalar,
    HeightReference,
  } from "orbpro"; // Updated import statements for "orbpro"
  import { scenario } from "@/stores/settings.store";
  const { selectedEntity, trackedEntity } = scenario;

  let activeSubtab = "DETAILS";
  let activeSIT: ExtendedSITT;

  let siteType: string;
  let LATITUDE: string;
  let LONGITUDE: string;
  let ALTITUDE: string;
  let viewer = (globalThis as any).viewer;

  let customDataSource: CustomDataSource = new CustomDataSource();
  let currentName: string = "";

  $: {
    activeSIT = $activeEntity?.properties?.SIT.getValue() as ExtendedSITT;
    if (activeSIT) {
      siteType = SiteType[activeSIT?.SITE_TYPE as any];
      LATITUDE = (activeSIT.LATITUDE as any).toFixed(2);
      LONGITUDE = (activeSIT.LONGITUDE as any).toFixed(2);
      ALTITUDE = (activeSIT.ALTITUDE as any).toFixed(2);
    }

    // Check if activeEntity has a parent with 'pads' property in its property.SIT
    if (
      $activeEntity &&
      $activeEntity.parent &&
      $activeEntity.parent.properties.SIT &&
      $activeEntity.parent.properties.SIT.pads
    ) {
      // Check if the clicked entity is part of the 'pads' list
      if ($activeEntity.parent.properties.SIT.pads.includes(activeSIT)) {
        // Do not remove the current customDataSource
      } else {
        removeCustomDataSourcesStartingWithPrefix("Pads:");
      }
    } else if ($activeEntity !== null && activeSIT !== null && activeSIT.pads) {
      addDataSource();
    }
  }

  function removeDataSource(dataSourceName: string) {
    const _dataSource = viewer.dataSources.getByName(dataSourceName)[0];
    if (_dataSource) {
      viewer.dataSources.remove(_dataSource, true);
    }
  }

  function removeCustomDataSourcesStartingWithPrefix(prefix: string) {
    if (viewer && viewer.dataSources) {
      const dataSourcesToRemove = [];
      const dataSourceCollection = viewer.dataSources;

      for (let i = 0; i < dataSourceCollection.length; i++) {
        const dataSource = dataSourceCollection.get(i);
        if (dataSource.name && dataSource.name.startsWith(prefix)) {
          dataSourcesToRemove.push(dataSource);
        }
      }

      for (const dataSourceToRemove of dataSourcesToRemove) {
        dataSourceCollection.remove(dataSourceToRemove);
      }
    }
  }

  function addDataSource() {
    // Usage
    removeCustomDataSourcesStartingWithPrefix("Pads:");
    createCustomDataSource();
    viewer.dataSources.add(customDataSource);
  }

  function createCustomDataSource() {
    currentName = `Pads:${activeSIT.NAME}`;

    let currentDataSource = viewer.dataSources.getByName(currentName)[0];

    if (currentDataSource) {
      removeDataSource(currentDataSource);
    }

    if (activeSIT.pads && activeSIT.pads.length > 0) {
      customDataSource = new CustomDataSource(currentName);
      activeSIT.pads.forEach((pad: any) => {
        const padEntity = customDataSource?.entities.add({
          name: pad.name,
          position: Cartesian3.fromDegrees(
            parseFloat(pad.longitude),
            parseFloat(pad.latitude)
          ),
          properties: {
            pad,
          },
          parent: $activeEntity,
          point: {
            pixelSize: 5,
            color: Color.WHITE,
            heightReference: HeightReference.CLAMP_TO_GROUND,
          },
          label: {
            pixelOffset: new Cartesian2(-10, 0),
            backgroundColor: Color.BLACK.withAlpha(0.5),
            showBackground: true,
            font: "10px",
            text: pad.name?.toString(),
            horizontalOrigin: HorizontalOrigin.RIGHT,
            scaleByDistance: new NearFarScalar(1.5e2, 1.5, 8.0e6, 0.1),
          },
          description: `
            <h3>${pad.name}</h3>
            <p>Country: ${pad.country_code}</p>
            <p>Info URL: <a href="${pad.info_url}" target="_blank">${pad.info_url}</a></p>
            <p>Wiki URL: <a href="${pad.wiki_url}" target="_blank">${pad.wiki_url}</a></p>
          `,
        });
      });
    }
  }

  onMount(() => {
    addDataSource();
  });

  onDestroy(() => {
    if (!$activeEntity) {
      removeCustomDataSourcesStartingWithPrefix("Pads:");
    }
  });

  function trackPadEntity(padEntity: Entity) {
    $trackedEntity = padEntity;
  }
</script>

<!-- HTML Structure -->
<div
  class="flex flex-col justify-between w-full h-full font-mono overflow-hidden"
>
  {#if activeSIT}
    <div>
      <div
        class="flex justify-around text-white p-1 border-b-1 border-orange-700"
      >
        <!-- Your tab buttons code -->
        <button
          class={`tab-header ${activeSubtab === "DETAILS" ? "active" : ""}`}
          on:click={() => (activeSubtab = "DETAILS")}
        >
          DETAILS
        </button>
        <button
          class={`tab-header ${activeSubtab === "LOCATION" ? "active" : ""}`}
          on:click={() => (activeSubtab = "LOCATION")}
        >
          LOCATION
        </button>
        {#if activeSIT.pads}
          <button
            class={`tab-header ${activeSubtab === "PADS" ? "active" : ""}`}
            on:click={() => (activeSubtab = "PADS")}
          >
            PADS
          </button>
        {/if}
      </div>
      <div class="flex-1 overflow-y-auto p-2">
        {#if activeSubtab === "DETAILS"}
          <!-- Your details information code -->
          <div class="flex flex-col gap-2">
            <div class="site-info">Name: {activeSIT.NAME}</div>
            {#if siteType}
              <div class="site-info">Type: {siteType}</div>
            {/if}
            {#if activeSIT.OPERATIONAL_STATUS}
              <div class="site-info">
                Status: {activeSIT.OPERATIONAL_STATUS}
              </div>
            {/if}
            {#if activeSIT.ESTABLISHMENT_DATE}
              <div class="site-info">
                Established: {activeSIT.ESTABLISHMENT_DATE}
              </div>
            {/if}
            <div class="site-info">
              ID: {activeSIT.ID}
            </div>
          </div>
        {:else if activeSubtab === "LOCATION"}
          <!-- Your location information code -->
          <div class="flex flex-col gap-2">
            <div class="site-info">Latitude: {LATITUDE}</div>
            <div class="site-info">Longitude: {LONGITUDE}</div>
            <div class="site-info">Altitude: {ALTITUDE} km</div>
          </div>
        {:else if activeSubtab === "PADS"}
          <table class="table-auto">
            <thead>
              <tr>
                <th class="px-4 py-2">Name</th>
                <th class="px-4 py-2">Country</th>
                <th class="px-4 py-2">Info URL</th>
                <th class="px-4 py-2">Wiki URL</th>
              </tr>
            </thead>
            <tbody>
              {#if activeSIT.pads && activeSIT.pads.length > 0}
                {#each customDataSource.entities.values as pad (pad.id)}
                  {#if pad?.properties}
                    <tr
                      class="cursor-pointer hover:bg-gray-200"
                      on:click={() => trackPadEntity(pad)}
                    >
                      <td class="px-4 py-2">{pad.name}</td>
                      <td class="px-4 py-2"
                        >{pad.properties?.SIT?.country_code}</td
                      >
                      <td class="px-4 py-2">
                        <a href={pad.properties.SIT.info_url} target="_blank"
                          >{pad.properties.SIT.info_url}</a
                        >
                      </td>
                      <td class="px-4 py-2">
                        <a href={pad.properties.SIT.wiki_url} target="_blank"
                          >{pad.properties.SIT.wiki_url}</a
                        >
                      </td>
                    </tr>
                  {/if}
                {/each}
              {:else}
                <tr>
                  <td class="px-4 py-2" colspan="4">No pads available.</td>
                </tr>
              {/if}
            </tbody>
          </table>
        {/if}
      </div>
    </div>
  {/if}
</div>

<style lang="postcss">
  /* Your CSS styles */
  .tab-header {
    @apply text-xs cursor-pointer bg-transparent border-none outline-none relative;
  }

  .tab-header.active {
    @apply text-orange-400;
  }

  .tab-header.active::before {
    content: "▪";
    @apply text-orange-400 absolute top-[-2px] left-[-10px];
  }

  .site-info {
    @apply text-[.7rem] p-[1px] pl-[2px] pr-[2px];
  }

  /* Chrome, Safari Scrollbar Style */
  *::-webkit-scrollbar {
    width: 4px;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #ddd;
  }
</style>
