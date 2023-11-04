import type Event from "cesium/Source/Core/Event";
import type { MetadataEntity } from "@/classes/reports/access";
import type { KeyValueDataStructure } from "@/classes/KeyValueDataStructure";
//@ts-ignore
import { PolylineCollection, Material, Color, Cartesian3, Orb } from "orbpro";

class AccessLineGroup {
    id: string;
    polylineCollectionArrays: Array<typeof PolylineCollection>;
    removeListener: Event.RemoveCallback;
    from: Array<MetadataEntity>;
    to: Array<MetadataEntity>;
    constructor(id, from, to) {
        this.id = id;
        this.from = from;
        this.to = to;
        this.polylineCollectionArrays = [];
    }
}


let accessLineGroups: KeyValueDataStructure = {};

//Green Lines!
export const addAccessLines = (viewer, from, to, id = Date.now().toString()): string => {
    let { calculateAccess } = Orb.Analysis;
    if (accessLineGroups[id]) return id;
    accessLineGroups[id] = new AccessLineGroup(id, from, to);
    for (let t = 0; t < to.length; t++) {
        let newPolylineCollection = new PolylineCollection();
        for (let f = 0; f < from.length; f++) {
            newPolylineCollection.add({
                positions: [
                    to[t].position.getValue(viewer.clock.currentTime),
                    from[f].position.getValue(viewer.clock.currentTime),
                ],
                width: 1,
                material: new Material({
                    fabric: {
                        type: 'Color',
                        uniforms: {
                            color: Color.LIMEGREEN
                        }
                    }
                }),
                show: true
            });
        }
        viewer.scene.primitives.add(newPolylineCollection);
        accessLineGroups[id].polylineCollectionArrays.push(newPolylineCollection);
    };

    accessLineGroups[id].removeListener = viewer.clock.onTick.addEventListener((c) => {
        for (let a in accessLineGroups) {
            let { polylineCollectionArrays, from, to } = accessLineGroups[a];
            for (let t = 0; t < to.length; t++) {
                for (let f = 0; f < from.length; f++) {
                    let _visible = calculateAccess(from[f], to[t], c.currentTime);
                    let _polyline = polylineCollectionArrays[t].get(f);
                    if (_visible) {
                        _polyline.show = true;
                        _polyline.positions = [to[t].position.getValue(c.currentTime),
                        from[f].position.getValue(c.currentTime)];
                    } else {
                        _polyline.show = false;
                    }
                }
            }
        }

    });
    viewer.scene.render();
    return id;
}

export const removeAccessLines = (viewer, id) => {
    if (!id) {
        for (let x in accessLineGroups) {
            let aLG = accessLineGroups[x];
            aLG.removeListener();
            aLG.polylineCollectionArrays.forEach(pCA => {
                viewer.scene.primitives.remove(pCA);
            });
            delete accessLineGroups[x];
        }
    } else {
        let aLG = accessLineGroups[id];
        if (!aLG) return;
        aLG.removeListener();
        aLG.polylineCollectionArrays.forEach(pCA => {
            viewer.scene.primitives.remove(pCA);
        });
        delete accessLineGroups[id];
    }
    viewer.scene.render();

}