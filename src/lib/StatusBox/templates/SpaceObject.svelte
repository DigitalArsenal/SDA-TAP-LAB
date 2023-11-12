<script lang="ts">
  import { groups, activeGroup } from "@/stores/group.store";
  import { get } from "svelte/store";
  import { activeEntity } from "@/stores/entity.store";
  import { ClassifyOrbit } from "orbpro";

  let defaultObjectValue = { orbit: false, coverage: false };
  let activeObjectState: any = { ...defaultObjectValue };
  // Reactive statement to update activeObjectState whenever groups or activeGroup changes
  $: {
    activeObjectState =
      $groups[$activeGroup]?.objects[$activeEntity.id] || { ...defaultObjectValue };
    console.log($activeGroup);
    console.log($activeEntity.id);
    console.log(activeObjectState);
  }

  function ensureObjectExists() {
    groups.update((g) => {
      // Check if the group and object exist, if not, initialize them
      if (!g[$activeGroup]) {
        g[$activeGroup] = { objects: {} };
      }
      if (!g[$activeGroup].objects[$activeEntity.id]) {
        g[$activeGroup].objects[$activeEntity.id] = {
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
      const currentState = !g[$activeGroup].objects[$activeEntity.id].orbit;
      g[$activeGroup].objects[$activeEntity.id].orbit = currentState;

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
      const currentState = !g[$activeGroup].objects[$activeEntity.id].coverage;
      g[$activeGroup].objects[$activeEntity.id].coverage = currentState;

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
    <div
      class="w-full flex gap-3 cursor-pointer items-start justify-items-start p-4 pt-1">
      <div class="flex flex-col gap-2">
        <div class="flex gap-2">
          <div class="flex items-center justify-center gap-2">
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div class="border rounded p-1 bg-black" on:click={toggleOrbit}>
              <div
                class:bg-white={activeObjectState.orbit}
                class:bg-black={!activeObjectState.orbit}
                class="w-2 h-2" />
            </div>
            Show Orbit
          </div>
        </div>
        <div class="flex gap-2">
          <div class="flex items-center justify-center gap-2">
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div class="border rounded p-1 bg-black" on:click={toggleCoverage}>
              <div
                class:bg-white={activeObjectState.coverage}
                class:bg-black={!activeObjectState.coverage}
                class="w-2 h-2" />
            </div>
            Show Coverage
          </div>
        </div>
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
