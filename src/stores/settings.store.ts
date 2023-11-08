import { writable, get } from "svelte/store";
import type { Writable } from "svelte/store";
import Settings from "@/classes/settings";
import { Scenario } from "@/classes/scenario";
import type { Group } from "@/classes/group";
import { serializeGroups, deserializeGroups } from "./group/serializegroups";
import { viewer as storeViewer } from "@/stores/viewer.store";
import {
    addMatrixModeScreenSpaceEventHandler,
    removeMatrixModeScreenSpaceEventHandler
} from "@/behaviors/matrixModeEventHandler";
const scenario = new Scenario;
scenario.settings = new Settings;

import lzworker from '@/workers/lzWorker.mjs?worker&inline';
import type { DataProvider, SatelliteCatalogDataProvider } from "@/classes/dataprovider";
import { SpaceCatalogDataSource } from "orbpro";
const scenarioKey = "7af359dee11b11ec9dae8f3efcb2fa57";

interface DeserializeDataHandler {
    [key: string]: (input: any) => any;
}

const groups: Writable<Array<Group>> = scenario.groups;

const saveState = async (exportJSON: boolean = false): Promise<string> => {
    let { ...scenarioRest } = scenario;
    let exportScenario = JSON.stringify(scenarioRest, (key, value) => {

        value = value?.subscribe ? get(value) : value;
        if (key === "groups") {
            value = serializeGroups(value);
        }
        return value;
    });

    if (!exportJSON) {
        const lzWorker = new lzworker();
        lzWorker.postMessage({ payload: exportScenario, method: "compressToEncodedURIComponent" });
        return new Promise(resolve => {
            lzWorker.onmessage = (a) => {
                resolve(a.data);
            }
        })
    } else {
        return Promise.resolve(exportScenario)
    }
};

let deserializeDataHandlers: DeserializeDataHandler = { groups: deserializeGroups }

let recurseWrite = (input: any, scenario: any, key?: any) => {
    let inputProp = key ? input[key] : input;
    const scenarioProp = key ? scenario[key] : scenario;
    if (scenarioProp?.subscribe) {
        if (deserializeDataHandlers[key]) {
            inputProp = deserializeDataHandlers[key](inputProp)
        }
        scenarioProp.set(inputProp);
    } else {
        for (let prop in inputProp) {
            recurseWrite(inputProp, scenarioProp, prop);
        }
    }
}

const _loadState = (data: string) => {
    let importScenario = JSON.parse(data, (key, value) => {
        if (typeof value === "object" &&
            value?.type === "Buffer" && value?.data?.length) {
            return Buffer.from(value);
        } else {
            return value;
        }
    });
    console.log(importScenario);
    recurseWrite(importScenario, scenario);
    return 1;
}

const loadState = async (state: any, isJSON: boolean = false): Promise<number> => {
    if (!isJSON) {
        const lzWorker = new lzworker();
        lzWorker.postMessage({ payload: state, method: "decompressFromEncodedURIComponent" });

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
            }
        })
    } else {
        return Promise.resolve(_loadState(state));
    }

}

export const writeScenarioToURL = async () => {
    let _scenario = await saveState();
    let url = new URL(document.URL);
    let params = new URLSearchParams(url.search);
    params.set(
        scenarioKey,
        _scenario
    );
    let urlxx = `${document.location.host +
        document.location.pathname
        }?${params.toString()}`;
    return urlxx;
}
export const loadScenarioFromURL = async () => {
    //Load URL
    let url = new URL(document.URL);
    let params = new URLSearchParams(url.search);
    let sc = params.get(scenarioKey);
    if (sc) {
        return loadState(sc).then((a) => {
        });
    }

}

//@ts-ignore
window.saveState = saveState;
//@ts-ignore
window.loadState = loadState;

const activeComponents = writable([]);

const activeComponentProps = writable({});

const goBack = () => {
    let aC = get(activeComponents);
    if (aC.length) {
        activeComponents.update((aCArray) => {
            aCArray.pop();
            return aCArray;
        });
    }
}

