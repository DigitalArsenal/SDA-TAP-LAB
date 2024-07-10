<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { activeEvent } from "@/stores/events.store";
  import { activeGroup } from "@/stores/spacecatalog.group.store";
  import {
    Cartesian3,
    ClockRange,
    Color,
    ConstantProperty,
    JulianDate,
    SpaceEntity,
  } from "orbpro";
  import { type Entity } from "orbpro";
  import { HYPT } from "@/classes/standards/HYP/HYP";
  import { scenario } from "@/stores/settings.store";
  const { trackedEntity } = scenario;

  let originalEntityProperties = new Map();
  const viewer = (globalThis as any).viewer;
  onMount(() => {
    $activeGroup = "defaultGroup";
    const sDC = viewer?.dataSources.getByName("spaceaware")[0];

    for (const e of sDC?.entities.values!) {
      e.show = false;
      const idString = e.id.toString();
      if (
        $activeEvent.COL_INDICATORS?.includes(idString) ||
        $activeEvent.ROW_INDICATORS?.includes(idString) ||
        $activeEvent.CAT_IDS?.includes(idString)
      ) {
        e.show = true;
        if (e.point) {
          /*
          originalEntityProperties.set(e, {
            pixelSize: e.point.pixelSize,
            color: e.point.color,
          });

          //@ts-ignore
          if (e.label) {
            //@ts-ignore
            e.label.show = true;
          }*/
          //@ts-ignore
          e.point.color = Color.WHITE; // White color
          //@ts-ignore
          e.point.pixelSize = 10;
          if (e.label) {
            //@ts-ignore
            e.label.show = true;
          }

          (e as SpaceEntity).showOrbit({ show: true });
        }
      }
    }

    // Parse the start and end times
    const eventStartTimeString = ($activeEvent as HYPT)
      .EVENT_START_TIME as string;
    const eventEndTimeString = ($activeEvent as HYPT).EVENT_END_TIME as string;

    const eventStartTimeDate = new Date(eventStartTimeString);
    const eventEndTimeDate = new Date(eventEndTimeString);
    let startTime: JulianDate;
    let endTime: JulianDate;
    if (
      !isNaN(eventStartTimeDate.getTime()) &&
      !isNaN(eventEndTimeDate.getTime())
    ) {
      startTime = JulianDate.fromDate(eventStartTimeDate);
      endTime = JulianDate.fromDate(eventEndTimeDate);
    } else {
      startTime = viewer.clock.currentTime;
      // Handle invalid dates here
      console.error("Invalid date format");
    }
    setTimeout(() => {
      viewer.clock.currentTime = startTime;
    }, 1000);
    // Set the clock start and stop times
    //(globalThis as any).viewer!.clock.startTime = startTime;
    //(globalThis as any).viewer!.clock.stopTime = endTime;
    // (globalThis as any).viewer!.clock.currentTime = startTime;

    // Set the clock to loop at the end
    //(globalThis as any).viewer!.clock.clockRange = ClockRange.LOOP_STOP;
  });

  onDestroy(() => {
    $activeGroup = "defaultGroup";
    const sDC = (globalThis as any).viewer?.dataSources.getByName(
      "spaceaware"
    )[0];

    // Restore previous point configuration onDestroy and show all entities
    originalEntityProperties.forEach((props, e) => {
      e.point.pixelSize = props.pixelSize;
      e.point.color = props.color;
      (e as SpaceEntity).showOrbit({ show: false });
      e.show = true;
    });

    // Restore label settings onDestroy
    sDC?.entities.values.forEach((e: Entity) => {
      e.show = true;
      if (e.label) {
        e.label.show = new ConstantProperty(false); // Hide labels onDestroy
      }
    });

    (globalThis as any).viewer!.scene.render;
    $activeEvent = new HYPT();
    originalEntityProperties = new Map();
  });

  $: extraRows =
    Math.ceil(
      ($activeEvent?.MATRIX?.length || 0) /
        ($activeEvent?.COL_INDICATORS?.length || 1)
    ) - ($activeEvent?.ROW_INDICATORS?.length || 0);

  function getCellClass(rowIndex: any, colIndex: any) {
    const matrixIndex =
      rowIndex * ($activeEvent?.COL_INDICATORS?.length || 0) + colIndex;
    if ($activeEvent?.MATRIX[matrixIndex] === null) {
      return "";
    }
    if (matrixIndex < ($activeEvent?.MATRIX?.length || 0)) {
      return $activeEvent?.MATRIX[matrixIndex] ? "bg-green-600" : "bg-red-600";
    }
    return "";
  }

  function getCellValue(rowIndex: any, colIndex: any) {
    const matrixIndex =
      rowIndex * ($activeEvent?.COL_INDICATORS?.length || 0) + colIndex;
    if ($activeEvent?.MATRIX[matrixIndex] === null) {
      return "";
    }
    if (matrixIndex < ($activeEvent?.MATRIX?.length || 0)) {
      return $activeEvent?.MATRIX[matrixIndex] ? "true" : "false";
    }
    return "";
  }

  // Function to set the clock to a specific time
  function setClockToTime(timeString: string) {
    const time = JulianDate.fromDate(new Date(timeString));
    (globalThis as any).viewer!.clock.currentTime = time;
  }

  // Function to focus the camera on an entity
  function focusOnEntity(entityId: string) {
    const entity = (globalThis as any).viewer?.dataSources
      .getByName("spaceaware")[0]
      ?.entities.getById(entityId.toString()) as Entity;
    if (entity && entity.position && $trackedEntity !== entity) {
      $trackedEntity = entity;
    }
  }

  // Function to handle cell click
  let onCellClick = function (rowIndex: number) {
    // Retrieve the entity ID from the ROW_INDICATORS array based on the row index
    const entityId = $activeEvent?.ROW_INDICATORS[rowIndex];
    if (entityId) {
      focusOnEntity(entityId);
    }
  };
