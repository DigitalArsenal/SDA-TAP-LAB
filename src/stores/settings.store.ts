import { writable, get } from "svelte/store";
import type { Writable } from "svelte/store";
import Settings from "@/classes/settings";
import { Scenario } from "@/classes/scenario";
import type { Group } from "@/classes/group";
import { serializeEntity, deserializeEntity } from "./entities/entities";

import { viewer as storeViewer } from "@/stores/viewer.store";
import { initEvents, removeEvents } from "./cesium.sync";
import {
  addMatrixModeScreenSpaceEventHandler,
  removeMatrixModeScreenSpaceEventHandler,
} from "@/behaviors/matrixModeEventHandler";
import MASTER_SIT from "@/../../target-models/dist/SITCOLLECTION.json";

const scenario = new Scenario();
scenario.settings = new Settings();

import lzworker from "@/workers/lzWorker.mjs?worker&inline";
import type { SatelliteCatalogDataProvider } from "@/classes/dataprovider";
import { Cartesian2, Cartesian3, Color, CustomDataSource, Entity, GoogleMaps, HeightReference, HorizontalOrigin, LatLonGrid, NearFarScalar, SpaceCatalogDataSource, createGooglePhotorealistic3DTileset } from "orbpro";
import type { ExtendedSITCOLLECTIONT } from "@/classes/ISIT";
import { SiteType } from "@/classes/standards/SIT/main";

const scenarioKey = "7af359dee11b11ec9dae8f3efcb2fa57";

const SITCOLLECTIONM: ExtendedSITCOLLECTIONT = (MASTER_SIT as any).SITCOLLECTION as ExtendedSITCOLLECTIONT;

const sittDataSource = new CustomDataSource("SIT");

// Define a color mapping for different site types
const siteTypeColors: { [key: string]: Color } = {
  "0": Color.RED, // Example color for site type 1
  "1": Color.GREEN, // Example color for site type 1
  "2": Color.BLUE, // Example color for site type 2
  // Add more mappings as needed
};

SITCOLLECTIONM.RECORDS.forEach((record, i) => {
  let position;
  const siteColor: any = siteTypeColors[record.SITE_TYPE?.toString()] || Color.WHITE; // Default to white if no mapping found

  try {
    position = Cartesian3.fromDegrees(record.LONGITUDE, record.LATITUDE);

  } catch (e) {
    console.log(record);
  }
  const entity = new Entity({
    show: siteColor !== Color.WHITE,
    id: record.ID?.toString(),
    name: record.NAME?.toString(),
    position: position,
    properties: {
      SIT: record
    },
    label: {
      pixelOffset: new Cartesian2(-10, 0),
      backgroundColor: Color.GRAY,
      font: "14px",
      text: record.NAME?.toString(),
      horizontalOrigin: HorizontalOrigin.RIGHT,
      scaleByDistance: new NearFarScalar(1.5e2, 1.5, 8.0e6, 0.1) // Adjust these values as needed
    },
    point: {
      pixelSize: 5,
      color: siteColor,
      heightReference: HeightReference.CLAMP_TO_GROUND,
      //scaleByDistance: new NearFarScalar(1e2, 1.0, 1.5e2, 0.0) // Adjust these values as needed
    }
  });

  sittDataSource.entities.add(entity);
});

// Function to update URL with the compressed state
function updateURLWithState(compressedState: string) {
  const url = new URL(window.location.href);
  url.searchParams.set(scenarioKey, compressedState);
  window.history.pushState({}, "", url.toString());
}

interface DeserializeDataHandler {
  [key: string]: (input: any) => any;
}
interface serializeDataHandler {
  [key: string]: (input: any) => any;
}
let deserializeDataHandlers: DeserializeDataHandler = {
  trackedEntity: deserializeEntity,
  selectedEntity: deserializeEntity,
};
let serializeDataHandlers: serializeDataHandler = {
  trackedEntity: serializeEntity,
  selectedEntity: serializeEntity,
};

export const updatedDataSources: Writable<any> = writable(null);
export const lastUpdateDataSource: Writable<any> = writable(null);

const groups: Writable<Array<Group>> = scenario.groups;

const saveState = async (exportJSON: boolean = false): Promise<string> => {
  let { ...scenarioRest } = scenario;
  let exportScenario = JSON.stringify(scenarioRest, (key, value) => {
    value = value?.subscribe ? get(value) : value;
    if (serializeDataHandlers[key]) {
      value = serializeDataHandlers[key](value);
    }
    return value;
  });

  if (!exportJSON) {
    const lzWorker = new lzworker();
    lzWorker.postMessage({
      payload: exportScenario,
      method: "compressToEncodedURIComponent",
    });
    return new Promise((resolve) => {
      lzWorker.onmessage = (a) => {
        resolve(a.data);
      };
    });
  } else {
    return Promise.resolve(exportScenario);
  }
};

