import { writable } from 'svelte/store';
import type { Viewer, Scene } from 'orbpro';
import { SpaceCatalogDataSource } from 'orbpro';

type SpaceCatalogOptions = {
    name: string;
    viewer: Viewer;
    referenceFrame?: number;
    temeToECEF?: boolean;
    entityDefault?: any;
    scene?: Scene;
};

type SpaceCatalogStore = {
    subscribe: any;
    addCatalog: (options: SpaceCatalogOptions, ommUrl: string, satcatUrl: string) => Promise<void>;
    removeCatalog: (viewer: Viewer, name: string) => void;
};

const { subscribe, set, update } = writable<SpaceCatalogDataSource[]>([]);

const addCatalog = async (options: SpaceCatalogOptions, ommUrl: string, satcatUrl: string) => {
    const newCatalog = new SpaceCatalogDataSource(options);
    const ommBuffer = await (await fetch(ommUrl)).arrayBuffer();
    const satcatBuffer = await (await fetch(satcatUrl)).arrayBuffer();
    await newCatalog.loadOMM(ommBuffer, satcatBuffer);
    await options.viewer.dataSources.add(newCatalog);

    update(catalogs => {
        return [...catalogs, newCatalog];
    });
};

const removeCatalog = (viewer: Viewer, name: string) => {
    update(catalogs => {
        const filteredCatalogs = catalogs.filter(catalog => catalog.name !== name);
        viewer.dataSources.remove(viewer.dataSources.getByName(name)[0]);
        return filteredCatalogs;
    });
};

export const spaceCatalogs: SpaceCatalogStore = {
    subscribe,
    addCatalog,
    removeCatalog
};