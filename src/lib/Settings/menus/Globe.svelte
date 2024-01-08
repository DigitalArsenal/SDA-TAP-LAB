<script lang="ts">
  import { scenario } from "@/stores/settings.store";

  let {
    referenceFrame,
    skyAtmosphere,
    enableLighting,
    highDynamicRange,
    debugFPS,
    fxaa,
    resolutionScale,
    useBrowserRecommendedResolution,
    showMousePosition,
    depthTestAgainstTerrain,
    showLatLonGrid,
    showLatLonLabels,
    X_GRID,
    Y_GRID,
    Z_GRID,
    google3DTiles,
  } = scenario.settings;

  let referenceFrameChecked: any;
  $: referenceFrameChecked = $referenceFrame === 1 ? true : false;
  function handleResolutionScaleChange(e: any) {
    resolutionScale.set(parseFloat(e.target.value));
  }
</script>

<div class="flex flex-col gap-2">
  <div class="flex flex-col gap-4 p-6 pt-4 text-xs text-center">
    <div class="grid grid-cols-3 items-center justify-center">
      <div class="text-left">Reference Frame</div>
      <div class="flex form-check form-switch">
        <div class="w-full flex items-center justify-center">
          <input
            bind:checked={referenceFrameChecked}
            on:change={(e) => {
              //@ts-ignore
              $referenceFrame = e.target.checked ? 1 : 0;
            }}
            class="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-gray-800 bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault" />
        </div>
      </div>
      <div class="whitespace-nowrap">
        <label
          class="form-check-label inline-block"
          for="flexSwitchCheckDefault"
          >{$referenceFrame ? "INERTIAL (ECI)" : "FIXED (ECEF)"}</label>
      </div>
    </div>
    <div class="grid grid-cols-3 items-center justify-center">
      <div class="text-left">Lighting</div>
      <div class="flex form-check form-switch">
        <div class="w-full flex items-center justify-center">
          <input
            bind:checked={$enableLighting}
            class="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-gray-800 bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault" />
        </div>
      </div>
      <div class="whitespace-nowrap">
        <label
          class="form-check-label inline-block"
          for="flexSwitchCheckDefault" />
      </div>
    </div>
    {#if !$google3DTiles}
      <div class="grid grid-cols-3 items-center justify-center">
        <div class="text-left">Lat/Lon Grid</div>
        <div class="flex form-check form-switch">
          <div class="w-full flex items-center justify-center">
            <input
              bind:checked={$showLatLonGrid}
              class="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-gray-800 bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault" />
          </div>
        </div>
        <div class="whitespace-nowrap">
          <label
            class="form-check-label inline-block"
            for="flexSwitchCheckDefault" />
        </div>
      </div>
      <div class="grid grid-cols-3 items-center justify-center">
        <div class="text-left">Lat/Lon Labels</div>
        <div class="flex form-check form-switch">
          <div class="w-full flex items-center justify-center">
            {#if $showLatLonGrid}
              <input
                bind:checked={$showLatLonLabels}
                class="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-gray-800 bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault" />
            {:else}
              <div class="h-5">&nbsp;</div>
            {/if}
          </div>
        </div>
        <div class="whitespace-nowrap">
          <label
            class="form-check-label inline-block"
            for="flexSwitchCheckDefault" />
        </div>
      </div>
    {/if}
    <div class="grid grid-cols-3 items-center justify-center">
      <div class="text-left">Atmosphere</div>
      <div class="flex form-check form-switch">
        <div class="w-full flex items-center justify-center">
          <input
            bind:checked={$skyAtmosphere}
            class="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-gray-800 bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault" />
        </div>
      </div>
      <div class="whitespace-nowrap">
        <label
          class="form-check-label inline-block"
          for="flexSwitchCheckDefault" />
      </div>
    </div>

    <div class="grid grid-cols-3 items-center justify-center">
      <div class="text-left">HDR</div>
      <div class="flex form-check form-switch">
        <div class="w-full flex items-center justify-center">
          <input
            bind:checked={$highDynamicRange}
            class="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-gray-800 bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault" />
        </div>
      </div>
      <div class="whitespace-nowrap">
        <label
          class="form-check-label inline-block"
          for="flexSwitchCheckDefault" />
      </div>
    </div>
    <div class="grid grid-cols-3 items-center justify-center">
      <div class="text-left">Debug FPS</div>
      <div class="flex form-check form-switch">
        <div class="w-full flex items-center justify-center">
          <input
            bind:checked={$debugFPS}
            class="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-gray-800 bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault" />
        </div>
      </div>
      <div class="whitespace-nowrap">
        <label
          class="form-check-label inline-block"
          for="flexSwitchCheckDefault" />
      </div>
    </div>
    <div class="grid grid-cols-3 items-center justify-center">
      <div class="text-left">FXAA</div>
      <div class="flex form-check form-switch">
        <div class="w-full flex items-center justify-center">
          <input
            bind:checked={$fxaa}
            class="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-gray-800 bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault" />
        </div>
      </div>
      <div class="whitespace-nowrap">
        <label
          class="form-check-label inline-block"
          for="flexSwitchCheckDefault" />
      </div>
    </div>
    <!-- Toggle for Use Browser Recommended Resolution -->
    <div class="grid grid-cols-3 items-center justify-center">
      <div class="text-left">Use Browser Resolution</div>
      <div class="flex form-check form-switch">
        <div class="w-full flex items-center justify-center">
          <input
            bind:checked={$useBrowserRecommendedResolution}
            class="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-gray-800 bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm"
            type="checkbox"
            role="switch"
            id="useBrowserResolutionSwitch" />
        </div>
      </div>
    </div>
    <div class="grid grid-cols-3 items-center justify-center">
      <div
        class="{$useBrowserRecommendedResolution
          ? 'text-gray-400'
          : ''} text-left">
        Resolution Scale: {$resolutionScale}
      </div>
      <div class="flex items-center justify-center">
        <input
          bind:value={$resolutionScale}
          on:change={handleResolutionScaleChange}
          class="slider w-24"
          type="range"
          min=".1"
          max="2"
          step="0.1"
          disabled={$useBrowserRecommendedResolution}
          id="resolutionScaleSlider" />
      </div>
    </div>
    <!--<div class="grid grid-cols-3 items-center justify-center">
      <div class="text-left">Google 3D Tiles</div>
      <div class="flex form-check form-switch">
        <div class="w-full flex items-center justify-center">
          <input
            bind:checked={$google3DTiles}
            class="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-gray-800 bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault" />
        </div>
      </div>
      <div class="whitespace-nowrap">
        <label
          class="form-check-label inline-block"
          for="flexSwitchCheckDefault" />
      </div>
    </div>-->
    <div class="grid grid-cols-3 items-center justify-center">
      <div class="text-left">Depth Test Terrain</div>
      <div class="flex form-check form-switch">
        <div class="w-full flex items-center justify-center">
          <input
            bind:checked={$depthTestAgainstTerrain}
            class="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-gray-800 bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault" />
        </div>
      </div>
      <div class="whitespace-nowrap">
        <label
          class="form-check-label inline-block"
          for="flexSwitchCheckDefault" />
      </div>
    </div>
    <!--
    <div class="grid grid-cols-3 items-center justify-center">
      <div class="text-left">X GRID</div>
      <div class="flex form-check form-switch">
        <div class="w-full flex items-center justify-center">
          <input
            bind:checked={$X_GRID}
            class="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-gray-800 bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault" />
        </div>
      </div>
      <div class="whitespace-nowrap">
        <label
          class="form-check-label inline-block"
          for="flexSwitchCheckDefault" />
      </div>
    </div>
    <div class="grid grid-cols-3 items-center justify-center">
      <div class="text-left">Y GRID</div>
      <div class="flex form-check form-switch">
        <div class="w-full flex items-center justify-center">
          <input
            bind:checked={$Y_GRID}
            class="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-gray-800 bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault" />
        </div>
      </div>
      <div class="whitespace-nowrap">
        <label
          class="form-check-label inline-block"
          for="flexSwitchCheckDefault" />
      </div>
    </div>
    <div class="grid grid-cols-3 items-center justify-center">
      <div class="text-left">Z GRID</div>
      <div class="flex form-check form-switch">
        <div class="w-full flex items-center justify-center">
          <input
            bind:checked={$Z_GRID}
            class="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-gray-800 bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault" />
        </div>
      </div>
      <div class="whitespace-nowrap">
        <label
          class="form-check-label inline-block"
          for="flexSwitchCheckDefault" />
      </div>
    </div>-->
  </div>
</div>

<style>
</style>
