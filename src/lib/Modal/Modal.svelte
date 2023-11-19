<!-- DynamicComponent.svelte -->
<script>
  import { content, template } from "@/stores/modal.store";
  import { activeEntity } from "@/stores/entity.store";

  // Reactive statement to handle style changes
  $: if ($activeEntity && !$content) {
    // Try to access the element and apply styles
    let perf = document.getElementsByClassName(
      "cesium-performanceDisplay-defaultContainer"
    )[0];
    if (perf) {
      //@ts-ignore
      perf.style.top = "90px";
    }
  } else {
    let perf = document.getElementsByClassName(
      "cesium-performanceDisplay-defaultContainer"
    )[0];
    if (perf) {
      //@ts-ignore
      perf.style.top = "50px";
    }
  }
</script>

{#if $content !== undefined}
  <svelte:component this={$content} />
{/if}