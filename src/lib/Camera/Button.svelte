<!-- Settings.svelte -->
<script lang="ts">
  import Icon from "svelte-awesome";
  import { faCamera } from "@fortawesome/free-solid-svg-icons";
  import { warning } from "svelte-awesome/icons";
  import { content, lastcontent } from "@/stores/modal.store";
  import CameraModal from "./Modal.svelte";
  import { messages } from "@/stores/events.store";

  const toggleModal = () => {
    if ($content === CameraModal) {
      $content = $lastcontent || undefined;
      $lastcontent = undefined;
    } else {
      $lastcontent = $content;
      $content = CameraModal;
    }
  };
  let lastLoaded: Date;
</script>

<!-- Button to open the modal -->
<div
  tabindex="0"
  role="button"
  on:keydown={(e) => {
    if (e.key === "Enter" || e.key === "Space") toggleModal();
  }}
  class="relative text-white flex items-center text-md justify-center cursor-pointer"
  on:click={toggleModal}>
  <Icon scale={1.3} data={faCamera} />
</div>

<style>
  :global(.ag-paging-row-summary-panel) {
    position: relative;
    left: 10px;
  }
</style>
