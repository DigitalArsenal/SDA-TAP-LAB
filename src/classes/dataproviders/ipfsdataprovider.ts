import { DataProvider, type HasEntity } from "../dataprovider";
import type { KeyValueDataStructure } from "../KeyValueDataStructure";
import localforage from "localforage";
import { steam } from "svelte-awesome/icons";
import type { ExtendedDataSource } from "../extendedDataSource";

const httpIPNSGateways: Array<Function> = [
    (ensDomain: string, path: string) => `https://celestrak.digitalarsenal.io/data/${path}`,
    (ensDomain: string, path: string) => `./${path}`,
    /* (ensDomain: string, path: string) => `https://ipfs.io/ipns/${ensDomain}/${path}`,
     (ensDomain: string, path: string) => `https://cloudflare-ipfs.com/ipns/${ensDomain}/${path}`,
     (ensDomain: string, path: string) => `https://${ensDomain}.limo/${path}`,
     (ensDomain: string, path: string) => `https://${ensDomain}.link/${path}`,*/
    //(ensDomain: string, path: string) => `https://ipfs.eth.aragon.network/ipns/${ensDomain}/${path}`,/* */
];

const httpIPFSGateways: Array<Function> = [
    (hash: string) => `https://ipfs.io/ipfs/${hash}`
];

const minRefresh = 1000 * 60;

export class IPFSDataProvider extends DataProvider {
    ensDomain: string;
    hash: string;
    status: KeyValueDataStructure = {};
    lastLoadPath: KeyValueDataStructure = {};
    data: KeyValueDataStructure = {};
    override dataSource: ExtendedDataSource = null;
    error: null;

    constructor({
        type,
        lastLoad,
        id,
        queryParameters = {},
        freeTextField = "",
        refreshRate = 0,
        preload = false,
        hash = "",
        ensDomain = "",
        overrideMetadataTypes
    }) {
        refreshRate = Math.max(refreshRate, minRefresh);
        super({
            type,
            lastLoad,
            id,
            queryParameters,
            freeTextField,
            refreshRate,
            preload,
            storageKey: id,
            storageTimestampKey: `${id}:timestamp`,
            overrideMetadataTypes
        });
        this.ensDomain = ensDomain;
        this.hash = hash;
    }

    needsRefresh = async () => {
        let sTimestamp = (await localforage.getItem(this.storageTimestampKey) as number);
        return (Date.now() > (sTimestamp + this.refreshRate));
    }

    getData = async (path: string, refresh: Boolean, store: Boolean, type: string = "text") => {
        let toGet;
        if (path.indexOf('http') === 0) {
            toGet = [path];
        } else {
            toGet = this.ensDomain ?
                httpIPNSGateways.map(hG => hG(this.ensDomain, path))
                :
                httpIPFSGateways.map(hG => hG(this.hash));
        }
        let returnValue = (await Promise.any(toGet.map(
            m => fetch(m)
        )).catch(async e => {
            this.error = e;
        }) as Response);
        this.status[path] = returnValue.status;
        this.lastLoadPath[path] = this.lastLoad = Date.now();
        this.data[path] = await returnValue[type]();

        if (refresh && this.refreshRate) {
            this.intervalTimer = setTimeout(() => {
                this.getData(path, refresh, store, type);
            }, this.refreshRate);
        }

        if (store) {
            localforage.setItem(this.storageKey, this.data);
            if (this.status[path] === 200) {
                localforage.setItem(this.storageTimestampKey, Date.now());
            } else {
                console.error(
                    `Path: ${path} for ${this.ensDomain
                    ||
                    this.hash} has failed to load at ${(new Date()).toISOString()}`
                )
            }
        }

        return this.data[path];
    }

    dataValid = () => Object.values(this.status).every(v => v === 200)

    getLocalData = async () => await localforage.getItem(this.storageKey)

    clearLocalData = async () => {
        await localforage.setItem(this.storageTimestampKey, null);
        await localforage.setItem(this.storageKey, null);
    }


}