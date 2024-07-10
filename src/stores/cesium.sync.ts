//@ts-nocheck
import { writable, get } from "svelte/store";
import { Viewer, Entity, DataSource } from "orbpro";
import { scenario } from "@/stores/settings.store";

const dataSourceEvents = {
    dataSourceAdded: writable<DataSource | null>(null),
    dataSourceMoved: writable<DataSource | null>(null),
    dataSourceRemoved: writable<DataSource | null>(null)
};

let registeredEvents: any = {};
let registeredStoreSubscriptions: any = {};
let isUpdatingFromStore = false;

const initEvents = (viewer: Viewer) => {
    removeEvents();

    // Sync from Cesium to Svelte
    for (let ev in scenario) {
        if (viewer[`${ev}Changed`]) {
            registeredEvents[`${ev}Changed`] = viewer[`${ev}Changed`].addEventListener((e: any) => {
                if (!isUpdatingFromStore) {
                    scenario[ev].set(e);
                }
            });
        }
    }

    for (let ev in dataSourceEvents) {
        if (viewer.dataSources[ev]) {
            registeredEvents[ev] = viewer.dataSources[ev].addEventListener((e: any) => {
                if (!isUpdatingFromStore) {
                    dataSourceEvents[ev].set(e);
                }
            });
        }
    }

    // Sync from Svelte to Cesium
    for (let ev in scenario) {
        if (scenario[ev]?.subscribe) {
            registeredStoreSubscriptions[ev] = scenario[ev].subscribe(value => {
                if (viewer[ev] !== value) {
                    isUpdatingFromStore = true;
                    viewer[ev] = value;
                    isUpdatingFromStore = false;
                }
            });
        }
    }

    for (let ev in dataSourceEvents) {
        registeredStoreSubscriptions[ev] = dataSourceEvents[ev].subscribe(value => {
            // Implement logic to update Cesium dataSource based on the new value
            // This might require more complex logic
            // Ensure to set isUpdatingFromStore to true before updating and false after
        });
    }
}

const removeEvents = () => {
    for (let x in registeredEvents) {
        registeredEvents[x]();
    }
    for (let x in registeredStoreSubscriptions) {
        registeredStoreSubscriptions[x]();
    }
}

export { initEvents, removeEvents, dataSourceEvents };
