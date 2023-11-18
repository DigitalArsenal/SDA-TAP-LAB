<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { Grid } from "ag-grid-community";
  import type { GridOptions, ColDef } from "ag-grid-community";
  import "@/../node_modules/ag-grid-community/styles/ag-grid.css";
  import "@/../node_modules/ag-grid-community/styles/ag-theme-balham.css";

  import {
    filterModelStore,
    data,
    columnDefs,
  } from "@/stores/datatable.store";

  let gridOptions: GridOptions = {
    columnDefs: $columnDefs,
    rowData: $data,
    pagination: true,
    onGridReady: (event) => {
      event.api.sizeColumnsToFit();
    },
    onFilterChanged: (event) => {
      filterModelStore.set(event.api.getFilterModel());
    },
    onSortChanged: (event) => {},
  };

  let grid: Grid;
  let gridElement: HTMLElement;
  let gridApi: any;

  //window.resizeGrid = resizeGrid;
  onMount(() => {
    grid = new Grid(gridElement, gridOptions);
    gridApi = gridOptions.api;
    //window.addEventListener("resize", resizeGrid);
  });

  onDestroy(() => {
   // window.removeEventListener("resize", resizeGrid);
  });

  // Reactive statements to update columnDefs and rowData
  $: if (gridApi) {
    gridApi.setColumnDefs($columnDefs);
    gridApi.setRowData($data);
   // resizeGrid();
  }
</script>

<div bind:this={gridElement} class="ag-theme-balham-dark w-full h-[30vh]" />
