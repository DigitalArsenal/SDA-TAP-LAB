<script lang="ts">
  import { onDestroy } from "svelte";
  import { activeGroup, groups } from "@/stores/group.store";
  import { content, lastcontent } from "@/stores/modal.store";
  import CloseButton from "@/lib/elements/CloseButton.svelte";
  import { Icon } from "svelte-awesome";
  import { folder, trash, eye, eyeSlash, table } from "svelte-awesome/icons";
  import { scenario } from "@/stores/settings.store";
  import { viewer } from "@/stores/viewer.store";
  const { selectedEntity, trackedEntity } = scenario;
  import getID from "../../lib/getID";
  import { get } from "svelte/store";
  import { Color } from "orbpro";
  import RangeSlider from "@/lib/widgets/RangeSlider.svelte";

  let searchTerm = "";
  // Local versions of properties
  let localPixelSize: any = 10;
  let localPointColor: any = "#ffffff";
  let localOutlineWidth: any = 0;
  let localOutlineColor: any = "#ffffff";
  let localPathWidth: any = 5;
  let localPathColor: any = "#ffffff";

  onDestroy(() => {
    searchTerm = ""; // Reset the search term when the component is destroyed
  });

  const closeModal = () => {
    $content = $lastcontent !== $content ? $lastcontent : undefined;
    $lastcontent = undefined;
  };

  // Toggles the visibility of a group
  function toggleShow(groupName: string) {
    groups.update((currentGroups) => {
      if (currentGroups[groupName]) {
        currentGroups[groupName].show = !currentGroups[groupName].show;
      }
      return currentGroups;
    });
  }

  // Removes a group from the list
  function removeGroup(groupName: string) {
    if ($activeGroup === groupName) {
      activeGroup.set("defaultGroup");
    }
    groups.update((currentGroups) => {
      delete currentGroups[groupName];
      return currentGroups;
    });
  }

  let setLast: any;
  $: {
    // Update local versions with the active group's values
    const group = $groups[$activeGroup];
    if (group && $activeGroup !== setLast) {
      setLast = $activeGroup;
      if (group.point) {
        localPixelSize = group.point.pixelSize;
        localPointColor = group.point.color;
        localOutlineWidth = group.point.outlineWidth;
        localOutlineColor = group.point.outlineColor;
      }
      if (group.path) {
        localPathWidth = group.path.width;
        localPathColor = group.path.material.color;
      }
      console.log(group.point, group.path);
    }
  }
  // Sets a group as the active group
  function setActiveGroup(groupName: string) {
    $selectedEntity = null;
    $trackedEntity = null;
    $viewer?.camera.flyHome();
    activeGroup.set(groupName);
  }

  // Function to update properties
  function updateProperties() {
    const _viewer = get(viewer);
    if (!_viewer) {
      return;
    }

    const filteredRows = $groups[$activeGroup]?.objectList ?? [];
    const filteredIds = new Set(filteredRows.map((row) => getID(row)));

    const dataSource = _viewer.dataSources.getByName("spaceaware")[0];
    dataSource.entities.suspendEvents();

    filteredIds.forEach((id) => {
      const entity = dataSource.entities.getById(id);
      if (entity) {
        if (entity.point) {
          entity.point.show = true as any;
          entity.point.pixelSize = localPixelSize;
          entity.point.color = Color.fromCssColorString(localPointColor) as any;
          entity.point.outlineWidth = localOutlineWidth;
          entity.point.outlineColor = Color.fromCssColorString(
            localOutlineColor
          ) as any;
          if (!localOutlineWidth) {
            entity.point.outlineColor = null as any;
            entity.point.outlineWidth = null as any;
          }
        }
        if (entity.path) {
          entity.path.width = localPathWidth;
          entity.path.material = Color.fromCssColorString(
            localPathColor
          ) as any;
        }
        entity.show = true;
      }
    });

    dataSource.entities.resumeEvents();
    _viewer.scene.render();
  }
</script>

