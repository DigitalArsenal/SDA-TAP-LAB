import { writable, get } from "svelte/store";
import type { Writable } from "svelte/store";
import Settings from "@/classes/settings";
import { Scenario } from "@/classes/scenario";
import type { Group } from "@/classes/group";
import { serializeGroups, deserializeGroups } from "./group/serializegroups";

const scenario = new Scenario;
scenario.settings = new Settings;

import lzworker from '@/workers/lzWorker.mjs?worker&inline';
const scenarioKey = "7af359dee11b11ec9dae8f3efcb2fa57";

interface DeserializeDataHandler {
    [key: string]: (input: any) => any;
}

const groups: Writable<Array<Group>> = scenario.groups;

const saveState = async (exportJSON: boolean = false): Promise<string> => {
    let { dataProviderInstances, ...scenarioRest } = scenario;
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

const settings = new Settings();

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
export { scenario, activeComponents, activeComponentProps, goBack, groups, saveState, loadState };