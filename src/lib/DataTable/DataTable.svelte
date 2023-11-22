<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { Grid } from "ag-grid-community";
  import { groups, activeGroup } from "@/stores/group.store";
  import type { GridOptions, ColDef, GridApi } from "ag-grid-community";
  import "@/../node_modules/ag-grid-community/styles/ag-grid.css";
  import "@/../node_modules/ag-grid-community/styles/ag-theme-balham.css";
  import { scenario } from "@/stores/settings.store";
  import {
    data,
    columnDefs,
    filterAction,
    rowID,
  } from "@/stores/datatable.store";
  import { get } from "svelte/store";

  const { selectedEntity } = scenario;
  let highlightedRowId: any = null;
  const processRow = () => {
    if ($selectedEntity && gridApi && gridOptions?.paginationPageSize) {
      const rowNode = gridApi.getRowNode($selectedEntity.id);
      if (rowNode) {
        highlightedRowId = $selectedEntity.id;

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
    } else if (!$selectedEntity) {
      highlightedRowId = null;
    }
  };
  $: filterObject = $groups[$activeGroup].filterObject;
  let gridOptions: GridOptions = {
    suppressMenuHide: true,
    columnDefs: $columnDefs,
    rowData: $data,
    pagination: true,
    paginationPageSize: 25,
    suppressMovableColumns: true,
    getRowId: function ({ data }) {
      return $rowID(data);
    },
    getRowClass: function (params) {
      return $rowID(params.data) === highlightedRowId ? "highlighted-row" : "";
    },
    onGridReady: (event) => {
      event.api.sizeColumnsToFit();
    },
    onFilterChanged: (event) => {
      $groups[$activeGroup].filterObject = event.api.getFilterModel();
      executeFilterAction(event.api);
      processRow();
    },
    onSortChanged: (event) => {},
  };

  let grid: Grid;
  let gridElement: HTMLElement;
  let gridApi: any;

  $: {
    if ($selectedEntity) {
      processRow();
    }
  }

  onMount(() => {
    if (!grid) {
      grid = new Grid(gridElement, gridOptions);
      gridApi = gridOptions.api;
    }
  });

  // Reactive statements to update columnDefs and rowData
  $: if (gridApi) {
    gridApi.setColumnDefs($columnDefs);
    gridApi.setRowData($data);

    if (filterObject) {
      gridApi.setFilterModel(filterObject);
    }
  }

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
    $groups[$activeGroup].filterObject = {};
    gridApi.setFilterModel(filterObject);
  };
</script>

<div class="h-full">
  <div
    id="tableElement"
    bind:this={gridElement}
    class="ag-theme-balham-dark h-full w-full" />
  <div
    class="text-white gap-1 absolute bottom-0 l-0 h-6 flex p-[.5px] ml-3 mb-[5px] items-center justify-center">
    {#if filterObject && Object.keys(filterObject).length}
      <button
        style="border-radius:0px"
        class="bg-blue-700 pl-3 pr-3 p-[2px] pb-[3px] border-gray-400 cursor-pointer text-xs flex items-center justify-center">
        Save
      </button>
      <button
        on:click={clearFilter}
        style="border-radius:0px"
        class="bg-gray-700 pl-3 pr-3 p-[2px] pb-[3px] border-gray-400 cursor-pointer text-xs flex items-center justify-center">
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
