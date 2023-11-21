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
  import { scenario } from "./stores/settings.store";
  import { title, content } from "@/stores/modal.store";

  const { selectedEntity } = scenario;
  onMount(() => {
    COIServiceWorker();
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
  <div id="container" class="flex flex-col h-full select-none">
    <div class="viewer">
      <Viewer />
    </div>
    <div
      class="datatable"
      style={$datatableShow ? "flex-grow: 1;" : "display: none;"}
    >
      <DataTable />
    </div>
  </div>
{/if}
{#if $title || $content}
  <Modal />
{/if}
<div class="fixed text-gray-300 top-0 left-2 text-gray-500 text-[.3rem]">
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

  /* DataTable */
  .datatable {
    flex-grow: 1; /* Adjust this value based on how much space you want to allocate */
    overflow-y: auto; /* Or as per your requirement */
  }
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
