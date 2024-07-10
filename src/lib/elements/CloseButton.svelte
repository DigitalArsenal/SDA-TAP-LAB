<script lang="ts">
  export let onclick = function () {};
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  on:click={onclick}
  class="select-none cursor-pointer modal-close-button text-gray-100 w-6 h-6 md:w-7 md:h-7 flex items-center justify-center text-[1.5em] pb-[3px] -mr-1">
  ×
</div>
