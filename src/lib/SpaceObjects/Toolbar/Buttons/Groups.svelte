<script lang="ts">
  import Icon from "svelte-awesome";
  import { faDatabase } from "@fortawesome/free-solid-svg-icons";
  import GroupsModal from "../Modals/Groups.svelte";
  import { onDestroy, onMount } from "svelte";
  import { content } from "@/stores/modal.store";
  import { groups } from "@/stores/group.store";
  onMount(() => {});

  onDestroy(() => {
    $content = null;
  });

  const toggleModal = () => {
    if ($content !== GroupsModal) {
      $content = GroupsModal;
    } else {
      $content = null;
    }
  };

  let localGroups = {};
  $: {
    if ($groups) {
      let { defaultGroup, ...otherGroups } = $groups;
      localGroups = otherGroups;
    }
  }
</script>

<button
  on:click={toggleModal}
  class="relative text-xl w-8 h-8 cesium-button p-1 text-white flex items-center justify-center cursor-pointer">
  <Icon data={faDatabase} />
  <p class="text-[.5rem] absolute -bottom-2 right-[1px]">{Object.keys(localGroups).length}</p>
</button>
