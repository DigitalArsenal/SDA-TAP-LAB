import type { ColDef } from "ag-grid-community/dist/lib/entities/colDef";
import {
  objectType,
  opsStatusCode,
} from "@/classes/SDS-1-Satellite-Catalog-Message-(CAT)-TypeScript/main";
import { scenario } from "@/stores/settings.store";
let { trackedEntity, selectedEntity } = scenario;
import { viewer } from "@/stores/viewer.store";
import { get } from "svelte/store";
import getID from "./getID";

const cellClickEvent = (event: any) => {
  if ((globalThis as any).viewer) {
    let entity = (globalThis as any).viewer.dataSources
      .getByName("spaceaware")[0]
      ?.entities.getById(getID(event.data));
    if (entity) {
      trackedEntity.set(entity);
      selectedEntity.set(entity);
    }
  }
};

function metersComparator(valueA: any, valueB: any) {
  const formattedValueA = valueA.toFixed(2) / 1000;
  const formattedValueB = valueB.toFixed(2) / 1000;
  return formattedValueA - formattedValueB;
}

const filterParams = {
  debounceMs: 1000 // debounce time in milliseconds
};

export default [
  {
    headerName: "Object Name",
    field: "OBJECT_NAME",
    sortable: true,
    filter: true,
    filterParams,
    pinned: true,
    onCellClicked: cellClickEvent
  },
  {
    headerName: "Object ID",
    field: "OBJECT_ID",
    sortable: true,
    filter: true,
    filterParams,

  },
  {
    headerName: "NORAD Cat ID",
    field: "NORAD_CAT_ID",
    sortable: true,
    filter: true,
    filterParams,
    valueFormatter: ({ value }) => value?.toString().padStart(7, "0"),
  },
  {
    headerName: "Object Type",
    field: "OBJECT_TYPE",
    sortable: true,
    filter: "agTextColumnFilter",
    filterParams: {
      filterOptions: ["contains"], // or other options as needed
      textCustomComparator: (filter: any, value: any, filterText: any) => {
        const formattedValue = objectType[value];
        return formattedValue.toLowerCase().includes(filterText.toLowerCase());
      },
      debounceMs: filterParams.debounceMs
    },
    valueFormatter: ({ value }) => objectType[value],
  },
  {
    headerName: "Ops Status Code",
    field: "OPS_STATUS_CODE",
    sortable: true,
    filter: "agTextColumnFilter",
    filterParams: {
      filterOptions: ["contains", "notContains", "equals"],
      textCustomComparator: (filter: any, value: any, filterText: any) => {
        const formattedValue = opsStatusCode[value].toLowerCase();
        const lowerCaseFilterText = filterText.toLowerCase();

        switch (filter) {
          case "contains":
            return formattedValue.includes(lowerCaseFilterText);
          case "notContains":
            return !formattedValue.includes(lowerCaseFilterText);
          case "equals":
            return formattedValue === lowerCaseFilterText;
          default:
            return false; // or any default behavior you need
        }
      },
      debounceMs: filterParams.debounceMs
    },
    valueFormatter: ({ value }) => opsStatusCode[value],
  },
  { headerName: "Owner", field: "OWNER", sortable: true, filter: true },
  {
    headerName: "Launch Date",
    field: "LAUNCH_DATE",
    sortable: true,
    filter: true,
    filterParams,
  },
  {
    headerName: "EPOCH",
    field: "EPOCH",
    sortable: true,
    filter: true,
    filterParams,
  },
  {
    headerName: "MEAN_MOTION",
    field: "MEAN_MOTION",
    sortable: true,
    filter: true,
    filterParams,
  },
  { headerName: "Period", field: "PERIOD", sortable: true, filter: true },
  {
    headerName: "SEMI-MAJOR AXIS",
    field: "SEMI_MAJOR_AXIS",
    sortable: true,
    filter: true,
    filterParams,
  },
  {
    headerName: "Mean Anomaly",
    field: "MEAN_ANOMALY",
    sortable: true,
    filter: true,
    filterParams,
  },
  {
    headerName: "Solar Rad Area",
    field: "SOLAR_RAD_AREA",
    sortable: true,
    filter: true,
    filterParams,
  },
  {
    headerName: "Solar Rad Coeff",
    field: "SOLAR_RAD_COEFF",
    sortable: true,
    filter: true,
    filterParams,
  },
  {
    headerName: "ECCENTRICITY",
    field: "ECCENTRICITY",
    sortable: true,
    filter: true,
    filterParams,
  },
  {
    headerName: "Inclination",
    field: "INCLINATION",
    sortable: true,
    filter: true,
    filterParams,
  },
  {
    headerName: "Drag Area",
    field: "DRAG_AREA",
    sortable: true,
    filter: true,
    filterParams,
  },
  {
    headerName: "Drag Coeff",
    field: "DRAG_COEFF",
    sortable: true,
    filter: true,
    filterParams,
  },
  {
    headerName: "RAAN",
    field: "RA_OF_ASC_NODE",
    sortable: true,
    filter: true,
    filterParams,
  },
  {
    headerName: "Apogee", field: "APOGEE", sortable: true, filter: true,
    filterParams,
    comparator: metersComparator, valueFormatter: ({ value }) => value.toFixed(5)
  },
  {
    headerName: "Perigee", field: "PERIGEE", sortable: true, filter: true,
    filterParams,
    comparator: metersComparator, valueFormatter: ({ value }) => value.toFixed(5)
  },
  { headerName: "RCS", field: "RCS", sortable: true, filter: true },
  {
    headerName: "Data Status Code",
    field: "DATA_STATUS_CODE",
    sortable: true,
    filter: true,
    filterParams,
  },
  {
    headerName: "Mean Motion Dot",
    field: "MEAN_MOTION_DOT",
    sortable: true,
    filter: true,
    filterParams,
  },
  {
    headerName: "Mean Motion DDot",
    field: "MEAN_MOTION_DDOT",
    sortable: true,
    filter: true,
    filterParams,
  },
  {
    headerName: "BSTAR",
    field: "BSTAR",
    sortable: true,
    filter: true,
    filterParams,
  },
  {
    headerName: "Orbit Center",
    field: "ORBIT_CENTER",
    sortable: true,
    filter: true,
    filterParams,
  },
  {
    headerName: "Orbit Type",
    field: "ORBIT_TYPE",
    sortable: true,
    filter: true,
    filterParams,
  },
  {
    headerName: "Deployment Date",
    field: "DEPLOYMENT_DATE",
    sortable: true,
    filter: true,
    filterParams,
  },
  /*{
    headerName: "Maneuverable",
    field: "MANEUVERABLE",
    sortable: true,
        filter: true, 
        filterParams,
    valueFormatter: (params) => (params.value ? "true" : "false"),
  },*/
  { headerName: "Size", field: "SIZE", sortable: true, filter: true },
  { headerName: "Mass", field: "MASS", sortable: true, filter: true },
  {
    headerName: "Mass Type",
    field: "MASS_TYPE",
    sortable: true,
    filter: true,
    filterParams,
  },
] as ColDef[];
