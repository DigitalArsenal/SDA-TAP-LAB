<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import {
    getMessageType,
    activeEvents,
    activeEvent,
  } from "@/stores/events.store";
  import { content, lastcontent } from "@/stores/modal.store";
  import { scenario } from "@/stores/settings.store";
  import CloseButton from "@/lib/elements/CloseButton.svelte";
  import HypTable from "./menus/HYPTable.svelte";
  import SitTable from "./menus/SITTable.svelte";
  import RawTable from "./menus/RawTable.svelte";
  import CCDMTable from "./menus/CCDMTable.svelte";
  import type { HYPT } from "@/classes/standards/HYP/HYP";
  import type { SITT } from "@/classes/standards/SIT/SIT";

  import CrmTable from "./menus/CRMTable.svelte";

  export let records: any[] = [];

  const { trackedEntity, selectedEntity } = scenario;

  let dynamicComponent: any;
  let currentIndex = 0;
  let component: any;
  let title: any;
  let messageType: any;

  $: {
    if (messageType === "HYP") {
      title = `HYPOTHESIS: ${($activeEvent as HYPT)?.CATEGORY}`;
    } else if (messageType === "SIT") {
      title = `SITE: ${($activeEvent as SITT).ID}`;
    } else {
      title = messageType;
    }
  }

  onMount(() => {
    messageType = getMessageType($activeEvents);
    if (messageType === "HYP") {
      component = HypTable;
      title = `HYPOTHESIS: ${($activeEvent as HYPT)?.CATEGORY}`;
      records = $activeEvents.HYPCOLLECTION.RECORDS;
    } else if (messageType === "SIT") {
      component = SitTable;
      records = $activeEvents.SITCOLLECTION.RECORDS;
    } else if (messageType === "CRM") {
      component = CrmTable;
      records = $activeEvents.CRMCOLLECTION.RECORDS;
    } else if (messageType === "CCDM") {
      component = CCDMTable;
      const rawM: any = $activeEvents[`${messageType}COLLECTION`];
      records = rawM?.RECORDS || [rawM];
    } else {
      component = RawTable;
      const rawM: any = $activeEvents[`${messageType}COLLECTION`];
      console.log(rawM);
      records = rawM?.RECORDS || [rawM];
    }
  });
  const nextRecord = () => {
    currentIndex = (currentIndex + 1) % records.length;
    $activeEvent = records[currentIndex];
  };

  $: $activeEvent = records[currentIndex];

  const previousRecord = () => {
    currentIndex = currentIndex - 1 < 0 ? records.length - 1 : currentIndex - 1;
    $activeEvent = records[currentIndex];
  };

  const closeModal = () => {
    $content = $lastcontent || undefined;
    $lastcontent = undefined;
    $trackedEntity = null;
    $selectedEntity = null;
    (globalThis as any).viewer!.camera.flyHome(0);
  };
  onDestroy(() => {
    if (dynamicComponent) {
      dynamicComponent.$destroy();
    }
  });
</script>

<div
  class="fixed mt-12 pr-2 pl-2 flex justify-end items-start w-full md:w-[50%] h-[35%] md:h-[34%] max-h-[350px] right-0 rounded">
  <div class="text-white flex flex-col bg-gray-800">
    <div
      class="select-none flex justify-between items-center pl-2 pr-3 pt-2 pb-2 md:pt-2 md:pb-2 border-b border-gray-600 text-white">
      <p class="font-[300]">{title}</p>
      <CloseButton onclick={closeModal} />
    </div>
    <div class="p-2 flex flex-col gap-1 justify-between">
      <div class="flex flex-col gap-2 overflow-auto max-w-300px max-h-300px">
        {#if records.length > 0}
          <svelte:component this={component} />
        {/if}
        {#if records.length>1}
        <div class="pt-2 text-xs w-full border-t-[1px] border-gray-500">
          {currentIndex + 1}/{records.length}
        </div>
        <div
          class="select-none w-full flex gap-1 text-xs cursor-pointer justify-center">
          <div
            class="hover:bg-blue-400 p-2 w-1/2 flex items-center justify-center bg-gray-700"
            on:click={previousRecord}>
            Previous
          </div>
          <div
            class="hover:bg-blue-400 p-2 w-1/2 flex items-center justify-center bg-gray-700"
            on:click={nextRecord}>
            Next
          </div>
        </div>
        {/if}
      </div>
    </div>
  </div>
</div>

<style>
</style>
