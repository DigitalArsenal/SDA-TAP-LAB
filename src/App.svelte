<script lang="ts">
  import { onMount } from "svelte";
  import Viewer from "./lib/Viewer/Viewer.svelte";
  import Modal from "./lib/Modal/Modal.svelte";
  import EULA from "./lib/EULA/EULA.svelte";
  import { showEULA } from "@/stores/eula.store";
  import { IP } from "@/stores/user.store";
  import DataTable from "@/lib/DataTable/DataTable.svelte";
  import { datatableShow } from "@/stores/datatable.store";
  import CloseButton from "@/lib/MasterCloseButton/MasterCloseButton.svelte";
  import SpaceObjectToolbar from "@/lib/SpaceObjects/Toolbar/Toolbar.svelte";
  import { mode } from "./stores/menu.store";
  import { title, content } from "@/stores/modal.store";

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
<CloseButton />

{#if $mode === "SpaceObjects"}
  <SpaceObjectToolbar />
{/if}