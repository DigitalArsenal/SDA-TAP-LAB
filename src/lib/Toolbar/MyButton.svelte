<!-- MyButton.svelte -->
<script>
  export let label = new Date().getMilliseconds();
  function handleClick() {
    console.log("Button clicked!");
  }
</script>

<div class="text-white flex items-center text-md justify-center" on:click={handleClick}>{label}</div>
