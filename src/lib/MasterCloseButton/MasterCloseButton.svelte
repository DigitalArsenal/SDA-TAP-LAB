<script lang="ts">
  import Icon from "svelte-awesome";
  import { faSatellite } from "@fortawesome/free-solid-svg-icons";
  import { viewer } from "@/stores/viewer.store";
  import { mode, closeMode } from "@/stores/menu.store";

  const close = () => {
    if ($closeMode) {
      $closeMode();
    }
  };
</script>

{#if $mode}
  <button
    on:click={close}
    class="top-[5px] left-1 rounded fixed border border-gray-300 cursor-pointer cesium-button text-xl w-8 h-8 pb-2 flex items-center justify-center"
  >
    ×
  </button>
{/if}
