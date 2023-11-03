import { writable } from "svelte/store";
import type { Writable } from "svelte/store";
import type { DataProvider, DataProviderProperties } from "./dataprovider";
import type { Group } from "./group";
import type { KeyValueDataStructure } from "./KeyValueDataStructure";
import type Settings from "./settings";

export class Scenario {
    settings: Settings;
    groups: Writable<Array<Group>> = writable([]);
    dataProviderInstances: Writable<Object> = writable({});
    dataProviders: Writable<Array<
        DataProviderProperties>> = writable([{
            metadata: [],
            lastLoad: 0,
            type: "OMMDataProvider",
            id: "celestrak.eth/catalog.csv",
            ensDomain: "celestrak.eth",
            satcatPath: "satcat.json",
            ommPath: "catalog.csv",
            preload: true,
            refreshRate: 1000 * 60 * 60 * 5,
            //@ts-ignore
            searchDebounce: 100,
            queryParameters:
            {
                q: ""
            }
        }/*
        {
            metadata: [],
            lastLoad: 0,
            type: "OMMDataProvider",
            id: "celestrak.eth/starlink.txt",
            ensDomain: "celestrak.eth",
            satcatPath: "satcat.txt",
            ommPath: "starlink.txt",
            preload: true,
            refreshRate: 1000 * 60 * 60 * 5,
            //@ts-ignore
            searchDebounce: 100,
            queryParameters:
            {
                q: ""
            }
        }*//*
            {
                metadata: [],
                lastLoad: 0,
                type: "OMMDataProvider",
                id: "celestrak.eth/catalog.txt",
                ensDomain: "celestrak.eth",
                satcatPath: "satcat.txt",
                ommPath: "catalog.txt",
                preload: true,
                refreshRate: 1000 * 60 * 60 * 5,
                //@ts-ignore
                searchDebounce: 100,
                queryParameters:
                {
                    q: ""
                },
                freeTextField: "q",
                overrideMetadataTypes: {
                    OWNER: "choice",
                    LAUNCH_SITE: "choice",
                    TYPE: "choice",
                    LAUNCH_DATE: "date",
                    EPOCH: "date",
                    DECAY_DATE: "date",
                    OBJECT_TYPE: "choice"
                },
            }*/]);
    perDataSourceMetadata: Writable<KeyValueDataStructure> = writable({});
}