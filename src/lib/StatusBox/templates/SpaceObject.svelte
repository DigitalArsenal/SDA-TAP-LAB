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
  import {
    Cartographic,
    Math as CesiumMath,
    JulianDate,
    MakeBillboardLabel,
    NearFarScalar,
  } from "orbpro";

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

  //launch
  let launchDate: any;
  let lifespan = 7; // lifespan of the satellite in years, as a constant
  let remainingFuelPercentage: number | string = 100; // Start with 100% fuel at launch

  $: launchDate = CAT?.LAUNCH_DATE
    ? new Date(CAT.LAUNCH_DATE as string)
    : new Date();
  // Adding a small random factor (e.g., within ±2%)
  const randomFactor = Math.random() * 0.04 - 0.02; // Random value between -0.02 and +0.02

  // Function to calculate lifespan based on perigee
  function calculateLifespan(perigee: number) {
    const LEO_PERIGEE = 500; // LEO reference perigee in km (now set to 500 km)
    const GEO_PERIGEE = 35786; // GEO reference perigee in km
    const LEO_LIFESPAN = 5; // LEO lifespan in years
    const GEO_LIFESPAN = 15; // GEO lifespan in years

    // Adjust these factors to control the curve
    const factor = 0.0000000004;

    if (perigee <= LEO_PERIGEE) return LEO_LIFESPAN;
    if (perigee >= GEO_PERIGEE) return GEO_LIFESPAN;

    // Linear mapping for lifespan (can be adjusted for more complexity)
    return (
      LEO_LIFESPAN +
      ((GEO_LIFESPAN - LEO_LIFESPAN) * (perigee - LEO_PERIGEE)) /
        (GEO_PERIGEE - LEO_PERIGEE)
    );
  }
  onMount(() => {
    if ($viewer) {
      unsub = $viewer.clock.onTick.addEventListener((clock) => {
        const { currentTime } = clock;
        velocity = $activeEntity.velocity?.getValue(currentTime);
        position = $activeEntity.position?.getValue(currentTime);
        
        if (!velocity || !position) return;

        const velocityMs = Math.sqrt(
          velocity.x ** 2 + velocity.y ** 2 + velocity.z ** 2
        );
        // Convert m/s to km/h
        velocityKmh = (velocityMs * 3.6).toFixed(2);

        // Determine lifespan based on perigee altitude
        const perigee = CAT?.PERIGEE / 1000;
        lifespan = calculateLifespan(perigee);

        // Launch and End of Life calculations
        const endOfLifeDate = new Date(launchDate);
        endOfLifeDate.setFullYear(launchDate?.getFullYear() + lifespan);
        const launchTime = JulianDate.fromDate(launchDate);
        const eolTime = JulianDate.fromDate(endOfLifeDate);
        const totalLifeSpan = JulianDate.secondsDifference(eolTime, launchTime);
        const elapsedLife = JulianDate.secondsDifference(
          currentTime,
          launchTime
        );

        // Exponential decay fuel calculation
        const lifeRatio = elapsedLife / totalLifeSpan;
        const decayFactor = 2; // Controls initial decay rate
        remainingFuelPercentage = 100 * Math.exp(-decayFactor * lifeRatio);

        // Asymptotic behavior near low fuel level
        const lowFuelThreshold = 5; // Threshold for slower decay, e.g., 5%
        if (remainingFuelPercentage < lowFuelThreshold) {
          const asymptoticFactor = 0.5; // Adjust this to control the asymptotic behavior
          remainingFuelPercentage =
            lowFuelThreshold *
            Math.exp(
              -asymptoticFactor * (lowFuelThreshold - remainingFuelPercentage)
            );
        }

        // Ensure that the remaining fuel is within valid bounds
        remainingFuelPercentage = Math.max(remainingFuelPercentage, 0);
        remainingFuelPercentage = Math.min(remainingFuelPercentage, 100);

        remainingFuelPercentage = remainingFuelPercentage.toFixed(2);
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
  let defaultObjectValue = { orbit: false, coverage: false, label: false };
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
          label: false,
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
    $viewer!.scene.render();
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
    $viewer!.scene.render();
  }

  function toggleLabel() {
    ensureObjectExists();
    groups.update((g) => {
      const currentState = !g[$activeGroup].objects[$activeEntity.id].label;
      g[$activeGroup].objects[$activeEntity.id].label = currentState;

      // Update the actual activeEntity if it exists
      if ($activeEntity) {
        if (!$activeEntity.billboard) {
          //@ts-ignore
          MakeBillboardLabel({
            entity: $activeEntity,
            text: CAT.OBJECT_NAME,
            fontSize: 26,
            corderRadius: 2,
            scaleByDistance: new NearFarScalar(0, 1, 1000, 0.5),
          });
        } else {
          $activeEntity.billboard.show = currentState;
        }
      }
      return g;
    });
    $viewer!.scene.render();
  }
</script>

<!-- Your existing HTML structure -->
<div
  class="flex flex-col w-full whitespace-nowrap font-mono h-full justify-between">
  {#if $activeEntity && OMM && CAT}
    <div class="flex flex-col gap-1">
      <div class="flex justify-between">
        <!-- Row for Intl Des. and NORAD ID -->
        <div class="p-2 flex flex-col gap-1 w-1/3">
          <div class="row-header">Intl Des.</div>
          <div class="text-sm pl-1 row-data">{OMM.OBJECT_ID}</div>
        </div>
        <div class="p-2 flex flex-col gap-1 w-1/3">
          <div class="row-header">NORAD ID</div>
          <div class="text-sm pl-1 row-data">{OMM.NORAD_CAT_ID}</div>
        </div>
        <div class="p-2 flex flex-col gap-1 w-1/3">
          <div class="row-header">VELOCITY</div>
          <div class="text-xs pl-1 pt-1 row-data">{velocityKmh} km/h</div>
        </div>
      </div>
      <div class="flex justify-between">
        <!-- Row for Velocity and Lat / Lon -->
        <div class="p-2 flex flex-col gap-1 w-1/3">
          <div class="row-header">LAT</div>
          <div class="flex w-full text-xs row-data">
            <div class=" w-2/3 text-left pl-1">
              {latitude?.toFixed(1)}°
            </div>
            <div class="w-1/3 text-right">
              {latitude >= 0 ? "N" : "S"}
            </div>
          </div>
        </div>
        <div class="p-2 flex flex-col gap-1 w-1/3">
          <div class="row-header">LON</div>
          <div class="flex w-full text-xs row-data">
            <div class="w-2/3 text-left pl-1">
              {longitude?.toFixed(1)}°
            </div>
            <div class="w-1/3 text-right">
              {longitude >= 0 ? "E" : "W"}
            </div>
          </div>
        </div>
        <div class="p-2 flex flex-col gap-1 w-1/3">
          <div class="row-header">ALT</div>
          <div class="flex flex-col">
            <div class="row-data">{altitude} km</div>
          </div>
        </div>
      </div>
      <div class="flex justify-between">
        {#if !CAT.OBJECT_TYPE}
          <div
            class="text-[.65rem] bg-opacity-50 rounded-br-[3px] rounded-tr-[3px] ml-2 h-6 flex items-center border-l w-52 bg-gray-500 relative">
            <div
              style="width:{remainingFuelPercentage}%"
              class="bg-green-700 border border-gray-400 rounded-br-[3px] rounded-tr-[3px]">
              &nbsp;
            </div>

            <div
              class="text-black absolute text-white pl-2 text-[.6rem] justify-start gap-2 flex w-full pr-1">
              <div>FUEL (EST):</div>
              <div>{remainingFuelPercentage}%</div>
            </div>
          </div>
        {/if}
      </div>
    </div>

    <div
      class="text-xs w-full flex gap-6 cursor-pointer items-start justify-between pl-10 pr-10 p-3 border-t-[1px] border-gray-400">
      <div class="flex flex-col gap-2">
        <div class="flex flex-col gap-2 items-start justify-start">
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
            TRACK
          </div>
          <div class="flex items-center justify-center gap-2">
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div class="border rounded p-1 bg-gray-800" on:click={toggleLabel}>
              <div
                class:bg-white={activeObjectState.label}
                class:bg-gray-800={!activeObjectState.label}
                class="w-2 h-2" />
            </div>
            LABEL
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
            ORBIT
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
            COVERAGE
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

  .row-data {
    @apply text-[.65rem] bg-gray-700 bg-opacity-50 rounded p-1 flex items-center border-l;
  }
  .row-header {
    @apply text-xs pl-1 pt-1;
  }
  *::-webkit-scrollbar-thumb {
    background-color: #ddd;
  }
</style>
