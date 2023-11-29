<script lang="ts">
  import { onDestroy } from "svelte";
  import { activeGroup, groups } from "@/stores/group.store";
  import { content, lastcontent } from "@/stores/modal.store";
  import CloseButton from "@/lib/elements/CloseButton.svelte";
  import { Icon } from "svelte-awesome";
  import { folder, trash, eye, eyeSlash, table } from "svelte-awesome/icons";

  let searchTerm = "";

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

  // Sets a group as the active group
  function setActiveGroup(groupName: string) {
    console.log(groupName);
    activeGroup.set(groupName);
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
        class="flex justify-between items-center pl-4 pr-3 pt-2 pb-2 md:pt-2 md:pb-2 border-b border-gray-600">
        <p class="text-white font-[300]">Groups</p>
        <CloseButton onclick={closeModal} />
      </div>
    </div>
    <!-- Modal body -->
    <div class="flex-grow p-1 overflow-y-auto overflow-x-hidden">
      <!-- Search bar -->
      <input
        bind:value={searchTerm}
        type="search"
        class="text-black w-full mb-1 rounded text-xs p-1"
        placeholder="Search groups..." />
      <ul class="flex flex-col gap-1">
        {#each Object.entries($groups).filter(([name]) => name
            .toLowerCase()
            .includes(searchTerm.toLowerCase())) as [name, group]}
          {#if name !== "defaultGroup"}
            <li
              class:border-white={$activeGroup === name}
              class="cursor-pointer flex justify-between items-center p-2 hover:bg-gray-700 border border-gray-500 rounded">
              <Icon data={folder} class="text-white" />
              <span class="flex-grow px-2">{name} - {group.description}</span>
              <!-- svelte-ignore a11y-no-static-element-interactions -->
              <span class="flex items-center">
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div
                  on:click={() => setActiveGroup(name)}
                  class="p-1 rounded hover:bg-gray-600">
                  <Icon data={table} class="text-white mx-2" />
                </div>
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div
                  on:click={() => toggleShow(name)}
                  class="p-1 rounded hover:bg-gray-600">
                  <Icon
                    data={group.show ? eye : eyeSlash}
                    class="text-white mx-2" />
                </div>
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div
                  on:click={() => removeGroup(name)}
                  class="p-1 rounded hover:bg-gray-600">
                  <Icon data={trash} class="text-white mx-2" />
                </div>
              </span>
            </li>
          {/if}
        {/each}
      </ul>
    </div>
  </div>
</div>

<style>
  /* Additional styles if needed */
</style>
