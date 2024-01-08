import type { Group } from "@/classes/group";
import { groups, activeGroup } from "@/stores/spacecatalog.group.store";
import { activeEntity } from "@/stores/entity.store";
import { scenario } from "@/stores/settings.store";
import { viewer } from "@/stores/viewer.store";
import { get } from "svelte/store";
import { ModelGraphics } from "orbpro";
import {
    DebugModelMatrixPrimitive,
    MakeBillboardLabel,
    NearFarScalar,
} from "orbpro";
import getModel from "@/lib/SpaceObjects/lib/models";
import { forceHideWidget } from "@/stores/selectionwidget.store";
import { initialState } from "@/stores/spacecatalog.group.store";

export const serializeGroups = (groups: Array<Group>) => {

};

export const deserializeGroups = (json: string, groups = []) => {

}

function ensureObjectExists() {
    const $activeGroup = get(activeGroup);
    const $activeEntity = get(activeEntity);

    groups.update((g) => {
        // Check if the group and object exist, if not, initialize them
        if (!g[$activeGroup]) {
            g[$activeGroup] = { ...initialState.defaultGroup };
        }

        if (!g[$activeGroup].objects[$activeEntity.id]) {
            g[$activeGroup].objects[$activeEntity.id] = {
                orbit: false,
                coverage: false,
                label: false,
                referenceFrameDebug: false,
                model: undefined,
            };
        }
        return g;
    });
}

function toggleOrbit() {
    ensureObjectExists();
    const $viewer = (globalThis as any).viewer;
    groups.update((g) => {
        const $activeGroup = get(activeGroup);
        const $activeEntity = get(activeEntity);
        const currentState = !g[$activeGroup].objects[$activeEntity.id].orbit;
        g[$activeGroup].objects[$activeEntity.id].orbit = currentState;

        // Update the actual activeEntity if it exists
        if ($activeEntity) {
            $activeEntity.showOrbit({ show: currentState });
        }

        return g;
    });
    (globalThis as any).viewer!.scene.render();
}

function toggleCoverage() {
    ensureObjectExists();
    (globalThis as any).viewer = get(viewer);
    groups.update((g) => {
        const $activeGroup = get(activeGroup);
        const $activeEntity = get(activeEntity);
        const currentState = !g[$activeGroup].objects[$activeEntity.id].coverage;
        g[$activeGroup].objects[$activeEntity.id].coverage = currentState;

        // Update the actual activeEntity if it exists
        if ($activeEntity) {
            $activeEntity.showCoverage({ show: currentState, viewer: (globalThis as any).viewer });
        }
        return g;
    });
    (globalThis as any).viewer!.scene.render();
}

function toggleLabel() {
    ensureObjectExists();
    const $activeEntity = get(activeEntity);
    (globalThis as any).viewer = get(viewer);

    const pOMM = $activeEntity?.properties?.OMM;
    const pCAT = $activeEntity?.properties?.CAT;

    if (pOMM && pCAT) {
        const OMM = pOMM.getValue();
        const CAT = pCAT.getValue();
        groups.update((g) => {
            const $activeGroup = get(activeGroup);
            const $activeEntity = get(activeEntity);
            const currentState = !g[$activeGroup].objects[$activeEntity.id].label;
            g[$activeGroup].objects[$activeEntity.id].label = currentState;

            // Update the actual activeEntity if it exists
            if ($activeEntity) {
                if (!$activeEntity.billboard) {
                    //@ts-ignore
                    MakeBillboardLabel({
                        entity: $activeEntity,
                        text: CAT.OBJECT_NAME?.toString() || "",
                        fontSize: 26,
                        cornerRadius: 2,
                        scaleByDistance: new NearFarScalar(0, 1, 1000, 0.5),
                    });
                } else {
                    $activeEntity.billboard.show = currentState;
                }
            }
            return g;
        });
        (globalThis as any).viewer!.scene.render();
    }
}

function toggleReferenceFrameDebug() {
    ensureObjectExists();
    const $activeEntity = get(activeEntity);
    const $activeGroup = get(activeGroup);

    (globalThis as any).viewer = get(viewer);
    if ((globalThis as any).viewer && $activeEntity) {
        groups.update((g) => {
            if (!(globalThis as any).viewer) {
                return g;
            }
            const $activeGroup = get(activeGroup);
            const $activeEntity = get(activeEntity);
            const isActive =
                !!g[$activeGroup].objects[$activeEntity.id]?.referenceFrameDebug;
            if (isActive) {
                // Remove the debug primitive from the scene
                if ($activeEntity.properties.debugPrimitive) {
                    const worked = (globalThis as any).viewer.scene.primitives.remove(
                        $activeEntity.properties.debugPrimitive
                    );
                    $activeEntity.properties.debugPrimitive = undefined;
                }
                g[$activeGroup].objects[$activeEntity.id].referenceFrameDebug = false;
            } else {
                // Add the debug primitive to the scene
                const debugPrimitive = new DebugModelMatrixPrimitive({
                    entity: $activeEntity, // primitive to debug
                    length: 30000.0,
                    width: 2.0,
                });

                (globalThis as any).viewer.scene.primitives.add(debugPrimitive);
                // Store the reference in the property bag
                $activeEntity.properties.debugPrimitive = debugPrimitive;
                g[$activeGroup].objects[$activeEntity.id].referenceFrameDebug = true;
            }

            return g;
        });
    }
}


function toggleModel() {
    ensureObjectExists();
    const $activeEntity = get(activeEntity);
    const $activeGroup = get(activeGroup);

    (globalThis as any).viewer = get(viewer);

    const pOMM = $activeEntity?.properties?.OMM;
    const pCAT = $activeEntity?.properties?.CAT;

    if (pOMM && pCAT) {
        const OMM = pOMM.getValue();

        const modelURL = getModel(OMM.OBJECT_NAME);
        if ((globalThis as any).viewer && $activeEntity && modelURL) {
            groups.update((g) => {
                if (!(globalThis as any).viewer) {
                    return g;
                }
                const isActive = !!g[$activeGroup].objects[$activeEntity.id]?.model;
                if (isActive) {
                    forceHideWidget.set(false);
                    $activeEntity.model = undefined;
                    g[$activeGroup].objects[$activeEntity.id].model = undefined;
                } else {
                    scenario.settings.ClockSettings.shouldAnimate.set(false);
                    forceHideWidget.set(true);
                    $activeEntity.model = new ModelGraphics({
                        uri: modelURL,
                        minimumPixelSize: 128,
                        maximumScale: 20000,
                    });
                    //Works in RIC
                    $activeEntity.gltfZForwardYUp = true;

                    /**/
                    g[$activeGroup].objects[$activeEntity.id].model = modelURL;
                }

                return g;
            });
        }
    }
}


export {
    ensureObjectExists,
    toggleOrbit,
    toggleCoverage,
    toggleLabel,
    toggleReferenceFrameDebug,
    toggleModel
};