<script lang="ts">
  import { Icon } from "svelte-awesome";
  import { content, lastcontent } from "@/stores/modal.store";
  import Globe from "./menus/Globe.svelte";
  import { scenario } from "@/stores/settings.store";
  import { onMount } from "svelte";
  import { viewer } from "@/stores/viewer.store";
  import CloseButton from "@/lib/elements/CloseButton.svelte";
  let _shouldAnimate = true;

  onMount(() => {
    _shouldAnimate = $viewer!.clock.shouldAnimate;
    scenario.settings.ClockSettings.shouldAnimate.set(false);
  });

  const closeModal = () => {
    $content = $lastcontent || undefined;
    $lastcontent = undefined;
    scenario.settings.ClockSettings.shouldAnimate.set(_shouldAnimate);
  };
</script>

<!-- Fullscreen Modal backdrop with margin -->
<div
  class="fixed inset-0 mt-12 pr-2 pl-2 flex justify-end pointer-events-auto select-none">
  <div
    class="flex justify-center items-center z-50 h-1/2 md:h-1/2 md:w-1/2 w-full max-h-[400px]">
    <!-- Modal content -->
    <div
      style="background:rgba(48, 51, 54, .85)"
      class="bg-opacity-75 text-white rounded-lg shadow-xl w-full h-full overflow-auto flex flex-col border border-gray-600">
      <!-- Modal header -->
      <div class="flex-none text-md md:text-xl">
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div
          class="flex justify-between items-center pl-4 pr-3 pt-2 pb-2 md:pt-2 md:pb-2 border-b border-gray-600">
          <p class="text-white font-[300]">Settings</p>
          <CloseButton onclick={closeModal} />
        </div>
      </div>
      <!-- Modal body -->
      <div class="flex-grow p-1 overflow-auto">
        <Globe />
      </div>
      <!-- Modal footer 
    <div class="flex-none">
      <div class="flex justify-end p-5 border-t border-gray-600">
        <button
          class="px-4 py-2 bg-gray-600 rounded hover:bg-gray-700 focus:outline-none focus:ring focus:border-blue-300"
          on:click={closeModal}>
          Close
        </button>
      </div>
    </div>-->
    </div>
  </div>
</div>
