<script lang="ts">
  import { groups, activeGroup } from "@/stores/group.store";
  import { activeEntity } from "@/stores/entity.store";
  import { title } from "@/stores/modal.store";
  import { scenario } from "@/stores/settings.store";
  let { trackedEntity } = scenario;
  import { viewer } from "@/stores/viewer.store";
  import type {
    CAT,
    CATT,
  } from "@/classes/SDS-1-Satellite-Catalog-Message-(CAT)-TypeScript/CAT";
  import { objectType as CAT_OBJECT_TYPE } from "@/classes/SDS-1-Satellite-Catalog-Message-(CAT)-TypeScript/objectType";
  import type {
    OMM,
    OMMT,
  } from "@/classes/SDS-2-Orbit-Mean-Elements-Message-(OMM)-TypeScript/OMM";
  import { onDestroy, onMount } from "svelte";
  import type { Cartesian3, SpaceEntity } from "orbpro";
  import { Cartographic, Math as CesiumMath } from "orbpro";

  let pOMM: any,
    pCAT: any,
    OMM: OMMT,
    CAT: CATT,
    latitude: number,
    longitude: number,
    altitude: string;

  $: {
    pOMM = $activeEntity.properties.OMM;
    pCAT = $activeEntity.properties.CAT;

    if (pOMM && pCAT) {
      OMM = pOMM.getValue();
      CAT = pCAT.getValue();

      $title = `${CAT.OBJECT_NAME} (${
        CAT_OBJECT_TYPE[CAT.OBJECT_TYPE as any]
      })`;
    }
  }

  let velocity = { x: 0, y: 0, z: 0 };
  let position = { x: 0, y: 0, z: 0 };
  let velocityKmh: string = "";
  let unsub: Function | null = null;

  onMount(() => {
    if ($viewer) {
      unsub = $viewer.clock.onTick.addEventListener((clock) => {
        const { currentTime } = clock;
        velocity = $activeEntity.velocity?.getValue(currentTime);
        position = $activeEntity.position?.getValue(currentTime);
        const velocityMs = Math.sqrt(
          velocity.x ** 2 + velocity.y ** 2 + velocity.z ** 2
        );
        // Convert m/s to km/h
        velocityKmh = (velocityMs * 3.6).toFixed(2);
      });
    }
  });

  $: if (position && $viewer) {
    const cartographic = Cartographic.fromCartesian(position as Cartesian3);
    if (cartographic) {
      latitude = CesiumMath.toDegrees(cartographic.latitude);
      longitude = CesiumMath.toDegrees(cartographic.longitude);
      altitude = (cartographic.height * 0.001).toFixed(2); // Converts meters to kilometers
    }
  }

  onDestroy(() => {
    if (unsub) {
      unsub();
    }
  });
  let defaultObjectValue = { orbit: false, coverage: false };
  let activeObjectState: any = { ...defaultObjectValue };
  // Reactive statement to update activeObjectState whenever groups or activeGroup changes
  $: {
    activeObjectState = $groups[$activeGroup]?.objects[$activeEntity?.id] || {
      ...defaultObjectValue,
    };
  }

  function ensureObjectExists() {
    groups.update((g) => {
      // Check if the group and object exist, if not, initialize them
      if (!g[$activeGroup]) {
        g[$activeGroup] = { objects: {} };
      }
      if (!g[$activeGroup].objects[$activeEntity.id]) {
        g[$activeGroup].objects[$activeEntity.id] = {
          orbit: false,
          coverage: false,
        };
      }
      return g;
    });
  }

  function toggleOrbit() {
    ensureObjectExists();
    groups.update((g) => {
      const currentState = !g[$activeGroup].objects[$activeEntity.id].orbit;
      g[$activeGroup].objects[$activeEntity.id].orbit = currentState;

      // Update the actual activeEntity if it exists
      if ($activeEntity) {
        $activeEntity.showOrbit({ show: currentState });
      }

      return g;
    });
  }

  function toggleCoverage() {
    ensureObjectExists();
    groups.update((g) => {
      const currentState = !g[$activeGroup].objects[$activeEntity.id].coverage;
      g[$activeGroup].objects[$activeEntity.id].coverage = currentState;

      // Update the actual activeEntity if it exists
      if ($activeEntity) {
        $activeEntity.showCoverage({ show: currentState });
      }
      return g;
    });
  }
