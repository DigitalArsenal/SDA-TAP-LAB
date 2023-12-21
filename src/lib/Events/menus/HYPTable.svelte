<script lang="ts">
  import { activeHYP } from "@/stores/hypothesis.store";
  import CloseButton from "@/lib/elements/CloseButton.svelte";
  import { content, lastcontent } from "@/stores/modal.store";

  const closeModal = () => {
    $content = $lastcontent || undefined;
    $lastcontent = undefined;
  };

  $: extraRows =
    Math.ceil(
      ($activeHYP?.MATRIX.length || 0) /
        ($activeHYP?.COL_INDICATORS.length || 1)
    ) - ($activeHYP?.ROW_INDICATORS.length || 0);

  function getCellClass(rowIndex: any, colIndex: any) {
    const matrixIndex =
      rowIndex * ($activeHYP?.COL_INDICATORS.length || 0) + colIndex;
    if (matrixIndex < ($activeHYP?.MATRIX.length || 0)) {
      return $activeHYP?.MATRIX[matrixIndex] ? "bg-orange-600" : "";
    }
    return "";
  }
</script>

<div
  class="fixed mt-12 pr-2 pl-2 flex justify-end items-start w-full md:w-[38%] h-[35%] md:h-[34%] max-h-[350px] right-0 rounded">
  <div class="flex flex-col bg-gray-800">
    <div
      class="select-none flex justify-between items-center pl-2 pr-3 pt-2 pb-2 md:pt-2 md:pb-2 border-b border-gray-600 text-white">
      <p class="font-[300]">HYPOTHESIS: {$activeHYP?.CATEGORY}</p>
      <CloseButton onclick={closeModal} />
    </div>
    <div class="p-2">
      <div class="text-left flex items-start justify-start mb-4">
        {$activeHYP?.NAME}
      </div>
      <div class="overflow-y-scroll p-2">
        <table class="border-collapse text-xs">
          <tr>
            <th></th>
            {#if $activeHYP?.COL_INDICATORS}
              {#each $activeHYP?.COL_INDICATORS as colIndicator}
                <th class="border px-2 whitespace-nowrap">{colIndicator}</th>
              {/each}
            {/if}
          </tr>
          {#if $activeHYP?.ROW_INDICATORS}
            {#each $activeHYP?.ROW_INDICATORS as rowIndicator, rowIndex}
              <tr>
                <th class="border px-2">{rowIndicator}</th>
                {#each $activeHYP?.COL_INDICATORS as _, colIndex}
                  <td class="border w-6 h-6 {getCellClass(rowIndex, colIndex)}"
                  ></td>
                {/each}
              </tr>
            {/each}
          {/if}
          {#if extraRows > 0}
            <tr>
              <th class="border px-2"></th>
              {#each Array($activeHYP?.COL_INDICATORS.length || 0) as _, colIndex}
                <td
                  class="border w-6 h-6 {getCellClass(
                    $activeHYP?.ROW_INDICATORS.length,
                    colIndex
                  )}"></td>
              {/each}
            </tr>
          {/if}
        </table>
      </div>
    </div>
  </div>
</div>
