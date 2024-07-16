<script lang="ts">
  import { onMount } from "svelte";
  import Viewer from "./lib/Viewer/Viewer.svelte";
  import Modal from "./lib/Modal/Modal.svelte";
  import EULA from "./lib/EULA/EULA.svelte";
  import { showEULA } from "@/stores/eula.store";
  import { IP } from "@/stores/user.store";
  import { appVersion } from "@/stores/settings.store";
  import COIServiceWorker from "./lib/COIServiceWorker/COIServiceWorker";
  import DataTable from "@/lib/DataTable/DataTable.svelte";
  import { datatableShow } from "@/stores/datatable.store";
  import CloseButton from "@/lib/MasterCloseButton/MasterCloseButton.svelte";
  import SpaceObjectToolbar from "@/lib/SpaceObjects/Toolbar/Toolbar.svelte";
  import { mode } from "./stores/menu.store";
  import { title, content } from "@/stores/modal.store";
  import { isSafe } from "./stores/dev.store";

  if (!isSafe()) {
    (window as any).CESIUM_BASE_URL = "./assets/";
  }

  onMount(() => {
    //COIServiceWorker();
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
  <a class="hidden sm:block" style="position:fixed;z-index:10" href="https://github.com/digitalarsenal/SDA-TAP-LAB"
    ><img
      decoding="async"
      width="149"
      height="149"
      src="https://github.blog/wp-content/uploads/2008/12/forkme_left_green_007200.png"
      class="attachment-full size-full"
      alt="Fork me on GitHub"
      loading="lazy"
      data-recalc-dims="1" /></a>
  <div id="container" class="absolute w-full h-full select-none">
    <div class="viewer" style={$datatableShow ? "height:70%" : "height: 100%"}>
      <Viewer />
    </div>
    <div
      class="datatable absolute w-full b-0 l-0"
      style={$datatableShow ? "height:30%" : "display: none;"}>
      {#if $datatableShow}
        <DataTable />
      {/if}
    </div>
  </div>
{/if}
{#if $title || $content}
  <Modal />
{/if}
<div
  class="fixed text-gray-300 top-0 left-32 text-gray-600 text-[.15rem] lg:text-[1rem]">
  Build: {appVersion}
</div>
<CloseButton />

{#if $mode === "SpaceObjects"}
  <SpaceObjectToolbar />
{/if}

<!-- svelte-ignore css-unused-selector -->
<style global lang="postcss">
  @tailwind utilities;
  @tailwind components;
  @tailwind base;

  /* Viewer */
  .viewer {
    flex-grow: 2; /* Adjust this value as needed */
    overflow-y: auto; /* Or as per your requirement */
  }

  :global(html, body) {
    overscroll-behavior: none;
    width: 100vw;
    height: 100vh;
    padding: 0px;
    margin: 0px;
    overflow: hidden;
    position: fixed;
    touch-action: none;
  }

  :global(div) {
    box-sizing: border-box;
    overscroll-behavior: none;
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
