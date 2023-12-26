<script lang="ts">
  import { activeEvent } from "@/stores/events.store";
  import { content, lastcontent } from "@/stores/modal.store";

  const closeModal = () => {
    $content = $lastcontent || undefined;
    $lastcontent = undefined;
  };

  $: extraRows =
    Math.ceil(
      ($activeEvent?.MATRIX.length || 0) /
        ($activeEvent?.COL_INDICATORS.length || 1)
    ) - ($activeEvent?.ROW_INDICATORS.length || 0);

  function getCellClass(rowIndex: any, colIndex: any) {
    const matrixIndex =
      rowIndex * ($activeEvent?.COL_INDICATORS.length || 0) + colIndex;
    if (matrixIndex < ($activeEvent?.MATRIX.length || 0)) {
      return $activeEvent?.MATRIX[matrixIndex] ? "bg-orange-600" : "";
    }
    return "";
  }
</script>

<div class="p-1 flex flex-col items-start justify-center">
  <div class="text-left flex flex-col items-start justify-start mb-4">
    <div class="text-xs">NAME: {$activeEvent?.NAME}</div>
  </div>
  <div class="overflow-y-scroll p-2 w-full">
    <table class="w-full border-collapse text-xs">
      <tr>
        <th></th>
        {#if $activeEvent?.COL_INDICATORS}
          {#each $activeEvent?.COL_INDICATORS as colIndicator}
            <th class="border px-2 whitespace-nowrap">{colIndicator}</th>
          {/each}
        {/if}
      </tr>
      {#if $activeEvent?.ROW_INDICATORS}
        {#each $activeEvent?.ROW_INDICATORS as rowIndicator, rowIndex}
          <tr>
            <th class="border px-2">{rowIndicator}</th>
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
          {#each Array($activeEvent?.COL_INDICATORS.length || 0) as _, colIndex}
            <td
              class="border w-6 h-6 {getCellClass(
                $activeEvent?.ROW_INDICATORS.length,
                colIndex
              )}"></td>
          {/each}
        </tr>
      {/if}
    </table>
  </div>
</div>