</script>

<div class="p-1 flex flex-col items-start justify-center min-w-[500px]">
  <div
    class="text-left flex flex-col items-start justify-between mb-4 w-full font-mono">
    <div>
      <div>NAME: {$activeEvent?.NAME}</div>
    </div>
    <div class="cursor-pointer">
      <div on:click={() => setClockToTime($activeEvent?.EVENT_START_TIME)}>
        STRT: {$activeEvent?.EVENT_START_TIME}
      </div>
      <div on:click={() => setClockToTime($activeEvent?.EVENT_END_TIME)}>
        STOP: {$activeEvent?.EVENT_END_TIME}
      </div>
    </div>
  </div>
  <div class="overflow-auto p-2 w-full max-h-[300px]">
    {#if $activeEvent?.COL_INDICATORS?.length}
      <table class="w-full border-collapse">
        <tr>
          <th></th>

          {#each $activeEvent?.COL_INDICATORS as colIndicator}
            <th class="border px-2 whitespace-nowrap w-6 h-6"
              >{colIndicator}</th>
          {/each}
        </tr>
        {#if $activeEvent?.ROW_INDICATORS}
          {#each $activeEvent?.ROW_INDICATORS as rowIndicator, rowIndex}
            <tr>
              <th class="border px-2 w-6 h-6">{rowIndicator}</th>
              {#each $activeEvent?.COL_INDICATORS as _, colIndex}
                <td
                  class="border text-center font-bold w-6 h-6 {getCellClass(rowIndex, colIndex)}"
                  on:click={() => onCellClick(rowIndex)}
                  >{getCellValue(rowIndex, colIndex)}</td>
              {/each}
            </tr>
          {/each}
        {/if}
        {#if extraRows > 0}
          <tr>
            <th class="border px-2"></th>
            {#each Array($activeEvent?.COL_INDICATORS?.length || 0) as _, colIndex}
              <td
                class="border text-center font-bold w-6 h-6 {getCellClass(
                  $activeEvent?.ROW_INDICATORS?.length,
                  colIndex
                )}">{getCellValue($activeEvent?.ROW_INDICATORS?.length, colIndex)}</td>
            {/each}
          </tr>
        {/if}
      </table>
    {:else}
      No COL_INDICATORS <br />
      {#if !$activeEvent?.ROW_INDICATORS?.length}
        No ROW_INDICATORS
      {/if}
    {/if}
  </div>
</div>
