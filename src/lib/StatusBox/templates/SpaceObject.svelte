<script>
  import { groups, activeGroup } from "@/stores/group.store";
  import { get } from "svelte/store";
  import { activeEntity } from "@/stores/entity.store";
  import { ClassifyOrbit } from "orbpro";

  let activeObjectId = $activeEntity.id; // The ID of the active object

  $: activeObjectState = get(groups)[$activeGroup]?.objects[activeObjectId] || {
    orbit: false,
    coverage: false,
  };

  function ensureObjectExists() {
    groups.update((g) => {
      // Check if the group and object exist, if not, initialize them
      if (!g[$activeGroup]) {
        g[$activeGroup] = { objects: {} };
      }
      if (!g[$activeGroup].objects[activeObjectId]) {
        g[$activeGroup].objects[activeObjectId] = {
          orbit: false,
          coverage: false,
        };
      }
      return g;
    });
  }

  function toggleOrbit() {
    ensureObjectExists();
    groups.update((g) => {
      const currentState = !g[$activeGroup].objects[activeObjectId].orbit;
      g[$activeGroup].objects[activeObjectId].orbit = currentState;

      // Update the actual activeEntity if it exists
      if ($activeEntity) {
        $activeEntity.showOrbit({ show: currentState });
      }

      return g;
    });
  }

  function toggleCoverage() {
    ensureObjectExists();
    groups.update((g) => {
      const currentState = !g[$activeGroup].objects[activeObjectId].coverage;
      g[$activeGroup].objects[activeObjectId].coverage = currentState;

      // Update the actual activeEntity if it exists
      if ($activeEntity) {
        $activeEntity.showCoverage({ show: currentState });
      }
      return g;
    });
  }
</script>

<!-- Your existing HTML structure -->
<div class="flex flex-col p-3">
  {#if $activeEntity}
    <div>
      {ClassifyOrbit($activeEntity)}
      {~ClassifyOrbit($activeEntity).indexOf("Geostationary Orbit")}
    </div>
    <!-- ... other elements ... -->
    <div class="flex gap-2">
      <div class="flex items-center justify-center gap-2">
        <label>
          <input
            type="checkbox"
            bind:checked={activeObjectState.orbit}
            on:change={toggleOrbit} />
          Show Orbit
        </label>
        <label>
          <input
            type="checkbox"
            bind:checked={activeObjectState.coverage}
            on:change={toggleCoverage} />
          Show Coverage
        </label>
      </div>
    </div>
  {/if}
</div>

<style lang="postcss">
  /* Chrome, safari */
  *::-webkit-scrollbar {
    width: 4px;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #ddd;
  }
</style>
