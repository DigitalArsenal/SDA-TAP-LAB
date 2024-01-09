<script lang="ts">
  import { activeEntity } from "@/stores/entity.store";
  import { SIT, SiteType } from "@/classes/standards/SIT/main";

  let activeSubtab = "DETAILS";

  $: activeSiteData = $activeEntity.properties?.SIT.getValue() as SIT;
  let siteType: string;
  let LATITUDE: string;
  let LONGITUDE: string;
  let ALTITUDE: string;

  $: if (activeSiteData) {
    siteType = SiteType[activeSiteData.SITE_TYPE as any];
    LATITUDE = activeSiteData.LATITUDE.toFixed(2);
    LONGITUDE = activeSiteData.LONGITUDE.toFixed(2);
    ALTITUDE = activeSiteData.ALTITUDE.toFixed(2);
  }
</script>

<!-- HTML Structure -->
<div class="flex flex-col justify-between w-full h-full font-mono">
  {#if activeSiteData}
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
      </div>
      <div class="overflow-y-auto h-full p-2">
        {#if activeSubtab === "DETAILS"}
          <div class="flex flex-col gap-2">
            <div class="site-info">Name: {activeSiteData.NAME}</div>
            <div class="site-info">
              Type: {siteType}
            </div>
            <div class="site-info">
              Status: {activeSiteData.OPERATIONAL_STATUS}
            </div>
            <div class="site-info">
              Established: {activeSiteData.ESTABLISHMENT_DATE}
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
