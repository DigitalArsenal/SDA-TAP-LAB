<!-- Settings.svelte -->
<script lang="ts">
  import Icon from "svelte-awesome";
  import { faCamera } from "@fortawesome/free-solid-svg-icons";

  let lastLoaded: Date;

  const defaultToolbar: any = document.querySelector(".cesium-viewer-toolbar");
  const toggleModal = () => {};
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
