<script lang="ts">
  import { scenario } from "@/stores/settings.store";

  let {
    referenceFrame,
    skyAtmosphere,
    enableLighting,
    highDynamicRange,
    debugFPS,
    fxaa,
    showMousePosition,
    depthTestAgainstTerrain,
    X_GRID,
    Y_GRID,
    Z_GRID,
  } = scenario.settings;

  let referenceFrameChecked: any;
  $: referenceFrameChecked = $referenceFrame === 1 ? true : false;
</script>

<div class="flex flex-col gap-2">
  <div class="flex flex-col gap-4 p-6 text-xs text-center">
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
    <div class="grid grid-cols-3 items-center justify-center">
      <div class="text-left">Show Mouse LNG/LAT</div>
      <div class="flex form-check form-switch">
        <div class="w-full flex items-center justify-center">
          <input
            bind:checked={$showMousePosition}
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
      <div class="text-left">Depth Test Against Terrain</div>
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
    </div>
  </div>
</div>

<style>
</style>
