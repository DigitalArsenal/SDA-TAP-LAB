<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { activeEvent } from "@/stores/events.store";
  import { activeGroup } from "@/stores/spacecatalog.group.store";
  import {
    Cartesian3,
    ClockRange,
    Color,
    ConstantProperty,
    JulianDate,
    SpaceEntity,
  } from "orbpro";
  import { type Entity } from "orbpro";
  import { CRMT } from "@/classes/standards/CRM/CRM";
  import { scenario } from "@/stores/settings.store";
  const { trackedEntity } = scenario;

  let originalEntityProperties = new Map();
  const viewer = (globalThis as any).viewer;
  onMount(() => {
    $activeGroup = "defaultGroup";
    const sDC = viewer?.dataSources.getByName("spaceaware")[0];

    for (const e of sDC?.entities.values!) {
      e.show = false;
    }

    // Parse the start and end times
    const eventStartTimeString = ($activeEvent as CRMT)
      .EPOCH as string;

    const eventStartTimeDate = new Date(eventStartTimeString);
    let startTime: JulianDate;
    if (
      !isNaN(eventStartTimeDate.getTime())
    ) {
      startTime = JulianDate.fromDate(eventStartTimeDate);
    } else {
      startTime = viewer.clock.currentTime;
      // Handle invalid dates here
      console.error("Invalid date format");
    }
    setTimeout(() => {
      viewer.clock.currentTime = startTime;
    }, 1);
  });

  onDestroy(() => {
    $activeGroup = "defaultGroup";
    const sDC = (globalThis as any).viewer?.dataSources.getByName(
      "spaceaware"
    )[0];

    (globalThis as any).viewer!.scene.render;
    $activeEvent = new CRMT();
    originalEntityProperties = new Map();
  });

  // Function to set the clock to a specific time
  function setClockToTime(timeString: string) {
    const time = JulianDate.fromDate(new Date(timeString));
    (globalThis as any).viewer!.clock.currentTime = time;
  }
</script>

<div class="p-1 flex flex-col items-start justify-center min-w-[500px]">
  <div
    class="text-left flex flex-col items-start justify-between mb-4 w-full font-mono">
    <div>
      <div>NAME: {$activeEvent?.NAME}</div>
    </div>
    <div class="cursor-pointer">
      <div>
        EPOCH: {$activeEvent?.EPOCH}
      </div>
    </div>
  </div>
  <div class="overflow-auto p-2 w-full max-h-[300px]">

  </div>
</div>
