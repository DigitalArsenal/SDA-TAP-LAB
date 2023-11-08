import { writable, get } from "svelte/store";
import { Viewer, Entity, DataSource } from "orbpro";

const cesiumEvents = {
    selectedEntity: writable<Entity | null>(null),
    trackedEntity: writable<Entity | null>(null)
};

const dataSourceEvents = {
    dataSourceAdded: writable<DataSource | null>(null),
    dataSourceMoved: writable<DataSource | null>(null),
    dataSourceRemoved: writable<DataSource | null>(null)
};

const metaEvents = {
    orbitSelect: writable(null)
}

let registeredEvents: any = {};
const initEvents = (viewer: Viewer) => {
    for (let ev in cesiumEvents) {
        if (registeredEvents[`${ev}Changed`]) {
            registeredEvents[`${ev}Changed`]();
        }
        registeredEvents[`${ev}Changed`] =
            //@ts-ignore
            (viewer[`${ev}Changed`] as any).addEventListener((e: any) => {
                //@ts-ignore
                cesiumEvents[ev].set(e);
            });
    }
    for (let ev in dataSourceEvents) {
        if (registeredEvents[ev]) {
            registeredEvents[ev]()
        };
        //@ts-ignore
        viewer.dataSources[ev].addEventListener((e: any) => {
            //@ts-ignore
            dataSourceEvents[ev].set(e);
        })
    }

    /*
    cesiumEvents.trackedEntity.subscribe(tE => {
        if (tE && !tE?.position) {
            let { Cartesian3, BoundingSphere, BoundingSphereState } =
                globalOrb;
            const boundingSphereScratch = new BoundingSphere();
            let { selectedEntity } = viewer;
            const state =
                viewer._dataSourceDisplay.getBoundingSphere(
                    selectedEntity,
                    true,
                    boundingSphereScratch
                );
            if (
                state !== BoundingSphereState.FAILED
            ) {
                tE.position = boundingSphereScratch.center;
                viewer.camera.flyToBoundingSphere(
                    boundingSphereScratch,
                    { duration: 1 }
                );
            }
        }
    });*/
}
const removeEvents = () => {
    for (let x in registeredEvents) {
        registeredEvents[x]();
    }
}
export { cesiumEvents, cesiumEvents as default, metaEvents, initEvents, removeEvents, dataSourceEvents };