<script lang="ts">
  import { Icon } from "svelte-awesome";
  import { close, chevronDown, chevronUp, fire } from "svelte-awesome/icons";
  import opsStatusCode from "@/lib/theme/ops_status_code.mjs";
  import { viewer } from "@/stores/viewer.store";
  import cesiumEvents from "@/stores/cesium.sync";
  import { scenario } from "@/stores/settings.store";

  const { settings: Settings } = scenario;

  let { orbit } = Settings.EntityState;
  import { onDestroy, onMount } from "svelte";
  import { activeEntity } from "@/stores/entity.store";
  import type { SpaceEntity, Viewer } from "orbpro";

  ($activeEntity as SpaceEntity).showOrbit({ show: true });
  ($viewer as Viewer).trackedEntity = $viewer?.selectedEntity;
</script>

<div class="flex flex-col p-2">
  {#if $activeEntity}
    {$activeEntity.id}
  {/if}
  <div>

  </div>
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
