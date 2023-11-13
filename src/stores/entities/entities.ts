import type { Entity } from "orbpro";

export const serializeEntity = (entity: Entity) => {
    return entity?.id;
};

export const deserializeEntity = (entityID: string) => {
    return entityID;
}