let subscriptions: any = [];

storeViewer.subscribe((viewer) => {

    while (subscriptions.length) {
        let s = subscriptions.pop();
        s();
    }

    if (!viewer) {
        return;
    }

    let {
        referenceFrame,
        depthTestAgainstTerrain,
        skyAtmosphere,
        enableLighting,
        highDynamicRange,
        CameraSettings,
    } = scenario.settings;

    const { settings, satelliteCatalogDataProviders } = scenario;

    viewer.referenceFrame = get(referenceFrame);
    viewer.cesiumWidget.scene.skyAtmosphere.show = get(skyAtmosphere);
    viewer.scene.screenSpaceCameraController.enableCollisionDetection = true;
    viewer.scene.globe.enableLighting = get(enableLighting);
    viewer.scene.globe.depthTestAgainstTerrain = get(depthTestAgainstTerrain);
    viewer.scene.highDynamicRange = get(highDynamicRange);
    CameraSettings.enableMatrixMode.set(true);

    subscriptions.push(referenceFrame.subscribe((rF: any) => {
        viewer.referenceFrame = rF;
        viewer.scene.render();
    }));

    subscriptions.push(skyAtmosphere.subscribe((sA: any) => {
        viewer.cesiumWidget.scene.skyAtmosphere.show = sA;
        viewer.scene.render();
    }));

    subscriptions.push(enableLighting.subscribe((eL: any) => {
        viewer.scene.globe.enableLighting = eL;
        viewer.scene.render();
    }));

    subscriptions.push(depthTestAgainstTerrain.subscribe((eL: any) => {
        viewer.scene.globe.depthTestAgainstTerrain = eL;
        viewer.scene.render();
    }));

    subscriptions.push(highDynamicRange.subscribe((hDR: any) => {
        viewer.scene.highDynamicRange = hDR;
        viewer.scene.render();
    }));

    subscriptions.push(CameraSettings.enableMatrixMode.subscribe(mM => {
        if (mM) {
            addMatrixModeScreenSpaceEventHandler(viewer);
        } else {
            removeMatrixModeScreenSpaceEventHandler();
        }
    }));

    subscriptions.push(settings.ClockSettings.shouldAnimate.subscribe(a => {
        if (a) {
            viewer.clock.shouldAnimate = true;
        } else {
            viewer.clock.shouldAnimate = false;
        }
        viewer.scene.render();
    }));

    subscriptions.push(settings.ClockSettings.multiplier.subscribe((m: number) => {
        viewer.clock.multiplier = m;
    }));

    subscriptions.push(settings.debugFPS.subscribe((d: boolean) => {
        viewer.scene.debugShowFramesPerSecond = d;
    }));

    subscriptions.push(settings.fxaa.subscribe((f: boolean) => {
        //@ts-ignore
        viewer.scene.fxaa = f;
        viewer.scene.render();
    }));

    subscriptions.push(satelliteCatalogDataProviders.subscribe((dProviders: Array<SatelliteCatalogDataProvider>) => {
        dProviders.forEach(async (dP) => {
            if (dP.OMM_URL) {
                let ommBuffer = new ArrayBuffer(0), catBuffer = new ArrayBuffer(0);
                if (dP.OMM_URL) {
                    ommBuffer = await (await fetch(dP.OMM_URL)).arrayBuffer();
                }
                if (dP.CAT_URL) {
                    catBuffer = await (await fetch(dP.CAT_URL)).arrayBuffer();
                }
                let hasDataSource = viewer.dataSources.getByName(dP.name)[0] as SpaceCatalogDataSource;
                let spaceCatalog: SpaceCatalogDataSource = hasDataSource || new SpaceCatalogDataSource({ ...dP, scene: viewer.scene });

                await spaceCatalog.loadOMM(ommBuffer, catBuffer);

                if (!hasDataSource) {
                    await viewer.dataSources.add(spaceCatalog);
                }
            }
        })

    }));
});


export { scenario, activeComponents, activeComponentProps, goBack, groups, saveState, loadState };