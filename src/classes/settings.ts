import { ReferenceFrame } from "orbpro";
import { writable } from "svelte/store";
import type { Writable } from "svelte/store";
import type { KeyValueDataStructure } from "./KeyValueDataStructure";

class ClockSettings {
  clockStep: Writable<number> = writable(1);
  shouldAnimate: Writable<boolean> = writable(true);
  multiplier: Writable<number> = writable(1);
}

class CameraSettings {
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

class EntityState {
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
  resolutionScale: Writable<Number> = writable(1);
  useBrowserRecommendedResolution: Writable<boolean> = writable(true);
  CameraSettings: CameraSettings = new CameraSettings();
  ClockSettings: ClockSettings = new ClockSettings();
  EntityState: EntityState = new EntityState();
  showMousePosition: Writable<boolean> = writable(false);
  latLonGrid: Writable<boolean> = writable(false);
  showNonGroupedObjects: Writable<boolean> = writable(true);
  lastLoad: Writable<number> = writable(0);
  showLatLonGrid: Writable<boolean> = writable(false);
  X_GRID: Writable<boolean> = writable(false);
  Y_GRID: Writable<boolean> = writable(false);
  Z_GRID: Writable<boolean> = writable(false);
}
