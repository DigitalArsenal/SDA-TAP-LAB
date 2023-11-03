import type Entity from "cesium/Source/DataSources/Entity";
import type { KeyValueDataStructure } from "./KeyValueDataStructure";
import type { ExtendedDataSource } from "./extendedDataSource";

export interface HasEntity extends Object {
    entity: Entity,
    [x: string | number | symbol]: any;
}

export class DataProviderProperties {
    type?: string;
    id: string;
    url?: string;
    refreshRate?: number = 0; //in milliseconds
    intervalTimer?: any;
    queryParameters: object;
    freeTextField?: string;
    preload?: boolean;
    dataSource?: ExtendedDataSource;
    lastLoad?: number;
    storageKey?: string;
    storageTimestampKey?: string;
    searchDebounce?: number = 1000;
    metadata?: Array<HasEntity> = [];
    syncData?: Function = async (): Promise<any> => { console.log("Not Implemented") };
    metadataClass?: any;
    overrideMetadataTypes?: KeyValueDataStructure = {};
    [x: string | number | symbol]: unknown;
}

export class DataProvider {
    type: string;
    id: string;
    url?: string;
    refreshRate?: number = 0; //in milliseconds
    intervalTimer?: any;
    queryParameters: object;
    freeTextField?: string;
    preload: boolean;
    dataSource: ExtendedDataSource;
    lastLoad: number;
    storageKey?: string;
    storageTimestampKey?: string;
    searchDebounce: number;
    private _metadata?: Array<HasEntity>;
    public get metadata(): Array<HasEntity> {
        return this._metadata;
    }
    public set metadata(value: Array<HasEntity>) {
        this._metadata = value;
    }
    //Required when multiple DataProviders are sharing a DataSource (like OMM), need to create metadata from combined sources
    metadataID?: string;
    syncData: Function = async (): Promise<any> => { console.log("Not Implemented") };
    metadataClass: any;
    overrideMetadataTypes: KeyValueDataStructure = {};
    executeSearch: Function = async function (queryParameters: any = {}) {
        return this.metadata.filter(m => {
            let { entity, ...rest } = m;
            return JSON.stringify(rest).indexOf(queryParameters.q?.toLowerCase()) > -1
        });
    };
    constructor({
        type = "DataProvider",
        id,
        url = null,
        queryParameters = {},
        freeTextField = "q",
        refreshRate = 0,
        preload = false,
        storageKey = "",
        storageTimestampKey = "",
        searchDebounce = 1200,
        overrideMetadataTypes = {}
    }: DataProviderProperties) {
        this.id = id;
        this.url = url;
        this.queryParameters = queryParameters;
        this.freeTextField = freeTextField;
        this.refreshRate = refreshRate;
        this.preload = preload;
        this.storageKey = storageKey || this.id;
        this.storageTimestampKey = storageTimestampKey || `${this.id}:timestamp`;
        this.searchDebounce = searchDebounce;
        this.overrideMetadataTypes = overrideMetadataTypes;
    }
}