import { writable } from "svelte/store";
import type { Writable } from "svelte/store";
import type { DataProvider, SatelliteCatalogDataProvider } from "./dataprovider";
import type { Group } from "./group";
import type { KeyValueDataStructure } from "./KeyValueDataStructure";
import Settings from "./settings";
import type { Entity } from "orbpro";

export class Scenario {
    settings: Settings = new Settings();
    trackedEntity: Writable<Entity | null> = writable(null);
    selectedEntity: Writable<Entity | null> = writable(null);
    groups: Writable<Array<Group>> = writable([]);
    satelliteCatalogDataProviders: Writable<Array<
        SatelliteCatalogDataProvider>> = writable([{
            refresh: 0,
            name: "spaceaware",
            OMM_URL: "https://api.spaceaware.io/data/OMM?format=fbs",
            CAT_URL: "https://api.spaceaware.io/data/CAT?format=fbs"
        }]);
}

/**
 *  const ommBuffer = await(await fetch('https://api.spaceaware.io/data/OMM?format=fbs')).arrayBuffer();
    const satcatBuffer = await(await fetch('https://api.spaceaware.io/data/CAT?format=fbs')).arrayBuffer();
    await globalThis.spaceCatalog.loadOMM(ommBuffer, satcatBuffer);
    await viewer.dataSources.add(globalThis.spaceCatalog);
 * 
 */