</script>

<!-- Your existing HTML structure -->
<div class="flex flex-col p-3 w-full">
  {#if $activeEntity}
    <div class="flex flex-col gap-2">
      <div class="flex justify-between">
        <!-- Row for Intl Des. and NORAD ID -->
        <div class="p-4 flex flex-col gap-1">
          <div class="text-xs">Intl Des.</div>
          <div class="text-sm">{OMM.OBJECT_ID}</div>
        </div>
        <div class="p-4 flex flex-col gap-1">
          <div class="text-xs">NORAD ID</div>
          <div class="text-sm">{OMM.NORAD_CAT_ID}</div>
        </div>
        <div class="p-4 flex flex-col gap-1">
          <div class="text-xs">PERIOD</div>
          <div class="text-sm">{CAT.PERIOD.toFixed(2)} min</div>
        </div>
      </div>
      <div class="flex justify-between">
        <!-- Row for Velocity and Lat / Lon -->
        <div class="p-4 flex flex-col gap-1">
          <div class="text-xs">VELOCITY</div>
          <div class="text-sm">{velocityKmh} km/h</div>
        </div>
        <div class="p-4 flex flex-col gap-1">
          <div class="text-xs">LAT / LON</div>
          <div class="text-[.7rem] flex flex-col -ml-2 mt-1">
            <div class="flex">
              <div class="w-12 text-right">
                {latitude?.toFixed(3)}°
              </div>
              <div class="w-3 text-center">
                {latitude >= 0 ? "N" : "S"}
              </div>
              <div class="w-12 text-right">
                {longitude?.toFixed(3)}°
              </div>
              <div class="w-3 text-center">
                {longitude >= 0 ? "E" : "W"}
              </div>
            </div>
          </div>
        </div>

        <div class="p-4 flex flex-col gap-1">
          <div class="text-xs">ALT</div>
          <div class="text-sm flex flex-col">
            <div>{altitude} km</div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="w-full flex gap-6 cursor-pointer items-start justify-start p-4 pt-3 border-t-[1px] border-gray-400">
      <div class="flex flex-col gap-2">
        <div class="flex gap-2">
          <div class="flex items-center justify-center gap-2">
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div
              class="border rounded p-1 bg-gray-800"
              on:click={(e) => {
                if (!$viewer) return;
                if ($trackedEntity?.id !== $activeEntity.id) {
                  $trackedEntity = $activeEntity;
                } else {
                  $trackedEntity = null;
                }
              }}>
              <div
                class:bg-white={$trackedEntity?.id === $activeEntity?.id}
                class:bg-gray-800={$trackedEntity?.id !== $activeEntity?.id}
                class="w-2 h-2" />
            </div>
            Track
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <div class="flex gap-2">
          <div class="flex items-center justify-center gap-2">
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div class="border rounded p-1 bg-gray-800" on:click={toggleOrbit}>
              <div
                class:bg-white={activeObjectState.orbit}
                class:bg-gray-800={!activeObjectState.orbit}
                class="w-2 h-2" />
            </div>
            Show Orbit
          </div>
        </div>
        <div class="flex gap-2">
          <div class="flex items-center justify-center gap-2">
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div
              class="border rounded p-1 bg-gray-800"
              on:click={toggleCoverage}>
              <div
                class:bg-white={activeObjectState.coverage}
                class:bg-gray-800={!activeObjectState.coverage}
                class="w-2 h-2" />
            </div>
            Show Coverage
          </div>
        </div>
      </div>
    </div>
  {/if}
</div>

<style lang="postcss">
  /* Chrome, safari */
  *::-webkit-scrollbar {
    width: 4px;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #ddd;
  }
</style>
