<script lang="ts">
  import { onMount } from "svelte";
  import { Grid } from "ag-grid-community";
  import { groups, activeGroup } from "@/stores/group.store";
  import type { GridOptions, GridApi } from "ag-grid-community";
  import "@/../node_modules/ag-grid-community/styles/ag-grid.css";
  import "@/../node_modules/ag-grid-community/styles/ag-theme-balham.css";
  import {
    data,
    columnDefs,
    filterAction,
    rowID,
  } from "@/stores/datatable.store";
  import { get } from "svelte/store";
  import { activeEntity } from "@/stores/entity.store";
  import { content } from "@/stores/modal.store";
  import AddGroup from "../SpaceObjects/Toolbar/Modals/AddGroup.svelte";
  import { onDestroy } from "svelte";
  import { scenario } from "@/stores/settings.store";
  import { viewer } from "@/stores/viewer.store";
  const { selectedEntity, trackedEntity } = scenario;

  let highlightedRowId: any = null;
  const processRow = () => {
    if ($activeEntity && gridApi && gridOptions?.paginationPageSize) {
      const rowNode = gridApi.getRowNode($activeEntity.id);
      if (rowNode) {
        highlightedRowId = $activeEntity.id;

        // Calculate the page number and scroll to the row
        const pageNumber = Math.floor(
          rowNode.rowIndex / gridOptions.paginationPageSize
        );
        gridApi.refreshCells({ force: true });
        gridApi.paginationGoToPage(pageNumber);
        gridApi.refreshCells({ force: true });

        gridApi.ensureIndexVisible(rowNode.rowIndex, "middle");
        gridApi.refreshCells({ force: true });
      }
    } else if (!$activeEntity) {
      highlightedRowId = null;
    }
  };

  $: filterObject = $groups[$activeGroup]?.filterObject;

  // Reactive statements to update columnDefs and rowData
  $: if (gridApi) {
    gridApi.setColumnDefs($columnDefs);
    gridApi.setRowData($data);
    currentFilter = {};
    if (filterObject) {
      gridApi.setFilterModel(filterObject);
    }
  }

  let currentFilter: any;
  $: filterIsCurrent =
    JSON.stringify($groups[$activeGroup].filterObject) ===
    JSON.stringify(currentFilter);

  let gridOptions: GridOptions = {
    suppressMenuHide: true,
    columnDefs: $columnDefs,
    rowData: $data,
    pagination: true,
    paginationPageSize: 25,
    suppressMovableColumns: true,
    getRowId: function ({ data }) {
      let id = $rowID(data);
      if (!id || id === "undefined") {
        console.log(id, data, $rowID);
      }
      return id;
    },
    getRowClass: function (params) {
      return $rowID(params.data) === highlightedRowId ? "highlighted-row" : "";
    },
    onGridReady: (event) => {
      // event.api.sizeColumnsToFit();
    },
    onFilterChanged: (event) => {
      $selectedEntity = null;
      $trackedEntity = null;
      $viewer?.camera.flyHome(0);
      currentFilter = event.api.getFilterModel();
      processRow();
      executeFilterAction(event.api);
    },
    onSortChanged: (event) => {},
  };

  let grid: Grid | undefined;
  let gridElement: HTMLElement;
  let gridApi: any;

  $: {
    if ($activeEntity) {
      processRow();
    }
  }

  const gridCreate = () => {
    if (!grid) {
      grid = new Grid(gridElement, gridOptions);
      gridApi = gridOptions.api;
    }
  };

  const gridDestroy = () => {
    if (gridApi) {
      gridApi.destroy();
      grid = undefined;
      gridApi = null;
    }
  };

  onMount(() => {
    gridCreate();
  });

  function executeFilterAction(api: GridApi) {
    const filterActionFunction = get(filterAction);

    if (!filterActionFunction) {
      return;
    }
    // Retrieve filtered row data
    const rowData: any[] = [];
    api.forEachNodeAfterFilter((node) => {
      rowData.push(node.data);
    });
    // Invoke the filter action function with the filtered rows
    filterActionFunction(rowData);
  }

  const clearFilter = () => {
    $activeGroup = "defaultGroup";
    gridApi.setFilterModel({});
  };

  const saveFilter = () => {
    if ($activeGroup !== "defaultGroup") {
      const overwrite = confirm(
        `Overwrite group "${$activeGroup}" definition?`
      );
      if (!overwrite) {
        return;
      }
    }

    $groups[$activeGroup].filterObject = gridApi.getFilterModel();
    if ($activeGroup === "defaultGroup") {
      $content = AddGroup;
    } else {
    }
    const rowData: any[] = [];
    gridApi.forEachNodeAfterFilter((node: any) => {
      rowData.push(node.data);
    });
    $groups[$activeGroup].objectList = rowData;
  };

  onDestroy(gridDestroy);
</script>

<div class="h-full">
  <div
    id="tableElement"
    bind:this={gridElement}
    class="ag-theme-balham-dark h-full w-full" />
  <div
    class="text-white gap-1 absolute bottom-0 l-0 h-6 flex p-[.5px] ml-3 mb-[5px] items-center justify-center">
    {#if currentFilter && Object.keys(currentFilter).length}
      {#if !filterIsCurrent}
        <button
          on:click={saveFilter}
          class="rounded bg-blue-700 pl-3 pr-3 p-[2px] pb-[3px] border-gray-400 cursor-pointer text-xs flex items-center justify-center">
          Save
        </button>
      {/if}
      <button
        on:click={clearFilter}
 
        class="rounded bg-gray-700 pl-3 pr-3 p-[2px] pb-[3px] border-gray-400 cursor-pointer text-xs flex items-center justify-center">
        Clear
      </button>
    {/if}
  </div>
</div>

<style lang="postcss">
  #tableElement {
    overscroll-behavior: initial;
  }
  :global(.highlighted-row) {
    @apply bg-blue-800; /* Change this to your preferred highlight color */
  }
</style>
