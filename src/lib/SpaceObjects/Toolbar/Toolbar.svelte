<script lang="ts">
  import Groups from "./Buttons/Groups.svelte";
  import GroundStations from "./Buttons/GroundStations.svelte";
  import Launch from "./Buttons/Launch.svelte";
  import Reentry from "./Buttons/Reentry.svelte";
</script>

<div class="cesium-viewer-toolbar flex">
  <GroundStations />
  <Groups />
  <Launch />
  <Reentry />
</div>
