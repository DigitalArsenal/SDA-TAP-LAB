import type { DataSource } from "orbpro";

export interface SpaceCatalogDataSourceIntermediateType extends DataSource {
    loadOMM: Function;
}