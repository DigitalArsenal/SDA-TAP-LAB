<script lang="ts">
  import Viewer from "./lib/Viewer.svelte";
</script>

<div class="flex flex-col fixed top-0 z-0 w-full h-full bg-black">
  <Viewer />
</div>

<!-- svelte-ignore css-unused-selector -->
<style global lang="postcss">
  @tailwind utilities;
  @tailwind components;
  @tailwind base;
  :global(#app, html, body) {
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
    width: 4px;
  }
  * {
    outline: none;
  }
  *::-webkit-scrollbar-thumb {
    background-color: #ddd;
  }
</style>
