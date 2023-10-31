<script lang="ts">
  import { onMount } from "svelte";
  import Viewer from "./lib/Viewer.svelte";
  import TimeLine from "./lib/TimeLine.svelte";
  import EULA from "./lib/EULA.svelte";
  import { eulaVersion } from "@/stores/eula.store";
  import { IP } from "@/stores/user.store";

  let showEULA = false;
  const eulaUUID = "7e6d9cc1-5856-4238-90bf-7465b3b3446d:EULA";
  const eulaVersionUUID = "9b3babdc-ee1a-4435-b8a5-14ebf2665bdf:EULA:VERSION";

  onMount(() => {
    fetch("https://celestrak.digitalarsenal.io/get-ip")
      .then((response) => response.json())
      .then((data) => {
        $IP = data.ip;
        console.log($IP);
      })
      .catch((error) => {
        console.error("Error fetching IP", error);
      });

    const eulaLocalAccepted = localStorage.getItem(eulaUUID);
    const eulaLocalVersion = localStorage.getItem(eulaVersionUUID);

    if (
      eulaLocalAccepted === null ||
      eulaLocalVersion === null ||
      parseFloat(eulaLocalVersion) < $eulaVersion
    ) {
      showEULA = true;
    }
    // Get the viewport height and multiply it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then set the custom --vh value to the root of the document
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });

  function acceptEULA() {
    localStorage.setItem(eulaUUID, "true");
    localStorage.setItem(eulaVersionUUID, JSON.stringify($eulaVersion));

    showEULA = false;
  }
</script>

{#if showEULA}
  <EULA {acceptEULA} />
{:else}
  <div class="flex flex-col fixed top-0 z-0 w-full h-full bg-black">
    <Viewer />
    <TimeLine />
  </div>
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
