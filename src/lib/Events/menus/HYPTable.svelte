<script lang="ts">
  import { type HYPT, type HYPCOLLECTIONT } from "@/classes/standards/HYP/main";
  import { activeHYP } from "@/stores/hypothesis.store";
  console.log($activeHYP);
</script>

<div
  class="fixed mt-12 pr-2 pl-2 flex justify-end items-start w-full md:w-[38%] h-[35%] md:h-[34%] max-h-[350px] right-0 rounded">
  <div class="flex flex-col gap-2 bg-gray-800">
    <div class="text-center font-bold">
      {$activeHYP?.CATEGORY}: {$activeHYP?.NAME}
    </div>
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
              <td
                class="border w-6 h-6 {$activeHYP?.MATRIX[
                  rowIndex * $activeHYP?.COL_INDICATORS.length + colIndex
                ]
                  ? 'bg-orange-600'
                  : ''}"></td>
            {/each}
          </tr>
        {/each}
      {/if}
    </table>
  </div>
</div>

<style>
  th {

  }
</style>
