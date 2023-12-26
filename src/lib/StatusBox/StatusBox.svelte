<script lang="ts">
  import { content, template, title } from "@/stores/modal.store";
  import { scenario } from "@/stores/settings.store";
  import { activeEntity } from "@/stores/entity.store";
  import CloseButton from "@/lib/elements/CloseButton.svelte";
  import { Icon } from "svelte-awesome";
  import { chevronLeft } from "svelte-awesome/icons";
  const { selectedEntity } = scenario;
  let minimized = false;

  const closeModal = () => {
    if ($selectedEntity) {
      minimized = true;
    } else {
      $content = undefined;
    }
  };
</script>

<!-- Fullscreen Modal backdrop with margin -->
{#if minimized}
  <button
  style="border:1px solid white"
    class="rounded fixed flex items-center justify-center top-[45px] right-[5px] w-8 h-8 border cesium-button"
    on:click={() => {
      minimized = false;
    }}>
    <div class="pr-[1px]">
      <Icon scale={1} data={chevronLeft} />
    </div>
  </button>
{:else}
  <div
    class="fixed mt-12 pr-2 pl-2 flex justify-end items-start w-full md:w-[38%] h-[35%] md:h-[34%] max-h-[350px] min-h-[250px] right-0">
    <div class="flex justify-center items-center z-50 w-full h-full">
      <!-- Modal content -->
      <div
        style="background:rgba(48, 51, 54, .9)"
        class="bg-opacity-75 text-white rounded shadow-xl w-full h-full overflow-auto flex flex-col border border-gray-600">
        <!-- Modal header -->
        <div class="flex-none text-xs md:text-sm">
          <!-- svelte-ignore a11y-no-static-element-interactions -->
          <div
            class="select-none flex justify-between items-center pl-2 pr-3 pt-2 pb-2 md:pt-2 md:pb-2 border-b border-gray-600">
            <p class="text-white font-[300]">
              {#if $title}
                {@html $title}
              {:else if $activeEntity}
                {$activeEntity.id}
              {:else}
                Entity
              {/if}
            </p>
            <div class="text-xl">
              <CloseButton onclick={closeModal} />
            </div>
          </div>
        </div>
        <!-- Modal body -->
        <div class="flex-grow p-1 overflow-auto">
          <svelte:component this={$template} />
        </div>
      </div>
    </div>
  </div>
{/if}
