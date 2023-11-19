<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { Grid } from "ag-grid-community";
  import type { GridOptions, ColDef, GridApi } from "ag-grid-community";
  import "@/../node_modules/ag-grid-community/styles/ag-grid.css";
  import "@/../node_modules/ag-grid-community/styles/ag-theme-balham.css";

  import {
    filterModelStore,
    data,
    columnDefs,
    filterAction,
  } from "@/stores/datatable.store";
  import { get } from "svelte/store";

  let gridOptions: GridOptions = {
    columnDefs: $columnDefs,
    rowData: $data,
    pagination: true,
    onGridReady: (event) => {
      event.api.sizeColumnsToFit();
    },
    onFilterChanged: (event) => {
      filterModelStore.set(event.api.getFilterModel());
      executeFilterAction(event.api);
    },
    onSortChanged: (event) => {},
  };

  let grid: Grid;
  let gridElement: HTMLElement;
  let gridApi: any;

  onMount(() => {
    grid = new Grid(gridElement, gridOptions);
    gridApi = gridOptions.api;
  });

  // Reactive statements to update columnDefs and rowData
  $: if (gridApi) {
    gridApi.setColumnDefs($columnDefs);
    gridApi.setRowData($data);

    const storedFilterModel = get(filterModelStore);
    if (storedFilterModel) {
      gridApi.setFilterModel(storedFilterModel);
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
</script>

<div class="h-[30vh]">
  <div bind:this={gridElement} class="ag-theme-balham-dark h-full w-full" />
  <div class="absolute bottom-0 l-0 h-6 ml-2 mb-1 flex items-center justify-center">
   {#if Object.keys($filterModelStore).length}
    <button style="border-radius:0px" class="bg-blue-700 pl-2 pr-2 pb-[.5px] border-gray-400 cursor-pointer text-xs flex items-center justify-center">
      Save
    </button>
    {/if}
  </div>
</div>
