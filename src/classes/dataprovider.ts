import type { Entity } from "orbpro";

export interface HasEntity extends Object {
    entity: Entity,
    [x: string | number | symbol]: any;
}

export interface DataProvider {
    refresh: number;
    name: string;
}

export interface SatelliteCatalogDataProvider extends DataProvider {
    OMM_URL: string;
    CAT_URL?: string;
}