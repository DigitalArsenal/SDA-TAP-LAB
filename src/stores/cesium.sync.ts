//@ts-nocheck
import { writable, get } from "svelte/store";
import { Viewer, Entity, DataSource } from "orbpro";
import { scenario } from "@/stores/settings.store";
import { debounce, throttle } from "@/utilities/debounce";

const dataSourceEvents = {
  dataSourceAdded: writable<DataSource | null>(null),
  dataSourceMoved: writable<DataSource | null>(null),
  dataSourceRemoved: writable<DataSource | null>(null),
};

let registeredEvents: any = {};
let registeredStoreSubscriptions: any = {};
let isUpdatingFromStore = false;

const initEvents = (viewer: Viewer) => {
  removeEvents();

  // Sync from Cesium to Svelte
  for (let ev in scenario) {
    if (viewer[`${ev}Changed`]) {
      registeredEvents[`${ev}Changed`] = viewer[
        `${ev}Changed`
      ].addEventListener(
        throttle((e: any) => {
          if (!isUpdatingFromStore) {
            scenario[ev].set(e);
          }
        }, 100)
      );
    }
  }

  for (let ev in dataSourceEvents) {
    if (viewer.dataSources[ev]) {
      registeredEvents[ev] = viewer.dataSources[ev].addEventListener(
        throttle((e: any) => {
          if (!isUpdatingFromStore) {
            dataSourceEvents[ev].set(e);
          }
        }, 300)
      );
    }
  }

  // Sync from Svelte to Cesium
  for (let ev in scenario) {
    if (scenario[ev]?.subscribe) {
      registeredStoreSubscriptions[ev] = scenario[ev].subscribe(
        debounce((value) => {
          if (viewer[ev] !== value) {
            isUpdatingFromStore = true;
            viewer[ev] = value;
            isUpdatingFromStore = false;
          }
        }, 1000)
      );
    }
  }
};

const removeEvents = () => {
  for (let x in registeredEvents) {
    registeredEvents[x]();
  }
  registeredEvents = {};
  for (let x in registeredStoreSubscriptions) {
    registeredStoreSubscriptions[x]();
  }
  registeredStoreSubscriptions = {};
};

export { initEvents, removeEvents, dataSourceEvents };