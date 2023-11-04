<script lang="ts">
  import { Icon } from "svelte-awesome";
  import { close } from "svelte-awesome/icons";
  import { content } from "@/stores/modal.store";
  import Globe from "./menus/Globe.svelte";
  const closeModal = () => {
    $content = undefined;
  };
</script>

<!-- Fullscreen Modal backdrop with margin -->
<div
  class="fixed inset-0 mt-12 mr-2 flex justify-center items-center z-50 h-[43%] md:h-1/2 w-full md:w-1/2 max-h-[400px] right-0 left-auto">
  <!-- Modal content -->
  <div
    style="background:rgba(48, 51, 54, .6)"
    class="bg-opacity-75 text-white rounded-lg shadow-xl w-full h-full overflow-auto flex flex-col border border-gray-600">
    <!-- Modal header -->
    <div class="flex-none">
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div
        class="flex justify-between items-center pl-4 pr-3 pt-4 pb-4 border-b border-gray-600">
        <p class="text-2xl text-white font-[300]">Settings</p>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div
          class="cursor-pointer modal-close-button text-lg text-gray-100 hover:bg-gray-500 active:bg-gray-400 w-8 h-8 flex items-center justify-center bg-gray-700 rounded-full border border-gray-500"
          on:click={closeModal}>
          <Icon data={close} />
        </div>
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
