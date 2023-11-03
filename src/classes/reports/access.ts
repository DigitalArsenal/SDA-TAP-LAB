import type Entity from "cesium/Source/DataSources/Entity";
import type { CatalogEntityMetadata } from "../entitymetadata";

export class AccessRow {
    start: Date;
    stop: Date;
}

export interface MetadataEntity extends Entity {
    metadata: CatalogEntityMetadata;
}

export class AccessReport {
    start: Date;
    stop: Date;
    rows: Array<AccessRow> = [];
    from: MetadataEntity;
    to: MetadataEntity;
}