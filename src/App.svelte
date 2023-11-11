<script lang="ts">
  import { onMount } from "svelte";
  import Viewer from "./lib/Viewer/Viewer.svelte";
  import Modal from "./lib/Modal/Modal.svelte";
  import EULA from "./lib/EULA/EULA.svelte";
  import { showEULA } from "@/stores/eula.store";
  import { IP } from "@/stores/user.store";
  import { appVersion } from "@/stores/settings.store";
  import Logos from "@/lib/Logos.svelte";

  onMount(() => {
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

{#if $showEULA}
  <EULA />
{:else}
  <Viewer />
  <div class="fixed bottom-[30px] right-2 -z-100"><Logos /></div>
  <Modal />
{/if}
<div class="fixed text-gray-300 top-0 left-0 text-[.5rem]">
  Build: {appVersion}
</div>

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
