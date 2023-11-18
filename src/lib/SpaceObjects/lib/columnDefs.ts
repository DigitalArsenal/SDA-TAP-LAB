import type { ColDef } from "ag-grid-community/dist/lib/entities/colDef";
import { objectType, opsStatusCode } from "@/classes/SDS-1-Satellite-Catalog-Message-(CAT)-TypeScript/main";

export default [
  {
    headerName: "Object Name",
    field: "OBJECT_NAME",
    sortable: true,
    filter: true,
    pinned: true,
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
    valueFormatter: ({ value }) => objectType[value],
  },
  {
    headerName: "Ops Status Code",
    field: "OPS_STATUS_CODE",
    sortable: true,
    filter: true,
    valueFormatter: ({ value }) => opsStatusCode[value],
  },
  { headerName: "Owner", field: "OWNER", sortable: true, filter: true },
  {
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
  /*{
    headerName: "Decay Date",
    field: "DECAY_DATE",
    sortable: true,
    filter: true,
  },*/
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
  /*{
    headerName: "Maneuverable",
    field: "MANEUVERABLE",
    sortable: true,
    filter: true,
    valueFormatter: (params) => (params.value ? "true" : "false"),
  },*/
  { headerName: "Size", field: "SIZE", sortable: true, filter: true },
  { headerName: "Mass", field: "MASS", sortable: true, filter: true },
  {
    headerName: "Mass Type",
    field: "MASS_TYPE",
    sortable: true,
    filter: true,
  },
] as ColDef[];
