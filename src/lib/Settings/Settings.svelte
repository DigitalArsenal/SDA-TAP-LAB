<!-- Settings.svelte -->
<script lang="ts">
  import Icon from "svelte-awesome";
  import { gears } from "svelte-awesome/icons";
  import { content } from "@/stores/modal.store";
  import { scenario } from "@/stores/settings.store";
  import SettingsModal from "./SettingsModal.svelte";
  import { activeEntity } from "@/stores/entity.store";

  const { selectedEntity } = scenario;
  const toggleModal = () => {
    console.log($content);
    if ($content === SettingsModal) {
      $content = undefined;
    } else {
      $activeEntity = null;
      $content = SettingsModal;
      console.log($content);
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
  <Icon scale={1.5} data={gears} />
</div>