let recurseWrite = (input: any, scenario: any, key?: any) => {
  let inputProp = key ? input[key] : input;
  const scenarioProp = key ? scenario[key] : scenario;
  if (scenarioProp?.subscribe) {
    if (deserializeDataHandlers[key]) {
      inputProp = deserializeDataHandlers[key](inputProp);
    }
    scenarioProp.set(inputProp);
  } else {
    for (let prop in inputProp) {
      recurseWrite(inputProp, scenarioProp, prop);
    }
  }
};

const _loadState = (data: string) => {
  let importScenario = JSON.parse(data, (key, value) => {
    if (
      typeof value === "object" &&
      value?.type === "Buffer" &&
      value?.data?.length
    ) {
      return Buffer.from(value);
    } else {
      return value;
    }
  });
  recurseWrite(importScenario, scenario);
  return 1;
};

const loadState = async (
  state: any,
  isJSON: boolean = false
): Promise<number> => {
  if (!isJSON) {
    const lzWorker = new lzworker();
    lzWorker.postMessage({
      payload: state,
      method: "decompressFromEncodedURIComponent",
    });

    return new Promise((resolve, reject) => {
      lzWorker.onmessage = (a) => {
        try {
          let { data } = a;
          if (typeof data === "string") {
            resolve(_loadState(data));
          }
        } catch (e) {
          console.error(e);
          reject(0);
        }
      };
    });
  } else {
    return Promise.resolve(_loadState(state));
  }
};

export const writeScenarioToURL = async () => {
  let _scenario = await saveState();
  let url = new URL(document.URL);
  let params = new URLSearchParams(url.search);
  params.set(scenarioKey, _scenario);
  let urlxx = `${document.location.host + document.location.pathname
    }?${params.toString()}`;
  return urlxx;
};

export const loadScenarioFromURL = async () => {
  //Load URL
  let url = new URL(document.URL);
  let params = new URLSearchParams(url.search);
  let sc = params.get(scenarioKey);
  if (sc) {
    return loadState(sc).then((a) => { });
  }
};

let subscriptions: any = [];

