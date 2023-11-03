<!-- DynamicComponent.svelte -->
<script>
  import { content } from "@/stores/modal.store";
</script>

{#if $content !== undefined}
  <svelte:component this={$content} />
{/if}
