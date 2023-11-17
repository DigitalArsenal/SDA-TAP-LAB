<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { Grid } from "ag-grid-community";
  import type { GridOptions, ColDef } from "ag-grid-community";
  import "@/../node_modules/ag-grid-community/styles/ag-grid.css";
  import "@/../node_modules/ag-grid-community/styles/ag-theme-balham.css";
  import { viewer } from "@/stores/viewer.store";
  import { filterModelStore, sortModelStore } from "@/stores/datatable.store";

  let data: any = [];

  // Column definitions matching the SATCAT message format
  let columnDefs: ColDef[] = [
    {
      headerName: "Object Name",
      field: "OBJECT_NAME",
      sortable: true,
      filter: true,
    },
    {
      headerName: "Object ID",
      field: "OBJECT_ID",
      sortable: true,
      filter: true,
    },
    {
      headerName: "NORAD Cat ID",
      field: "NORAD_CAT_ID",
      sortable: true,
      filter: true,
    },
    {
      headerName: "Object Type",
      field: "OBJECT_TYPE",
      sortable: true,
      filter: true,
    },
    {
      headerName: "Ops Status Code",
      field: "OPS_STATUS_CODE",
      sortable: true,
      filter: true,
    },
    { headerName: "Owner", field: "OWNER", sortable: true, filter: true },
    /*{
      headerName: "Launch Date",
      field: "LAUNCH_DATE",
      sortable: true,
      filter: true,
    },
    {
      headerName: "Launch Site",
      field: "LAUNCH_SITE",
      sortable: true,
      filter: true,
    },
    {
      headerName: "Decay Date",
      field: "DECAY_DATE",
      sortable: true,
      filter: true,
    },
    { headerName: "Period", field: "PERIOD", sortable: true, filter: true },
    {
      headerName: "Inclination",
      field: "INCLINATION",
      sortable: true,
      filter: true,
    },
    { headerName: "Apogee", field: "APOGEE", sortable: true, filter: true },
    { headerName: "Perigee", field: "PERIGEE", sortable: true, filter: true },
    { headerName: "RCS", field: "RCS", sortable: true, filter: true },
    {
      headerName: "Data Status Code",
      field: "DATA_STATUS_CODE",
      sortable: true,
      filter: true,
    },
    {
      headerName: "Orbit Center",
      field: "ORBIT_CENTER",
      sortable: true,
      filter: true,
    },
    {
      headerName: "Orbit Type",
      field: "ORBIT_TYPE",
      sortable: true,
      filter: true,
    },
    {
      headerName: "Deployment Date",
      field: "DEPLOYMENT_DATE",
      sortable: true,
      filter: true,
    },
    {
      headerName: "Maneuverable",
      field: "MANEUVERABLE",
      sortable: true,
      filter: true,
    },
    { headerName: "Size", field: "SIZE", sortable: true, filter: true },
    { headerName: "Mass", field: "MASS", sortable: true, filter: true },
    {
      headerName: "Mass Type",
      field: "MASS_TYPE",
      sortable: true,
      filter: true,
    },*/
  ];

  let gridOptions: GridOptions = {
    columnDefs,
    rowData: data,
    pagination: true,
    onGridReady: (event) => {
      event.api.sizeColumnsToFit();

      // Apply saved filter and sort models
      if ($filterModelStore) {
        event.api.setFilterModel($filterModelStore);
      }
      if ($sortModelStore) {
        (event.api as any).setSortModel($sortModelStore);
      }
    },
    onFilterChanged: (event) => {
      filterModelStore.set(event.api.getFilterModel());
    },
    onSortChanged: (event) => {
      sortModelStore.set((event.api as any).getSortModel());
    },
  };

  let grid: Grid;
  let gridElement: HTMLElement;
  let gridApi: any;

  const resizeGrid = () => {
    if (gridApi) {
      gridApi.sizeColumnsToFit();
    }
  };

  // Function to reload data
  async function reloadData() {
    try {
      const response = await fetch(
        "https://api.spaceaware.io/data/CAT?format=JSON"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const newData = (await response.json()).RECORDS;
      // Update the grid data
      data = newData; // Assuming the API returns the data in the correct format

      // If you're directly manipulating the grid API:
      gridOptions!.api!.setRowData(newData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  onMount(() => {
    grid = new Grid(gridElement, gridOptions);
    gridApi = gridOptions.api;
    window.addEventListener("resize", resizeGrid);
    reloadData();
  });

  onDestroy(() => {
    window.removeEventListener("resize", resizeGrid);
  });
</script>

<div bind:this={gridElement} class="ag-theme-balham-dark w-full h-[30vh]" />
