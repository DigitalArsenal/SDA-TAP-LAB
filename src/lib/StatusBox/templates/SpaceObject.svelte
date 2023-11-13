<script lang="ts">
  import { groups, activeGroup } from "@/stores/group.store";
  import { activeEntity } from "@/stores/entity.store";
  import { ClassifyOrbit } from "orbpro";
  import { scenario } from "@/stores/settings.store";
  let { trackedEntity, selectedEntity } = scenario;
  import { viewer } from "@/stores/viewer.store";
  import type { CAT } from "@/classes/SDS-1-Satellite-Catalog-Message-(CAT)-TypeScript/CAT";
  import type { OMM } from "@/classes/SDS-2-Orbit-Mean-Elements-Message-(OMM)-TypeScript/OMM";

  const { OMM: pOMM, CAT: pCAT } = $activeEntity.properties;

  const OMM: OMM = pOMM.getValue();
  const CAT: CAT = pCAT.getValue();

  let defaultObjectValue = { orbit: false, coverage: false };
  let activeObjectState: any = { ...defaultObjectValue };
  // Reactive statement to update activeObjectState whenever groups or activeGroup changes
  $: {
    activeObjectState = $groups[$activeGroup]?.objects[$activeEntity?.id] || {
      ...defaultObjectValue,
    };
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
    <div class="p-4">
      <div class="flex flex-col gap-1">
        <div>Intl DES</div>
        <div>
          {OMM.OBJECT_ID}
        </div>
      </div>
    </div>
    <!-- ... other elements ... -->
    <div
      class="w-full flex gap-6 cursor-pointer items-start justify-start p-4 pt-3 border-t-[1px] border-gray-400">
      <div class="flex flex-col gap-2">
        <div class="flex gap-2">
          <div class="flex items-center justify-center gap-2">
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div
              class="border rounded p-1 bg-black"
              on:click={(e) => {
                if (!$viewer) return;
                if ($trackedEntity?.id !== $activeEntity.id) {
                  $trackedEntity = $activeEntity;
                  console.log($trackedEntity?.id !== $activeEntity.id);
                } else {
                  $trackedEntity = null;
                }
              }}>
              <div
                class:bg-white={$trackedEntity?.id === $activeEntity?.id}
                class:bg-black={$trackedEntity?.id !== $activeEntity?.id}
                class="w-2 h-2" />
            </div>
            Track
          </div>
        </div>
      </div>
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
