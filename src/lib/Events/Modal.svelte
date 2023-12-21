<script lang="ts">
  import { messages } from "@/stores/events.store";
  import { content, lastcontent, template, title } from "@/stores/modal.store";
  import { scenario } from "@/stores/settings.store";
  import { onMount } from "svelte";
  import { viewer } from "@/stores/viewer.store";
  import CloseButton from "@/lib/elements/CloseButton.svelte";
  import HYPTable from "./menus/HYPTable.svelte";
  import { activeHYP } from "@/stores/hypothesis.store";
  import { type HYPT } from "@/classes/standards/HYP/main";

  let _shouldAnimate = true;
  let modalBody: Element;

  onMount(() => {
    _shouldAnimate = $viewer!.clock.shouldAnimate;
    scenario.settings.ClockSettings.shouldAnimate.set(false);
  });

  $: if ($messages && $messages.length > 0 && modalBody) {
    modalBody.scrollTop = modalBody.scrollHeight;
  }

  function getStandardType(payload: any) {
    if (!payload) return;
    const keys = Object.keys(payload);
    const collectionKey = keys.find((key) => key.endsWith("COLLECTION"));
    return collectionKey ? collectionKey.split("COLLECTION")[0] : "N/A";
  }

  const loadTable = (message: any) => {
    $content = HYPTable;
    $activeHYP = message.HYPCOLLECTION.RECORDS[0];
  };

  const closeModal = () => {
    $content = $lastcontent || undefined;
    $lastcontent = undefined;
    scenario.settings.ClockSettings.shouldAnimate.set(_shouldAnimate);
  };
</script>

<div
  class="fixed mt-12 pr-2 pl-2 flex justify-end items-start w-full md:w-[38%] h-[35%] md:h-[34%] max-h-[350px] right-0">
  <div class="flex justify-center items-center z-50 w-full h-full">
    <!-- Modal content -->
    <div
      style="background:rgba(48, 51, 54, .9)"
      class="bg-opacity-75 text-white rounded shadow-xl w-full h-full overflow-auto flex flex-col border border-gray-600">
      <!-- Modal header -->
      <div class="flex-none text-xs md:text-sm">
        <div
          class="select-none flex justify-between items-center pl-2 pr-3 pt-2 pb-2 md:pt-2 md:pb-2 border-b border-gray-600">
          <p class="text-white font-[300]">TAP MSG BUS</p>
          <div class="text-xl">
            <CloseButton onclick={closeModal} />
          </div>
        </div>
      </div>
      <!-- Modal body -->
      <div class="flex-grow p-2 pt-0 overflow-auto" bind:this={modalBody}>
        <div class="flex flex-col gap-2 p-2">
          <!-- Modal content -->
          {#each $messages as message, index}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div
              on:click={() => {
                loadTable(message);
              }}
              role="button"
              tabindex={index}
              class:glow={$messages.length - 1 === index}
              aria-roledescription="loadmessage"
              on:click={() => {}}
              class="cursor-pointer border border-gray-500 rounded p-2 hover:bg-blue-400 hover:text-white">
              <div class="text-sm w-full flex justify-between items-center">
                <div>{getStandardType(message)}</div>
                <div class="text-[.5rem]">
                  {new Date(message.timestamp).toISOString()}
                </div>
              </div>
              <p class="text-xs">
                Org: {message.headers["x-client-dn"]
                  .split(",")[3]
                  .split("=")[1]}
              </p>
              <p class="text-xs">
                CN: {message.headers["x-client-dn"]
                  ?.split("CN=")[1]
                  ?.split("=")[0]}
              </p>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  @keyframes glowFadeOut {
    0% {
      background-color: rgba(255, 181, 44, 0.74);
    }
    100% {
      background-color: transparent;
    }
  }
  .glow {
    animation: glowFadeOut 1s ease-out;
  }
</style>
