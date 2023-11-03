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
  class="fixed inset-0 m-12 bg-gray-700 bg-opacity-75 flex justify-center items-center z-50">
  <!-- Modal content -->
  <div
    class="bg-gray-800 bg-opacity-75 text-white rounded-lg shadow-xl w-full h-full overflow-auto flex flex-col">
    <!-- Modal header -->
    <div class="flex-none">
      <div
        class="flex justify-between items-center p-5 border-b border-gray-600">
        <p class="text-2xl">Settings</p>
        <button
          class="modal-close-button text-lg text-gray-100 hover:text-gray-200 w-8 h-8 flex items-center justify-center bg-gray-600 rounded-full"
          on:click={closeModal}>
          <span class="sr-only">Close</span>
          <Icon data={close} />
        </button>
      </div>
    </div>
    <!-- Modal body -->
    <div class="flex-grow p-5 overflow-auto">
      <Globe />
    </div>
    <!-- Modal footer -->
    <div class="flex-none">
      <div class="flex justify-end p-5 border-t border-gray-600">
        <button
          class="px-4 py-2 bg-gray-600 rounded hover:bg-gray-700 focus:outline-none focus:ring focus:border-blue-300"
          on:click={closeModal}>
          Close
        </button>
      </div>
    </div>
  </div>
</div>
