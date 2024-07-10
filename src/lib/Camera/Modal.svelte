<script lang="ts">
  import {
    Cartesian3,
    Math as CesiumMath,
    DataSource,
    Entity,
    Analysis,
    Clock,
  } from "orbpro";
  import { messages } from "@/stores/events.store";
  import { content, lastcontent } from "@/stores/modal.store";
  import { scenario } from "@/stores/settings.store";
  import { onDestroy, onMount } from "svelte";
  import CloseButton from "@/lib/elements/CloseButton.svelte";
  import { writable } from "svelte/store";
  import { debounce } from "@/utilities/debounce";
  const { viewer } = globalThis as any;
  let _shouldAnimate = true;
  let positionListener: any = undefined;
  let _cameraPosition: Cartesian3 | undefined;
  let _cameraPositionECEF: string[] = [];
  let _cameraPositionLLA: string[] = [];
  let searchFrom = viewer.selectedEntity?.id || "";
  let searchTo = "";
  let activeSearchBox = "from"; // 'from' or 'to'
  let matchingEntities: Entity[] = [];
  const selectedFromEntity = writable<Entity | null>(
    viewer.selectedEntity || null
  );
  const selectedToEntity = writable<Entity | null>(null);

  function searchEntities(searchTerm: string): Entity[] {
    let returnEntities: Entity[] = [];
    for (let i = 0; i < viewer.dataSources.length; i++) {
      const { entities } = viewer.dataSources.get(i);
      if (!entities) {
        return returnEntities;
      }

      for (let ii = 0; ii < entities.values.length; ii++) {
        const entity = entities.values[ii];
        const searchString = `${entity.id} ${entity.name}`.toLowerCase();
        if (searchString.includes(searchTerm.toLowerCase())) {
          returnEntities.push(entity);
        }
        if (returnEntities.length > 100) {
          break;
        }
      }
    }
    return returnEntities;
  }

  const debouncedSearch: any = debounce(searchEntities, 300);

  $: if (viewer) {
    if (activeSearchBox === "from" && !$selectedFromEntity && searchFrom) {
      matchingEntities = searchEntities(searchFrom);
    } else if (activeSearchBox === "to" && !$selectedToEntity && searchTo) {
      matchingEntities = searchEntities(searchTo);
    } else {
      matchingEntities = [];
    }
  }

  $: {
    if ($selectedFromEntity && $selectedToEntity) {
      viewer.camera.trackFromTo($selectedFromEntity, $selectedToEntity);
    } else {
      viewer.camera.unTrack();
    }
    setTimeout(() => {
      viewer.scene.render();
    }, 100);
  }

  function selectEntity(entity: Entity) {
    if (activeSearchBox === "from") {
      selectedFromEntity.set(entity);
    } else {
      selectedToEntity.set(entity);
    }
  }

  function clearTracking(entity: string) {
    if (entity === "from") {
      selectedFromEntity.set(null);
      searchFrom = "";
    } else if (entity === "to") {
      selectedToEntity.set(null);
      searchTo = "";
    }
    viewer.camera.unTrack();
  }

  function clearAllTracking() {
    selectedFromEntity.set(null);
    selectedToEntity.set(null);
    searchFrom = "";
    searchTo = "";
    viewer.camera.unTrack();
  }

  let azElRange: any = {};

  onMount(() => {
    _shouldAnimate = (globalThis as any).viewer!.clock.shouldAnimate;
    scenario.settings.ClockSettings.shouldAnimate.set(false);
    positionListener = (
      globalThis as any
    ).viewer?.clock.onTick.addEventListener((clock: Clock) => {
      const { currentTime } = clock;
      if ($selectedFromEntity?.position && $selectedToEntity?.position) {
        azElRange = Analysis.getAzElRange(
          $selectedFromEntity.position.getValue(currentTime) as Cartesian3,
          $selectedToEntity.position.getValue(currentTime) as Cartesian3
        );
      }
      _cameraPosition = (globalThis as any).viewer?.camera.positionWC;
      if (_cameraPosition) {
        const ellipsoid = (globalThis as any).viewer!.scene.globe.ellipsoid;
        const cartographic = ellipsoid.cartesianToCartographic(_cameraPosition);
        _cameraPositionECEF = [
          `${_cameraPosition.x.toFixed(2)} X`,
          `${_cameraPosition.y.toFixed(2)} Y`,
          `${_cameraPosition.z.toFixed(2)} Z`,
        ];
        _cameraPositionLLA = [
          `${CesiumMath.toDegrees(cartographic.latitude).toFixed(2)}°`,
          `${CesiumMath.toDegrees(cartographic.longitude).toFixed(2)}°`,
          `${(cartographic.height / 1000).toFixed(1)}`,
        ];
      }
    });
  });

  onDestroy(() => {
    if (positionListener && (globalThis as any).viewer) {
      (globalThis as any).viewer.clock.onTick.removeEventListener(
        positionListener
      );
    }
    scenario.settings.ClockSettings.shouldAnimate.set(_shouldAnimate);
  });

  const closeModal = () => {
    $content = $lastcontent || undefined;
    $lastcontent = undefined;
    scenario.settings.ClockSettings.shouldAnimate.set(_shouldAnimate);
    clearAllTracking();
  };
