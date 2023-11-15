<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { Grid } from "ag-grid-community";
  import type { GridOptions, ColDef } from "ag-grid-community";
  import "@/../node_modules/ag-grid-community/styles/ag-grid.css";
  import "@/../node_modules/ag-grid-community/styles/ag-theme-balham.css";

  // Test data
  let data = [
    { id: 1, name: "Alice", age: 30 },
    { id: 2, name: "Bob", age: 25 },
    { id: 3, name: "Charlie", age: 35 },
    { id: 1, name: "Alice", age: 30 },
    { id: 2, name: "Bob", age: 25 },
    { id: 3, name: "Charlie", age: 35 },
    { id: 1, name: "Alice", age: 30 },
    { id: 2, name: "Bob", age: 25 },
    { id: 3, name: "Charlie", age: 35 },
    { id: 1, name: "Alice", age: 30 },
    { id: 2, name: "Bob", age: 25 },
    { id: 3, name: "Charlie", age: 35 },
  ];

  // Column definitions
  let columnDefs: ColDef[] = [
    { headerName: "ID", field: "id" },
    { headerName: "Name", field: "name" },
    { headerName: "Age", field: "age" },
  ];
  let gridOptions: GridOptions = {
    columnDefs,
    rowData: data,
    pagination: true,
    onGridReady: (event) => {
      event.api.sizeColumnsToFit();
    },
  };

  let gridElement: HTMLElement;
  let gridApi: any;

  const resizeGrid = () => {
    if (gridApi) {
      gridApi.sizeColumnsToFit();
    }
  };

  onMount(() => {
    new Grid(gridElement, gridOptions);
    gridApi = gridOptions.api;
    window.addEventListener("resize", resizeGrid);
  });

  onDestroy(() => {
    window.removeEventListener("resize", resizeGrid);
  });
</script>

<div bind:this={gridElement} class="ag-theme-balham-dark w-full h-[300px]" />

