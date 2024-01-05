<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { activeEvent } from "@/stores/events.store";
  import { viewer } from "@/stores/viewer.store";
  import { activeGroup } from "@/stores/spacecatalog.group.store";
  import {
    ClockRange,
    Color,
    ConstantProperty,
    JulianDate,
    SpaceEntity,
  } from "orbpro";
  import { HYPT } from "@/classes/standards/HYP/HYP";

  let originalEntityProperties = new Map();

  onMount(() => {
    $activeGroup = "defaultGroup";
    const sDC = $viewer?.dataSources.getByName("spaceaware")[0];

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
          originalEntityProperties.set(e, {
            pixelSize: e.point.pixelSize,
            color: e.point.color,
          });

          //@ts-ignore
          e.point.pixelSize = 10;
          //@ts-ignore
          if (e.label) {
            //@ts-ignore
            e.label.show = true;
          }
          //@ts-ignore
          e.point.color = Color.WHITE; // White color

          (e as SpaceEntity).showOrbit({ show: true });
        }
      }
    }
    setTimeout(() => {
      $viewer?.scene.render;

      // Parse the start and end times
      var startTime = JulianDate.fromDate(
        new Date(($activeEvent as HYPT).EVENT_START_TIME as string)
      );
      var endTime = JulianDate.fromDate(
        new Date(($activeEvent as HYPT).EVENT_END_TIME as string)
      );

      // Set the clock start and stop times
      $viewer!.clock.startTime = startTime;
      $viewer!.clock.stopTime = endTime;
      $viewer!.clock.currentTime = startTime;

      // Set the clock to loop at the end
      $viewer!.clock.clockRange = ClockRange.LOOP_STOP;
    }, 1000);
  });

  onDestroy(() => {
    $activeGroup = "defaultGroup";
    const sDC = $viewer?.dataSources.getByName("spaceaware")[0];

    // Restore previous point configuration onDestroy and show all entities
    originalEntityProperties.forEach((props, e) => {
      e.point.pixelSize = props.pixelSize;
      e.point.color = props.color;
      (e as SpaceEntity).showOrbit({ show: false });
      e.show = true;
    });

    // Restore label settings onDestroy
    sDC?.entities.values.forEach((e) => {
      e.show = true;
      if (e.label) {
        e.label.show = new ConstantProperty(false); // Hide labels onDestroy
      }
    });
    $viewer!.clock.startTime = undefined as any;
    $viewer!.clock.stopTime = undefined as any;
    $viewer!.clock.clockRange = ClockRange.UNBOUNDED;
    $viewer!.scene.render;
    $activeEvent = new HYPT();
  });

  $: extraRows =
    Math.ceil(
      ($activeEvent?.MATRIX?.length || 0) /
        ($activeEvent?.COL_INDICATORS?.length || 1)
    ) - ($activeEvent?.ROW_INDICATORS?.length || 0);

  function getCellClass(rowIndex: any, colIndex: any) {
    const matrixIndex =
      rowIndex * ($activeEvent?.COL_INDICATORS?.length || 0) + colIndex;
    if (matrixIndex < ($activeEvent?.MATRIX?.length || 0)) {
      return $activeEvent?.MATRIX[matrixIndex] ? "bg-orange-600" : "";
    }
    return "";
  }
</script>

<div class="p-1 flex flex-col items-start justify-center min-w-[250px]">
  <div class="text-left flex flex items-start justify-between mb-4 w-full font-mono">
    <div>
      <div class="text-xs">NAME: {$activeEvent?.NAME}</div>
    </div>
    <div>
      <div class="text-xs">STRT: {$activeEvent?.EVENT_START_TIME}</div>
      <div class="text-xs">STOP: {$activeEvent?.EVENT_END_TIME}</div>
    </div>
  </div>
  <div class="overflow-auto p-2 w-full max-w-[300px] max-h-[300px]">
    {#if $activeEvent?.COL_INDICATORS?.length}
      <table class="w-full border-collapse text-xs">
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
                <td class="border w-6 h-6 {getCellClass(rowIndex, colIndex)}"
                ></td>
              {/each}
            </tr>
          {/each}
        {/if}
        {#if extraRows > 0}
          <tr>
            <th class="border px-2"></th>
            {#each Array($activeEvent?.COL_INDICATORS?.length || 0) as _, colIndex}
              <td
                class="border w-6 h-6 {getCellClass(
                  $activeEvent?.ROW_INDICATORS?.length,
                  colIndex
                )}"></td>
            {/each}
          </tr>
        {/if}
      </table>
    {:else}
      No COL_INDICATORS <br/>
      {#if !$activeEvent?.ROW_INDICATORS?.length}
        No ROW_INDICATORS
      {/if}
    {/if}
  </div>
</div>
