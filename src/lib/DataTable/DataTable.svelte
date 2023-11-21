<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { Grid } from "ag-grid-community";
  import { groups, activeGroup } from "@/stores/group.store";
  import type { GridOptions, ColDef, GridApi } from "ag-grid-community";
  import "@/../node_modules/ag-grid-community/styles/ag-grid.css";
  import "@/../node_modules/ag-grid-community/styles/ag-theme-balham.css";
  import { scenario } from "@/stores/settings.store";
  import { data, columnDefs, filterAction, rowID } from "@/stores/datatable.store";
  import { get } from "svelte/store";

  const { selectedEntity } = scenario;
  let highlightedRowId: any = null;

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
      return params.data.id === highlightedRowId ? "highlighted-row" : "";
    },
    onGridReady: (event) => {
      event.api.sizeColumnsToFit();
    },
    onFilterChanged: (event) => {
      $groups[$activeGroup].filterObject = event.api.getFilterModel();
      executeFilterAction(event.api);
    },
    onSortChanged: (event) => {},
  };

  let grid: Grid;
  let gridElement: HTMLElement;
  let gridApi: any;

  $: {
    if ($selectedEntity && gridApi && gridOptions?.paginationPageSize) {
      const rowNode = gridApi.getRowNode($selectedEntity.id);
      if (rowNode) {
        // Calculate the page number and scroll to the row
        const pageNumber = Math.floor(
          rowNode.rowIndex / gridOptions.paginationPageSize
        );
        gridApi.paginationGoToPage(pageNumber);
        gridApi.ensureIndexVisible(
          rowNode.rowIndex % gridOptions.paginationPageSize
        );

        // Set the row ID for highlighting
        highlightedRowId = $selectedEntity.id;
        // Refresh the grid to apply the highlight
        gridApi.refreshCells({ force: true });
      }
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
  <div bind:this={gridElement} class="ag-theme-balham-dark h-full w-full" />
  <div
    class="text-white gap-1 absolute bottom-0 l-0 h-6 flex p-[.5px] ml-3 mb-[5px] items-center justify-center"
  >
    {#if filterObject && Object.keys(filterObject).length}
      <button
        style="border-radius:0px"
        class="bg-blue-700 pl-3 pr-3 p-[2px] pb-[3px] border-gray-400 cursor-pointer text-xs flex items-center justify-center"
      >
        Save
      </button>
      <button
        on:click={clearFilter}
        style="border-radius:0px"
        class="bg-gray-700 pl-3 pr-3 p-[2px] pb-[3px] border-gray-400 cursor-pointer text-xs flex items-center justify-center"
      >
        Clear
      </button>
    {/if}
  </div>
</div>

<style>
  :global(.highlighted-row) {
    background-color: yellow; /* Change this to your preferred highlight color */
  }
</style>
