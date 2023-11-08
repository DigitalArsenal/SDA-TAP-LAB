<script lang="ts">
  import { onMount } from "svelte";
  import Viewer from "./lib/Viewer.svelte";
  import Modal from "./lib/Modal/Modal.svelte";
  import TimeLine from "./lib/Timeline/TimeLine.svelte";
  import EULA from "./lib/EULA/EULA.svelte";
  import { showEULA } from "@/stores/eula.store";
  import { IP } from "@/stores/user.store";
  //import { init as devProtectInit } from "@/utilities/devprotect";
  import { cesiumEvents } from "@/stores/cesium.sync";
  import type { Entity } from "orbpro";
  import { isSafe } from "./stores/dev.store";
  import Logos from "@/lib/Logos.svelte";

  const { selectedEntity, trackedEntity } = cesiumEvents;
  onMount(() => {
    //devProtectInit();
    fetch("https://celestrak.digitalarsenal.io/get-ip")
      .then((response) => response.json())
      .then((data) => {
        $IP = data.ip;
      })
      .catch((error) => {
        console.error("Error fetching IP", error);
      });
  });

  /*let activeObject: Entity;
  $: {
    
  }*/
</script>

{#if $showEULA}
  <EULA />
{:else}
  <div class="flex flex-col fixed top-0 z-0 w-full h-full bg-black">
    <Viewer />
    <div class="fixed top-0 left-0 text-white">
      {$selectedEntity?.id || $trackedEntity?.id}
    </div>
  </div>
{/if}
<Modal />
<div class="fixed bottom-[30px] right-2 -z-100"><Logos/></div>
<!-- svelte-ignore css-unused-selector -->
<style global lang="postcss">
  @tailwind utilities;
  @tailwind components;
  @tailwind base;

  :global(html, body) {
    width: 100vw;
    height: 100vh;
    padding: 0px;
    margin: 0px;
    overflow: hidden;
  }

  :global(div) {
    box-sizing: border-box;
  }
  /* Chrome, safari */
  *::-webkit-scrollbar {
    width: 5px;
  }
  * {
    outline: none;
  }
  *::-webkit-scrollbar-thumb {
    background-color: #aaa;
  }
</style>
