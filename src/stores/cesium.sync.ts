//@ts-nocheck
import { writable, get } from "svelte/store";
import { Viewer, Entity, DataSource } from "orbpro";
import { scenario } from "@/stores/settings.store";
import { debounce } from "@/utilities/debounce";

const dataSourceEvents = {
  dataSourceAdded: writable<DataSource | null>(null),
  dataSourceMoved: writable<DataSource | null>(null),
  dataSourceRemoved: writable<DataSource | null>(null),
};

let registeredEvents: any = {};
let registeredStoreSubscriptions: any = {};
let isUpdatingFromStore = false;

const initEvents = (viewer: Viewer) => {
  /**/
    removeEvents();

    // Sync from Cesium to Svelte
    for (let ev in scenario) {
      console.log(ev, viewer[`${ev}Changed`])
        if (viewer[`${ev}Changed`]) {
            registeredEvents[`${ev}Changed`] = viewer[`${ev}Changed`].addEventListener(debounce((e: any) => {
                if (!isUpdatingFromStore) {
                    scenario[ev].set(e);
                }
            }, 50));
        }
    }

    /*for (let ev in dataSourceEvents) {
        console.log(ev);
        if (viewer.dataSources[ev]) {
            registeredEvents[ev] = viewer.dataSources[ev].addEventListener(debounce((e: any) => {
                if (!isUpdatingFromStore) {
                    dataSourceEvents[ev].set(e);
                }
            }, 300));
        }
    }*/

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
  for (let x in registeredStoreSubscriptions) {
    registeredStoreSubscriptions[x]();
  }
};

export { initEvents, removeEvents, dataSourceEvents };
