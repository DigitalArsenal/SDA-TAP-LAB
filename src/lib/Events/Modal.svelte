<script lang="ts">
  import {
    getMessageType,
    messages,
    activeEvents,
  } from "@/stores/events.store";
  import { content, lastcontent } from "@/stores/modal.store";
  import { scenario } from "@/stores/settings.store";
  import { onMount } from "svelte";
  import { viewer } from "@/stores/viewer.store";
  import CloseButton from "@/lib/elements/CloseButton.svelte";
  import MessageWrap from "./MessageWrap.svelte";

  let _shouldAnimate = true;
  let modalBody: Element;
  let searchTerm = "";

  onMount(() => {
    _shouldAnimate = $viewer!.clock.shouldAnimate;
    scenario.settings.ClockSettings.shouldAnimate.set(false);
  });

  $: if ($messages && $messages.length > 0 && modalBody) {
    modalBody.scrollTop = modalBody.scrollHeight;
  }

  // Removed the combinedMessages reactive statement

  $: filteredMessages = $messages.filter((message) =>
    JSON.stringify(message).toLowerCase().includes(searchTerm.toLowerCase())
  );

  $: filteredCount = filteredMessages.length;

  const loadTable = (lmessages: any) => {
    $activeEvents = lmessages;
    $lastcontent = $content;
    $content = MessageWrap;
  };

  const closeModal = () => {
    $content = $lastcontent || undefined;
    $lastcontent = undefined;
    scenario.settings.ClockSettings.shouldAnimate.set(_shouldAnimate);
  };
</script>

<div
  class="fixed mt-12 pr-2 pl-2 flex justify-end items-start w-full md:w-[38%] h-[35%] md:h-[34%] max-h-[350px] max-w-[400px] right-0">
  <div class="flex justify-center items-center z-50 w-full h-full">
    <!-- Modal content -->
    <div
      style="background:rgba(48, 51, 54, .9)"
      class="bg-opacity-75 text-white rounded shadow-xl w-full h-full overflow-auto flex flex-col border border-gray-600">
      <!-- Modal header -->
      <div
        class="flex-none text-xs md:text-sm flex justify-between items-center pl-2 pr-3 pt-2 pb-2 md:pt-2 md:pb-2 border-b border-gray-600">
        <div class="flex items-center gap-2 w-full justify-between p-1">
          <div class="font-[300] flex gap-1">
            ALERTS: <p class="text-[.7rem]">
              {filteredCount} / {$messages.length}
            </p>
          </div>
          <input
            type="text"
            class="px-2 py-1 text-black w-32 rounded text-white ml-4"
            placeholder="Search..."
            bind:value={searchTerm} />
        </div>
        <CloseButton onclick={closeModal} />
      </div>

      <div class="flex-grow p-2 pt-0 overflow-auto" bind:this={modalBody}>
        <div class="flex flex-col gap-2 p-2">
          {#each filteredMessages as message, index}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div
              on:click={() => loadTable(message)}
              role="button"
              tabindex={index}
              class="cursor-pointer border border-gray-500 rounded p-2 hover:bg-blue-400 hover:text-white">
              <div class="text-sm w-full flex justify-between items-center">
                <div>{getMessageType(message)}</div>
                <div class="text-[.55rem]">
                  {new Date(message.timestamp).toISOString()}
                </div>
              </div>
              <div>
                <p class="text-[.55rem]">
                  Org: {message.headers["x-client-dn"]
                    .split(",")[3]
                    .split("=")[1]}
                </p>
                <p class="text-[.55rem]">
                  CN: {message.headers["x-client-dn"]
                    ?.split("CN=")[1]
                    ?.split("=")[0]}
                </p>
              </div>
            </div>
          {/each}
        </div>
      </div>
      <div class="p-2 pl-4 border-t border-gray-600 flex">
        <div on:click={e=>{
          if(confirm("Delete local cache?")){
            localStorage.removeItem("messages");
            $messages = [];
          };
        }} class="pl-2 pr-2 p-1 bg-red-600 hover:bg-red-500 cursor-pointer flex items-center justify-center text-sm">Clear</div>
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
