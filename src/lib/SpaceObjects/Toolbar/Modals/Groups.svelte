<script lang="ts">
  import { groups, activeGroup } from "@/stores/group.store";
  import { content, lastcontent } from "@/stores/modal.store";
  import { onMount } from "svelte";
  import CloseButton from "@/lib/elements/CloseButton.svelte";

  onMount(() => {});

  const closeModal = () => {
    $content = $lastcontent || undefined;
    $lastcontent = undefined;
  };
</script>

<!-- Fullscreen Modal backdrop with margin -->

<div
  class="fixed right-0 mt-12 pr-2 pl-2 flex pointer-events-auto select-none z-50 h-1/2 md:h-1/2 w-full md:w-1/3 max-h-[200px]">
  <!-- Modal content -->
  <div
    style="background:rgba(48, 51, 54, .85)"
    class="bg-opacity-75 text-white rounded shadow-xl w-full h-full overflow-auto flex flex-col border border-gray-600">
    <!-- Modal header -->
    <div class="flex-none text-md md:text-xl">
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div
        class="flex justify-between items-center pl-4 pr-3 pt-2 pb-2 md:pt-2 md:pb-2 border-b border-gray-600">
        <p class="text-white font-[300]">Groups</p>
        <CloseButton onclick={closeModal} />
      </div>
    </div>
    <!-- Modal body -->
    <div class="flex-grow p-1 overflow-auto">
      {JSON.stringify($groups[$activeGroup])}
    </div>
  </div>
</div>