storeViewer.subscribe(async (viewer) => {
  while (subscriptions.length) {
    let s = subscriptions.pop();
    s();
  }

  if (!viewer) {
    return;
  }

  removeEvents();
  initEvents(viewer);

  let {
    referenceFrame,
    depthTestAgainstTerrain,
    skyAtmosphere,
    enableLighting,
    highDynamicRange,
    CameraSettings,
    showLatLonGrid,
    showLatLonLabels
  } = scenario.settings;

  const { settings, satelliteCatalogDataProviders } = scenario;

  viewer.referenceFrame = get(referenceFrame);
  viewer.cesiumWidget.scene.skyAtmosphere.show = get(skyAtmosphere);
  viewer.scene.screenSpaceCameraController.enableCollisionDetection = true;
  viewer.scene.globe.enableLighting = get(enableLighting);
  viewer.scene.globe.depthTestAgainstTerrain = get(depthTestAgainstTerrain);
  viewer.scene.highDynamicRange = get(highDynamicRange);
  CameraSettings.enableMatrixMode.set(true);

  const saveAndUpdate = async () => {
    const compressedState = await saveState();
    //updateURLWithState(compressedState);
    viewer.scene.render();
  };

  subscriptions.push(
    referenceFrame.subscribe(async (rF: any) => {
      viewer.referenceFrame = rF;
      await saveAndUpdate();
    })
  );

  subscriptions.push(
    skyAtmosphere.subscribe(async (sA: any) => {
      viewer.cesiumWidget.scene.skyAtmosphere.show = sA;
      await saveAndUpdate();
    })
  );

  subscriptions.push(
    enableLighting.subscribe(async (eL: any) => {
      viewer.scene.globe.enableLighting = eL;
      //TODO move this to imagery store
      if ((viewer as any).nightImageryLayer) {
        (viewer as any).nightImageryLayer.show = eL;
      }
      await saveAndUpdate();
    })
  );

  subscriptions.push(
    depthTestAgainstTerrain.subscribe(async (eL: any) => {
      viewer.scene.globe.depthTestAgainstTerrain = eL;
      await saveAndUpdate();
    })
  );

  subscriptions.push(
    highDynamicRange.subscribe(async (hDR: any) => {
      viewer.scene.highDynamicRange = hDR;
      await saveAndUpdate();
    })
  );

  subscriptions.push(
    CameraSettings.enableMatrixMode.subscribe(async (mM) => {
      if (mM) {
        addMatrixModeScreenSpaceEventHandler(viewer);
      } else {
        removeMatrixModeScreenSpaceEventHandler();
      }
      await saveAndUpdate();
    })
  );

  subscriptions.push(
    settings.ClockSettings.shouldAnimate.subscribe(async (a) => {
      if (a) {
        viewer.clock.shouldAnimate = true;
      } else {
        viewer.clock.shouldAnimate = false;
      }
      await saveAndUpdate();
    })
  );

  subscriptions.push(
    settings.ClockSettings.multiplier.subscribe(async (m: number) => {
      viewer.clock.multiplier = m;
      await saveAndUpdate();
    })
  );

  subscriptions.push(
    settings.debugFPS.subscribe(async (d: boolean) => {
      viewer.scene.debugShowFramesPerSecond = d;
      await saveAndUpdate();
    })
  );

  subscriptions.push(
    settings.fxaa.subscribe(async (f: boolean) => {
      //@ts-ignore
      viewer.scene.fxaa = f;
      await saveAndUpdate();
    })
  );

  subscriptions.push(
    settings.resolutionScale.subscribe(async (r: Number) => {
      //@ts-ignore
      viewer.resolutionScale = r;
      await saveAndUpdate();
    })
  );

  subscriptions.push(
    settings.useBrowserRecommendedResolution.subscribe(async (u: boolean) => {
      //@ts-ignore
      viewer.useBrowserRecommendedResolution = u;

      await saveAndUpdate();
    })
  );

  //@ts-ignore
  let tileset: any;
  //@ts-ignore
  GoogleMaps.defaultApiKey = atob("QUl6YVN5RGlzTDdOODMwaUtLTWZ6RllQT1FCeVQteXh5U2FzLTI0");

  subscriptions.push(
    settings.google3DTiles.subscribe(async (u: boolean) => {

      if (u && !tileset) {
        tileset = await createGooglePhotorealistic3DTileset();
      }
      if (!viewer.scene.primitives.contains(tileset) && u) {
        viewer.scene.primitives.add(tileset);
        settings.showLatLonGrid.set(false);
        settings.showLatLonLabels.set(false);
      } else if (!u) {
        viewer.scene.primitives.remove(tileset);
        tileset = undefined;
      }

      await saveAndUpdate();
    })
  );

  subscriptions.push(
    satelliteCatalogDataProviders.subscribe(
      async (dProviders: Array<SatelliteCatalogDataProvider>) => {
        for (const dP of dProviders) {
          if (dP.OMM_URL) {
            let ommBuffer = await (await fetch(dP.OMM_URL)).arrayBuffer();
            let catBuffer = dP.CAT_URL
              ? await (await fetch(dP.CAT_URL)).arrayBuffer()
              : new ArrayBuffer(0);

            let hasDataSource = viewer.dataSources.getByName(
              dP.name
            )[0] as SpaceCatalogDataSource;
            let spaceCatalog: SpaceCatalogDataSource =
              hasDataSource ||
              new SpaceCatalogDataSource({
                ...dP,
                entityDefault:
                {
                  point: {
                    pixelSize: 1,
                    //scaleByDistance: new NearFarScalar(1e1, 4, 2.5e3, 1),
                    color: Color.WHITE.withAlpha(.7)
                  }
                }
              });

            await spaceCatalog.loadOMM(ommBuffer, catBuffer);
            if (!hasDataSource) {
              await viewer.dataSources.add(spaceCatalog);
            }

            //Hack until the remote source is figured out

            let sitDataSource = await viewer.dataSources.add(sittDataSource);

            updatedDataSources.set(new Date());
            lastUpdateDataSource.set(dP.name);
          }
        }
        await saveAndUpdate();
      }
    )
  );

  let latLonGridInstance: LatLonGrid | undefined = undefined;
  subscriptions.push(
    showLatLonGrid.subscribe(async (showLLG: boolean) => {
      if (!latLonGridInstance && showLLG) {
        latLonGridInstance = new LatLonGrid(viewer);
        latLonGridInstance.showLabels = get(showLatLonLabels);
        latLonGridInstance.drawGrid(latLonGridInstance.currentExtent);
      } else if (latLonGridInstance && !showLLG) {
        (latLonGridInstance as any).destroy();
        latLonGridInstance = undefined;
      }
      await saveAndUpdate();
    })
  );
  subscriptions.push(
    showLatLonLabels.subscribe(async (showLLL: boolean) => {
      if (latLonGridInstance) {
        latLonGridInstance.showLabels = showLLL;
        latLonGridInstance.drawGrid(latLonGridInstance.currentExtent);
      }
      await saveAndUpdate();
    })
  );
});

const appVersion = "a6e8f29c-b66a-11ec-8dfe-5b9767cbddd1";

// Step 2: Automatically load state from URL on page load
loadScenarioFromURL();

export {
  appVersion,
  scenario,
  groups,
  saveState,
  loadState,
};
