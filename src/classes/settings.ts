import { ReferenceFrame } from "orbpro";
import { writable } from "svelte/store";
import type { Writable } from "svelte/store";
import type { KeyValueDataStructure } from "./KeyValueDataStructure";

// Define a TypeScript type for the filter and sort models
type FilterModel = {[key: string]: any}; // Replace 'any' with a more specific type if known
type SortModel = {[key: string]: any}; // Replace 'any' with a more specific type if known

// Define the DataTableState class
export class DataTableState {
    id: Writable<string>;
    filterModel: Writable<FilterModel>;
    sortModel: Writable<SortModel>;
    // Add additional fields as needed

    constructor() {
        this.id = writable('');
        this.filterModel = writable({});
        this.sortModel = writable({});
        // Initialize additional fields here
    }
}

export class ClockSettings {
    clockStep: Writable<number> = writable(1);
    shouldAnimate: Writable<boolean> = writable(true);
    multiplier: Writable<number> = writable(1);

}

export class CameraSettings {
    enableCollisionDetection: Writable<boolean> = writable(true);
    enableLook: Writable<boolean> = writable(true);
    enableRotate: Writable<boolean> = writable(true);
    enableTilt: Writable<boolean> = writable(true);
    enableTranslate: Writable<boolean> = writable(true);
    enableZoom: Writable<boolean> = writable(true);
    enableMatrixMode: Writable<boolean> = writable(false);
    enableReferenceFrameSwapOnAltitude: Writable<boolean> = writable(true);
    referenceFrameSwapAltitude: Writable<number> = writable(484673);

}

export class EntityState {
    orbit: Writable<KeyValueDataStructure> = writable({});
}

export default class Settings {
    referenceFrame: Writable<ReferenceFrame> = writable(ReferenceFrame.FIXED);
    debugFPS: Writable<boolean> = writable(false);
    depthTestAgainstTerrain: Writable<boolean> = writable(false);
    skyAtmosphere: Writable<boolean> = writable(true);
    enableLighting: Writable<boolean> = writable(true);
    highDynamicRange: Writable<boolean> = writable(false);
    fxaa: Writable<boolean> = writable(false);
    CameraSettings: CameraSettings = new CameraSettings;
    ClockSettings: ClockSettings = new ClockSettings;
    EntityState: EntityState = new EntityState;
    showMousePosition: Writable<boolean> = writable(false);
    latLonGrid: Writable<boolean> = writable(false);
    showNonGroupedObjects: Writable<boolean> = writable(true);
    lastLoad: Writable<number> = writable(0);
    showLatLonGrid: Writable<boolean> = writable(false);
    X_GRID: Writable<boolean> = writable(false);
    Y_GRID: Writable<boolean> = writable(false);
    Z_GRID: Writable<boolean> = writable(false);
    dataTableStates: Writable<DataTableState[]> = writable([]);
}