</script>

<div
  class="fixed mt-12 pr-2 pl-2 flex justify-end items-start w-full md:w-[38%] h-[50%] md:h-[50%] max-h-[350px] max-w-[400px] right-0">
  <div class="flex justify-center items-center z-50 w-full h-full">
    <div
      style="background:rgba(48, 51, 54, .9)"
      class="bg-opacity-75 text-white rounded shadow-xl w-full h-full overflow-auto flex flex-col border border-gray-600">
      <div
        class="flex-none text-xs md:text-sm flex justify-between items-center pl-2 pr-3 pt-2 pb-2 md:pt-2 md:pb-2 border-b border-gray-600">
        <div class="flex items-center gap-2 w-full justify-between p-1">
          <div class="font-[300] flex gap-1">Camera Control</div>
        </div>
        <CloseButton onclick={closeModal} />
      </div>
      <div class="flex gap-2 w-full flex-grow p-2 overflow-auto">
        <div class="flex flex-col gap-2 text-sm w-1/2">
          {#if !$selectedFromEntity}
            <input
              type="text"
              placeholder="Camera Track From"
              bind:value={searchFrom}
              class="border border-gray-300 rounded px-2 py-1"
              on:input={() => (activeSearchBox = "from")} />
          {:else}
            <div>{$selectedFromEntity.name}</div>
          {/if}
          {#if !$selectedToEntity}
            <!-- Search box for Camera Track To -->
            <input
              type="text"
              placeholder="Camera Track To"
              bind:value={searchTo}
              class="border border-gray-300 rounded px-2 py-1"
              on:input={() => (activeSearchBox = "to")} />
          {:else}
            <div>{$selectedToEntity.name}</div>
          {/if}
          {#if $selectedToEntity && $selectedFromEntity}
            <div
              on:click={clearAllTracking}
              class="bg-red-500 cursor-pointer p-1 pl-2 pr-2 rounded flex items-center justify-center">
              Clear
            </div>
          {/if}
        </div>
        <div
          class="flex flex-col gap-1 w-full border overflow-scroll p-2 cursor-pointer">
          {#if !$selectedToEntity || !$selectedFromEntity}
            {#each matchingEntities as entity}
              <div
                class="border rounded p-2 flex items-center justify-center text-xs"
                on:click={() => selectEntity(entity)}>
                {entity.name}
              </div>
            {/each}
          {:else if azElRange?.az && azElRange?.el && azElRange?.range}
            <div>
              <div>AZ: {azElRange.az.toFixed(2)}</div>
              <div>EL: {azElRange.el.toFixed(2)}</div>
              <div>RANGE: {(azElRange.range / 1000).toFixed(2)} km</div>
            </div>
          {/if}
        </div>
      </div>
      <div
        class="p-2 pl-4 border-t border-gray-600 flex justify-between text-[.65rem]">
        Camera Position (ECEF):
        <div class="flex-col font-mono">
          <div class="flex justify-end">{_cameraPositionECEF[0]}</div>
          <div class="flex justify-end">{_cameraPositionECEF[1]}</div>
          <div class="flex justify-end">{_cameraPositionECEF[2]}</div>
        </div>
      </div>
      <div
        class="p-2 pl-4 border-t border-gray-600 flex justify-between text-[.65rem]">
        Camera Position:
        <div class="flex-col w-[5rem] font-mono">
          <div class="flex justify-between">
            <div>{_cameraPositionLLA[0]}</div>
            LAT
          </div>
          <div class="flex justify-between">
            <div>{_cameraPositionLLA[1]}</div>
            LON
          </div>
          <div class="flex justify-between">
            <div>{_cameraPositionLLA[2]}</div>
            ALT
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  @keyframes glowFadeOut {
    0% {
      background-color: rgba(255, 181, 44, 0.74);
    }
    100% {
      background-color: transparent;
    }
  }
</style>
