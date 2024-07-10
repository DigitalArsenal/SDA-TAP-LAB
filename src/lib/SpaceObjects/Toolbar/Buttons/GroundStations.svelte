<script lang="ts">
  import Icon from "svelte-awesome";
  import { faBuilding } from "@fortawesome/free-solid-svg-icons";
  import GroupsModal from "../Modals/Groups.svelte";
  import { onMount } from "svelte";
  import { content } from "@/stores/modal.store";
  import GroupNumber from "@/lib/elements/GroupNumber.svelte";
  onMount(() => {});

  const toggleModal = () => {
    if ($content !== GroupsModal) {
      $content = GroupsModal;
    } else {
      $content = null;
    }
  };
</script>

<button
  on:click={toggleModal}
  class="relative text-xl w-8 h-8 cesium-button p-1 text-white flex items-center justify-center cursor-pointer">
  <Icon scale={1} data={faBuilding} />
  <GroupNumber />
</button>
