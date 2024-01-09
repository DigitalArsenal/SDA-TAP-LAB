<script lang="ts">
  import { activeEntity } from "@/stores/entity.store";
  import { SITT, SiteType } from "@/classes/standards/SIT/main";
  import { ExtendedSITT } from "@/classes/ISIT";
  import { onMount } from "svelte";

  let activeSubtab = "DETAILS";
  let activeSIT: ExtendedSITT;

  let siteType: string;
  let LATITUDE: string;
  let LONGITUDE: string;
  let ALTITUDE: string;

  $: {
    activeSIT = $activeEntity?.properties?.SIT.getValue() as ExtendedSITT;
    siteType = SiteType[activeSIT.SITE_TYPE as any];
    LATITUDE = (activeSIT.LATITUDE as any).toFixed(2);
    LONGITUDE = (activeSIT.LONGITUDE as any).toFixed(2);
    ALTITUDE = (activeSIT.ALTITUDE as any).toFixed(2);
  }

  onMount(() => {
    // Initialize values
    activeSIT = $activeEntity?.properties?.SIT.getValue() as ExtendedSITT;
    siteType = SiteType[activeSIT.SITE_TYPE as any];
    LATITUDE = (activeSIT.LATITUDE as any).toFixed(2);
    LONGITUDE = (activeSIT.LONGITUDE as any).toFixed(2);
    ALTITUDE = (activeSIT.ALTITUDE as any).toFixed(2);
  });
</script>

<!-- HTML Structure -->
<div class="flex flex-col justify-between w-full h-full font-mono">
  {#if activeSIT}
    <div>
      <div
        class="flex justify-around text-white p-1 border-b-1 border-orange-700">
        <button
          class={`tab-header ${activeSubtab === "DETAILS" ? "active" : ""}`}
          on:click={() => (activeSubtab = "DETAILS")}>
          DETAILS
        </button>
        <button
          class={`tab-header ${activeSubtab === "LOCATION" ? "active" : ""}`}
          on:click={() => (activeSubtab = "LOCATION")}>
          LOCATION
        </button>
        {#if activeSIT.SITE_TYPE === 0}
          <button
            class={`tab-header ${activeSubtab === "PADS" ? "active" : ""}`}
            on:click={() => (activeSubtab = "PADS")}>
            PADS
          </button>
        {/if}
      </div>
      <div class="overflow-y-auto h-full p-2">
        {#if activeSubtab === "DETAILS"}
          <div class="flex flex-col gap-2">
            <div class="site-info">Name: {activeSIT.NAME}</div>
            <div class="site-info">
              Type: {siteType}
            </div>
            <div class="site-info">
              Status: {activeSIT.OPERATIONAL_STATUS}
            </div>
            <div class="site-info">
              Established: {activeSIT.ESTABLISHMENT_DATE}
            </div>
          </div>
        {:else if activeSubtab === "LOCATION"}
          <div class="flex flex-col gap-2">
            <div class="site-info">
              Latitude: {LATITUDE}
            </div>
            <div class="site-info">
              Longitude: {LONGITUDE}
            </div>
            <div class="site-info">
              Altitude: {ALTITUDE} km
            </div>
          </div>
        {:else if activeSubtab === "PADS"}
          {activeSIT.pads.map((p) => p.name)}
        {/if}
      </div>
    </div>
  {/if}
</div>

<style lang="postcss">
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

  .reference-frame-select {
    @apply bg-gray-800 text-white rounded p-[1px] pl-[2px] pr-[2px] border border-gray-400;
  }

  /* Chrome, Safari Scrollbar Style */
  *::-webkit-scrollbar {
    width: 4px;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #ddd;
  }
</style>
