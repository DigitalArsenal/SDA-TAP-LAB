<!-- DynamicComponent.svelte -->
<script>
  import { content, template } from "@/stores/modal.store";
  import { activeEntity } from "@/stores/entity.store";
  import { Icon } from "svelte-awesome";
  import { chevronLeft } from "svelte-awesome/icons";
  import StatusBox from "@/lib/StatusBox/StatusBox.svelte";

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

{#if false}
  <div class="absolute top-10 sm:top-10 right-0 float-right p-2 z-50">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
      class="rounded cursor-pointer pointer-events-auto w-8 h-8 bg-black text-white border flex items-center justify-center"
      on:click={(e) => {
        $content = StatusBox;
      }}>
      <Icon data={chevronLeft} scale={0.75} />
    </div>
  </div>
{/if}