<!-- Fullscreen Modal backdrop with margin -->
<div
  class="fixed right-0 mt-12 pr-2 pl-2 flex pointer-events-auto select-none z-50 h-2/3 md:h-2/3 w-full md:w-1/3 max-h-[400px]">
  <!-- Modal content -->
  <div
    style="background:rgba(48, 51, 54, .85)"
    class="bg-opacity-75 text-white rounded shadow-xl w-full h-full overflow-auto flex flex-col border border-gray-600">
    <!-- Modal header -->
    <div class="flex-none text-md md:text-xl">
      <div
        class="h-full flex justify-between items-center pl-4 pr-3 pt-2 pb-2 md:pt-2 md:pb-2 border-b border-gray-600">
        <p class="text-white font-[300]">
          Groups
          {#if $activeGroup !== "defaultGroup"}
            :
            <span class="text-blue-400"
              >{$groups[$activeGroup].name.slice(0, 20)}</span>
          {/if}
        </p>

        <CloseButton onclick={closeModal} />
      </div>
    </div>
    <!-- Modal body -->
    <div class="flex-grow p-1 overflow-y-auto overflow-x-hidden p-2">
      <!-- Search bar -->
      {#if $activeGroup === "defaultGroup" && Object.keys($groups).length > 1}
        <input
          bind:value={searchTerm}
          type="search"
          class="text-black w-full mb-2 rounded text-xs p-1"
          placeholder="Search groups..." />
      {:else if $activeGroup === "defaultGroup"}
        <div class="w-full p-2 flex items-center justify-center">
          <h1>No Groups</h1>
        </div>
      {/if}
      <ul class="flex flex-col gap-1">
        {#each Object.entries($groups).filter(([name]) => name
            .toLowerCase()
            .includes(searchTerm.toLowerCase())) as [id, group]}
          {#if $activeGroup === "defaultGroup" && id !== "defaultGroup"}
            <li
              class:border-blue-400={$activeGroup === id}
              class:bg-gray-700={$activeGroup === id}
              class="relative cursor-pointer flex justify-between items-center p-2 hover:bg-gray-700 border border-gray-500 rounded">
              <div class="absolute bottom-0 right-1 text-[.3rem]">
                {id}
              </div>
              <Icon data={folder} class="text-white" />
              <span class="relative flex-grow px-2 text-[.8rem]">
                {group.name}
              </span>
              <span class="flex-grow px-2 text-[.6rem]"
                >{group.objectList.length} Objects</span>
              <!-- svelte-ignore a11y-no-static-element-interactions -->
              <span class="flex items-center">
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div
                  on:click={() => setActiveGroup(id)}
                  class="p-1 rounded hover:bg-gray-600">
                  <Icon data={table} class="text-white mx-2" />
                </div>
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div
                  on:click={() => toggleShow(id)}
                  class="p-1 rounded hover:bg-gray-600">
                  <Icon
                    data={group.show ? eye : eyeSlash}
                    class="text-white mx-2" />
                </div>
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div
                  on:click={() => removeGroup(id)}
                  class="p-1 rounded hover:bg-gray-600">
                  <Icon data={trash} class="text-white mx-2" />
                </div>
              </span>
            </li>
          {/if}
        {/each}
      </ul>
      <div class="relative flex flex-col text-xs gap-3 pt-6">
        {#if $activeGroup !== "defaultGroup"}
          <div class="absolute text-[.4rem] right-0 -top-2">{$activeGroup}</div>
          <div class="flex items-center">
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label style="width: 30%;">Pixel Size:</label>
            <RangeSlider
              showToolTip={false}
              min={1}
              max={50}
              step={0.5}
              bind:value={localPixelSize}
              on:change={updateProperties} />
            <span>{localPixelSize.toFixed(1)}</span>
          </div>
          <div class="flex items-center">
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label style="width: 30%;">Point Color:</label>
            <div class="w-2">
              <input
                type="color"
                bind:value={localPointColor}
                on:change={updateProperties} />
            </div>
          </div>

          <div class="flex items-center">
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label style="width: 30%;">Outline Width:</label>
            <RangeSlider
              showToolTip={false}
              min={0}
              max={10}
              step={0.5}
              bind:value={localOutlineWidth}
              on:change={updateProperties} />
            <span>{localOutlineWidth.toFixed(1)}</span>
          </div>
          <div class="flex items-center">
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label style="width: 30%;">Outline Color:</label>
            <div class="w-2">
              <input
                type="color"
                bind:value={localOutlineColor}
                on:change={updateProperties} />
            </div>
          </div>

          <div class="flex items-center">
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label style="width: 30%;">Path Width:</label>
            <RangeSlider
              showToolTip={false}
              min={1}
              max={20}
              step={0.1}
              bind:value={localPathWidth}
              on:change={updateProperties} />
            <span>{localPathWidth.toFixed(1)}</span>
          </div>
          <div class="flex items-center">
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label style="width: 30%;">Path Color:</label>
            <div class="w-2">
              <input
                type="color"
                bind:value={localPathColor}
                on:change={updateProperties} />
            </div>
          </div>
        {/if}
      </div>
    </div>
    <div
      class="flex-none h-12 border-t border-gray-600 flex justify-center items-center">
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      {#if $activeGroup !== "defaultGroup"}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div
          class="cursor-pointer bg-orange-700 p-1 pl-3 pr-3 rounded flex items-center justify-center"
          on:click={(e) => ($activeGroup = "defaultGroup")}>
          UNSELECT
        </div>
      {/if}
    </div>
  </div>
</div>

<style>
  /* Additional styles if needed */
</style>
