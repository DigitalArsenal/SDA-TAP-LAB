import type { DataSource } from "@/lib/external/orb.mjs";

export interface SpaceCatalogDataSourceIntermediateType extends DataSource {
    loadOMM: Function;
}