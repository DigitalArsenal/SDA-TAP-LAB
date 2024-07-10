import type { Entity } from "orbpro";
import type { CatalogEntityMetadata } from "../entitymetadata";

export class AccessRow {
    start: Date | undefined;
    stop: Date | undefined;
}

export interface MetadataEntity extends Entity {
    position: any;
    metadata: CatalogEntityMetadata;
}

export class AccessReport {
    start: Date | undefined;
    stop: Date | undefined;
    rows: Array<AccessRow> = [];
    from: MetadataEntity | undefined;
    to: MetadataEntity | undefined;
}