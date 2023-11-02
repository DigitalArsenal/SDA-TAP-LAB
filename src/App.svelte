<script lang="ts">
  import { onMount } from "svelte";
  import Viewer from "./lib/Viewer.svelte";
  import TimeLine from "./lib/TimeLine.svelte";
  import EULA from "./lib/EULA.svelte";
  import { showEULA } from "@/stores/eula.store";
  import { IP } from "@/stores/user.store";
  import { init as devProtectInit } from "@/utilities/devprotect";
  import Table from "@/lib/Table.svelte";

  onMount(() => {
    devProtectInit();
    fetch("https://celestrak.digitalarsenal.io/get-ip")
      .then((response) => response.json())
      .then((data) => {
        $IP = data.ip;
      })
      .catch((error) => {
        console.error("Error fetching IP", error);
      });
  });
</script>

{#if $showEULA && globalThis.location.hostname !== "12localhost"}
  <EULA />
{:else}
  <div class="flex flex-col fixed top-0 z-0 w-full h-full bg-black">
    <Viewer />
  </div>
  <!--<div class="fixed bottom-0 flex items-center justify-center w-full">
    <Table />
  </div>-->
{/if}

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
