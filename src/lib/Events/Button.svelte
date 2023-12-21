<!-- Settings.svelte -->
<script lang="ts">
  import Icon from "svelte-awesome";
  import { warning } from "svelte-awesome/icons";
  import { content, lastcontent } from "@/stores/modal.store";
  import EventsModal from "./Modal.svelte";
  import { messages } from "@/stores/events.store";

  const toggleModal = () => {
    if ($messages.length) {
      if ($content === EventsModal) {
        $content = $lastcontent || undefined;
        $lastcontent = undefined;
      } else {
        $lastcontent = $content;
        $content = EventsModal;
      }
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
  class="text-white flex items-center text-md justify-center cursor-pointer"
  on:click={toggleModal}>
  <Icon scale={1.1} data={warning} />
  <div class="absolute bottom-[-3px] right-[1px] text-[.5em]">
    {$messages.length}
  </div>
</div>
