<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { activeEvent } from "@/stores/events.store";
  import { viewer } from "@/stores/viewer.store";
  import { activeGroup } from "@/stores/spacecatalog.group.store";
  import { Color, ConstantProperty, SpaceEntity } from "orbpro";

  let originalEntityProperties = new Map();

  onMount(() => {
    $activeGroup = "defaultGroup";
    const sDC = $viewer?.dataSources.getByName("spaceaware")[0];

    for (const e of sDC?.entities.values!) {
      e.show = false;
      const idString = e.id.toString();
      if (
        $activeEvent.COL_INDICATORS.includes(idString) ||
        $activeEvent.ROW_INDICATORS.includes(idString) ||
        $activeEvent.CAT_IDS.includes(idString)
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
          console.log(e);

          (e as SpaceEntity).showOrbit({ show: true });
        }
      }
    }

    $viewer?.scene.render;
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

    $viewer?.scene.render;
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

<div class="p-1 flex flex-col items-start justify-center">
  <div class="text-left flex flex-col items-start justify-start mb-4">
    <div class="text-xs">NAME: {$activeEvent?.NAME}</div>
  </div>
  <div class="overflow-auto p-2 w-full max-w-[300px] max-h-[300px]">
    {#if $activeEvent?.COL_INDICATORS}
      <table class="w-full border-collapse text-xs">
        <tr>
          <th></th>

          {#each $activeEvent?.COL_INDICATORS as colIndicator}
            <th class="border px-2 whitespace-nowrap w-6 h-6">{colIndicator}</th>
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
    {/if}
  </div>
</div>
