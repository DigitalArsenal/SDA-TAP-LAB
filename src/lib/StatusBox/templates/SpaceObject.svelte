<script lang="ts">
  import { groups, activeGroup } from "@/stores/spacecatalog.group.store";
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
  import type { Cartesian3 } from "orbpro";
  import { ReferenceFrame } from "orbpro";
  import { Cartographic, Math as CesiumMath, JulianDate } from "orbpro";
  import opsStatusCode from "@/lib/theme/ops_status_code.mjs";
  import getLifespan from "@/lib/SpaceObjects/lib/lifespan";
  import getModel from "@/lib/SpaceObjects/lib/models";
  import {
    toggleOrbit,
    toggleCoverage,
    toggleLabel,
    toggleReferenceFrameDebug,
    toggleModel,
  } from "@/stores/group/serializegroups";
  import { calculateLifespan } from "./lib/utility";

  let statusColors = Object.entries(opsStatusCode);
  let activeSubtab = "POSITION";

  $: statusColor = (statusColors[
    ($activeEntity as any)?.properties?.CAT?.getValue().OPS_STATUS_CODE
  ] || [null, "#aaaaaa"])[1];

  let pOMM: any,
    pCAT: any,
    OMM: OMMT,
    CAT: CATT,
    latitude: number,
    longitude: number,
    altitude: string;

  let selectedReferenceFrame = $activeEntity.referenceFrame; // or the current value of your Entity.referenceFrame

  // Filter out the unwanted enum options
  const referenceFrameOptions = Object.entries(ReferenceFrame)
    .filter(
      ([key, value]) =>
        typeof value === "number" &&
        !["FIXED", "INERTIAL", "TEME"].includes(key)
    )
    .map(([key, value]) => ({ key: key.substring(0, 5), value }));

  $: {
    pOMM = $activeEntity?.properties?.OMM;
    pCAT = $activeEntity?.properties?.CAT;

    if (pOMM && pCAT) {
      OMM = pOMM.getValue();
      CAT = pCAT.getValue();

      $title = `${CAT.OBJECT_NAME}<p style="background-color:${statusColor}" class="rounded h-1 w-full">&nbsp;</p>`;
    }
  }

  let velocity = { x: 0, y: 0, z: 0 };
  let position = { x: 0, y: 0, z: 0 };
  let velocityKmh: string = "";
  let unsub: Function | null = null;

  //launch
  let launchDate: any;
  let remainingFuelPercentage: number | string = 100; // Start with 100% fuel at launch

  $: launchDate = CAT?.LAUNCH_DATE
    ? new Date(CAT.LAUNCH_DATE as string)
    : new Date();
  // Adding a small random factor (e.g., within ±2%)
  const randomFactor = Math.random() * 0.04 - 0.02; // Random value between -0.02 and +0.02

  $: lifespan =
    getLifespan(CAT?.OBJECT_NAME?.toString() || "") ||
    calculateLifespan(CAT?.PERIGEE / 1000);

  onMount(() => {
    if ((globalThis as any).viewer) {
      unsub = (globalThis as any).viewer.clock.onTick.addEventListener(
        (clock: Clock) => {
          const { currentTime } = clock;
          velocity = $activeEntity.velocity?.getValue(currentTime);
          position = $activeEntity.position?.getValue(currentTime);

          if (!velocity || !position) return;
          const velocityMs = Math.sqrt(
            velocity.x ** 2 + velocity.y ** 2 + velocity.z ** 2
          );
          // Convert m/s to km/h
          velocityKmh = (velocityMs * 3.6).toFixed(2);

          if (CAT.OBJECT_TYPE) return;

          // Launch and End of Life calculations
          const endOfLifeDate = new Date(launchDate);
          endOfLifeDate.setFullYear(launchDate?.getFullYear() + lifespan);
          const launchTime = JulianDate.fromDate(launchDate);
          const eolTime = JulianDate.fromDate(endOfLifeDate);
          const totalLifeSpan = JulianDate.secondsDifference(
            eolTime,
            launchTime
          );
          const elapsedLife = JulianDate.secondsDifference(
            currentTime,
            launchTime
          );
          // Exponential decay fuel calculation
          const lifeRatio = elapsedLife / totalLifeSpan;
          remainingFuelPercentage = 100 * (1 - lifeRatio);

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
          $title = `${CAT.OBJECT_NAME}
<div style="background-color: gray; width: 100%; height: 8px; border-radius: 0.25rem; position: relative; border:1px ${statusColor} solid;">
  <div style="background-color:${statusColor}; width: ${remainingFuelPercentage}%; height: 100%; border-radius: 0.25rem;"></div>
</div>`;
        }
      );
    }
  });

  $: if (position && (globalThis as any).viewer) {
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
  let defaultObjectValue = {
    orbit: false,
    coverage: false,
    label: false,
    referenceFrame: false,
    model: undefined,
  };
  let activeObjectState: any = { ...defaultObjectValue };
  // Reactive statement to update activeObjectState whenever groups or activeGroup changes
  $: {
    activeObjectState = $groups[$activeGroup]?.objects[$activeEntity?.id] || {
      ...defaultObjectValue,
    };
  }

  // Function to handle the change of the dropdown
  function onReferenceFrameChange(event: Event) {
    const newFrame = (event.target as HTMLSelectElement).value;
    selectedReferenceFrame = parseInt(newFrame, 10);
    $activeEntity.referenceFrame = selectedReferenceFrame;
    // Add any additional logic you need to handle when the reference frame changes
  }
</script>

<!-- Your existing HTML structure -->
<div
  class="flex flex-col justify-between w-full whitespace-nowrap font-mono h-full">
  {#if $activeEntity && OMM && CAT}
    <div>
      <div
        class="flex justify-around text-white p-1 border-b-[1px] border-orange-700">
        <button
          class={`tab-header ${activeSubtab === "POSITION" ? "active" : ""}`}
          on:click={() => (activeSubtab = "POSITION")}>
          POSITION
        </button>
        <button
          class={`tab-header ${activeSubtab === "OPTIONS" ? "active" : ""}`}
          on:click={() => (activeSubtab = "OPTIONS")}>
          OPTIONS
        </button>
        <button
          class={`tab-header ${activeSubtab === "INFO" ? "active" : ""}`}
          on:click={() => (activeSubtab = "INFO")}>
          INFO
        </button>
      </div>
      <div class="overflow-y-auto flex h-24 pl-2">
        {#if activeSubtab === "POSITION"}
          <div
            class="h-full overflow-y-scroll w-full flex justify-between flex-wrap gap-1">
            <div class="p-1">
              <div class="row-header">VELOCITY</div>
              <div class="row-data">{velocityKmh} km/h</div>
            </div>
            <div class="p-1">
              <div class="row-header">LATITUDE</div>
              <div class="row-data">
                <div class="flex justify-between">
                  <div>{latitude?.toFixed(1).padStart(3, "0")}°</div>
                  <div>{latitude >= 0 ? "N" : "S"}</div>
                </div>
              </div>
            </div>
            <div class="p-1">
              <div class="row-header">LONGITUDE</div>
              <div class="row-data">
                <div class="flex justify-between">
                  <div>{longitude?.toFixed(1)}°</div>
                  <div>{longitude >= 0 ? "E" : "W"}</div>
                </div>
              </div>
            </div>
            <div class="p-1">
              <div class="row-header">ALT</div>
              <div class="row-data">{altitude} km</div>
            </div>
          </div>
        {:else if activeSubtab === "OPTIONS"}
          <div
            class="cursor-pointer flex w-full justify-between text-[.5rem] md:text-[.48rem] lg:text-[.65rem] p-2">
            <div class="flex flex-col gap-2">
              <div class="flex flex-col gap-2 items-start justify-start">
                <div class="flex items-center justify-center gap-2">
                  <!-- svelte-ignore a11y-click-events-have-key-events -->
                  <!-- svelte-ignore a11y-no-static-element-interactions -->
                  <div
                    class="border rounded p-1 bg-gray-800"
                    on:click={toggleLabel}>
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
                  <div
                    class="border rounded p-1 bg-gray-800"
                    on:click={toggleReferenceFrameDebug}>
                    <div
                      class:bg-white={activeObjectState.referenceFrameDebug}
                      class:bg-gray-800={!activeObjectState.referenceFrameDebug}
                      class="w-2 h-2" />
                  </div>
                  AXIS
                </div>
              </div>
              <div class="flex gap-2">
                <!-- ... other divs ... -->
                <div class="flex items-center justify-center gap-2">
                  <select
                    id="referenceFrameSelect"
                    bind:value={selectedReferenceFrame}
                    on:change={onReferenceFrameChange}
                    class="bg-gray-800 text-white rounded p-[1px] pl-[2px] pr-[2px] border border-gray-400">
                    {#each referenceFrameOptions as { key, value }}
                      <option {value}>
                        {key}
                      </option>
                    {/each}
                  </select>
                </div>
              </div>
            </div>
            <div class="flex flex-col gap-2">
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
            {#if getModel(OMM.OBJECT_NAME)}
              <div class="flex flex-col gap-2">
                <div class="flex gap-2">
                  <div class="flex items-center justify-center gap-2">
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <!-- svelte-ignore a11y-no-static-element-interactions -->
                    <div
                      class="border rounded p-1 bg-gray-800"
                      on:click={toggleModel}>
                      <div
                        class:bg-white={activeObjectState.model}
                        class:bg-gray-800={!activeObjectState.model}
                        class="w-2 h-2" />
                    </div>
                    MODEL
                  </div>
                </div>
                <div class="flex gap-2" />
              </div>
            {/if}
          </div>
        {:else if activeSubtab === "INFO"}
          <div
            class="h-full overflow-y-scroll w-full flex justify-between flex-wrap gap-2">
            <div class="p-1">
              <div class="row-header">Type</div>
              <div class="text-sm row-data">
                {CAT_OBJECT_TYPE[CAT.OBJECT_TYPE]}
              </div>
            </div>
            <div class="p-1">
              <div class="row-header">Owner</div>
              <div class="text-sm row-data">{CAT.OWNER}</div>
            </div>
            <div class="p-1">
              <div class="row-header">Intl Des.</div>
              <div class="text-sm row-data">{OMM.OBJECT_ID}</div>
            </div>
            <div class="p-1">
              <div class="row-header">NORAD ID</div>
              <div class="text-sm row-data">{OMM.NORAD_CAT_ID}</div>
            </div>
          </div>
        {/if}
      </div>
    </div>

    <div
      class="border-t-[1px] border-gray-500 h-12 text-xs pl-1 flex gap-4 items-center justify-start">
      <div class="flex items-center justify-center gap-2 mt-2">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div
          class="border rounded p-1 bg-gray-800"
          on:click={(e) => {
            //@ts-ignore
            if (!globalThis.viewer) return;
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
        CAMERA TRACK
      </div>
      <div class="flex gap-2">
        <div class="flex items-center justify-center gap-2 mt-2">
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <!-- svelte-ignore a11y-no-static-element-interactions -->
          <div class="border rounded p-1 bg-gray-800" on:click={toggleOrbit}>
            <div
              class:bg-white={activeObjectState.orbit}
              class:bg-gray-800={!activeObjectState.orbit}
              class="w-2 h-2" />
          </div>
          SHOW ORBIT
        </div>
      </div>
    </div>
  {/if}
</div>

<style lang="postcss">
  .tab-header {
    @apply text-xs cursor-pointer bg-transparent border-none outline-none relative;
  }

  /* Chrome, safari */
  *::-webkit-scrollbar {
    width: 4px;
  }
  .tab-header.active {
    @apply text-orange-400;
  }
  .tab-header.active::before {
    content: "▪"; /* Unicode square character */
    @apply text-orange-400 absolute;
    top: -2px;
    left: -10px;
  }

  .row-data {
    @apply text-[.7rem] p-[1px] pl-[2px] pr-[2px];
  }
  .row-header {
    @apply text-[.6rem] pl-[1px] pt-1 pb-1;
  }
  *::-webkit-scrollbar-thumb {
    background-color: #ddd;
  }
</style>
