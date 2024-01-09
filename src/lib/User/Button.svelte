<!-- Settings.svelte -->
<script lang="ts">
  import Icon from "svelte-awesome";
  import { UDLLoggedIn } from "@/stores/user.store";
  import { content, lastcontent } from "@/stores/modal.store";
  import { faUser } from "@fortawesome/free-solid-svg-icons";
  import UserModal from "./Modal.svelte";
  let lastLoaded: Date;

  const defaultToolbar: any = document.querySelector(".cesium-viewer-toolbar");
  const toggleModal = () => {
    if ($content === UserModal) {
      $content = $lastcontent || undefined;
      $lastcontent = undefined;
    } else {
      $lastcontent = $content;
      $content = UserModal;
    }
  };
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
  <Icon scale={1.3} data={faUser} />
  <p
    class:bg-green-300={$UDLLoggedIn}
    class:bg-red-500={!$UDLLoggedIn}
    class="rounded bg-green-300 w-[4px] h-[4px] absolute -bottom-[3px] right-[1px]">
  </p>
</div>

<style>
  :global(.ag-paging-row-summary-panel) {
    position: relative;
    left: 10px;
  }
</style>
