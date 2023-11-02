<script lang="ts">
  import Icon from "svelte-awesome";
  import { plus, close } from "svelte-awesome/icons";

  import { spaceCatalogs } from "@/stores/spacecatalog.store";

  let selectedType: string | null = null;
  let selectedCatalog: string = "";

  type Catalog = { name: string };

  let spaceCatalogList: Catalog[] = [];
  let groundStationList: Catalog[] = [];

  let showModal: boolean = false;
  let modalContent:
    | "catalog"
    | "group"
    | "spaceObject"
    | "groundStation"
    | null = null;

  spaceCatalogs.subscribe(($spaceCatalogs: Catalog[]) => {
    spaceCatalogList = $spaceCatalogs.map((catalog) => ({
      name: catalog.name,
    }));
  });

  const goBack = () => {
    selectedType = null;
    selectedCatalog = "";
  };

  const toggleModal = () => {
    console.log(selectedCatalog);
    if (!selectedType) {
      modalContent = null;
    } else if (!selectedCatalog) {
      modalContent = selectedType === "spaceCatalog" ? "catalog" : "group";
    } else {
      modalContent =
        selectedType === "spaceCatalog" ? "spaceObject" : "groundStation";
    }
    showModal = !showModal;
  };

  const closeModel = () => {
    showModal = false;
  };
</script>

<div
  class="w-full text-md rounded-lg overflow-hidden bg-white text-gray-700 p-2 h-12 items-center flex justify-between">
  <!-- Left: Back Arrow -->
  {#if selectedType !== null}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div on:click={goBack} class="text-xl cursor-pointer">◄</div>
  {:else}
    <div class="w-6" />
    <!-- Spacer to align items -->
  {/if}

  <!-- Middle: Dropdowns and Labels -->
  <div class="flex flex-1 justify-center items-center gap-1">
    {#if selectedType === null}
      <div class="flex items-center mr-2">SELECT</div>
      <select
        id="dataType"
        bind:value={selectedType}
        class="rounded bg-white text-black border border-gray-400">
        <option value="">--Select Data Type--</option>
        <option value="spaceCatalog">Space Catalog</option>
        <option value="groundStations">Ground Stations</option>
      </select>
    {:else if selectedType === "spaceCatalog"}
      <div class="flex items-center mr-2">CATALOG</div>
      <select
        id="spaceCatalog"
        bind:value={selectedCatalog}
        class="rounded bg-white text-black border border-gray-400">
        <option value="">--Select Catalog--</option>
        {#each spaceCatalogList as catalog}
          <option value={catalog.name}>{catalog.name}</option>
        {/each}
      </select>
    {:else if selectedType === "groundStations"}
      <div class="flex items-center mr-2">GROUND STATION</div>
      <select
        id="groundStations"
        bind:value={selectedCatalog}
        class="rounded bg-white text-black border border-gray-400">
        <option value="">--Select Group--</option>
        {#each groundStationList as station}
          <option value={station.name}>{station.name}</option>
        {/each}
      </select>
    {/if}
  </div>
  {#if selectedType}
    <div
      on:click={toggleModal}
      on:keydown={(e) => {
        if (e.key === "Enter" || e.key === "Space") toggleModal();
      }}
      tabindex="0"
      role="button">
      <Icon scale={1} data={plus} class="mr-2" />
    </div>
  {/if}
  <!-- Modal structure -->
  {#if showModal}
    <div class="fixed bottom-0 left-0 right-0 h-1/2 bg-white p-4">
      <div
      class="absolute top-3 right-3"
        on:click={closeModel}
        tabindex="0"
        role="button"
        on:keydown={(e) => {
          if (e.key === "Enter" || e.key === "Space") toggleModal();
        }}>
        <Icon scale={1} data={close} class="mr-2" />
      </div>
      {#if modalContent === "catalog"}
        <!-- Fields to add new catalog -->
        <div>
          <input placeholder="New Catalog Name" />
          <button>Add Catalog</button>
        </div>
      {:else if modalContent === "group"}
        <!-- Fields to add new group -->
        <div>
          <input placeholder="New Group Name" />
          <button>Add Group</button>
        </div>
      {:else if modalContent === "spaceObject"}
        <!-- Fields to add new space object to the catalog -->
        <div>
          <input placeholder="New Space Object Name" />
          <button>Add Space Object</button>
        </div>
      {:else if modalContent === "groundStation"}
        <!-- Fields to add new ground station to the group -->
        <div>
          <input placeholder="New Ground Station Name" />
          <button>Add Ground Station</button>
        </div>
      {/if}
    </div>
  {/if}
</div>

<style lang="postcss">
  select {
    @apply rounded bg-white text-black border border-gray-400;
  }
</style>
