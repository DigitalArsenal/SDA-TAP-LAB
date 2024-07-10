// src/services/dataService.ts
import type { SpaceCatalogDataSource, Entity, Viewer } from 'orbpro';

export const loadData = async (viewer: Viewer, dataSourceName: string) => {
    const dataSource: SpaceCatalogDataSource | any =
        viewer.dataSources.getByName(dataSourceName)[0] as SpaceCatalogDataSource;
    return dataSource.entities.values.map((e: Entity) => {
        const OMM = e.properties?.OMM.getValue() || {};
        const CAT = e.properties?.CAT.getValue() || {};
        return { ...OMM, ...CAT };
    });
};