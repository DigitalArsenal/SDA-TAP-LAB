import { rupee } from "svelte-awesome/icons";
import type { CatalogEntityMetadata } from "@/classes/entitymetadata";
export const createMetaData = (catalog): Array<any> => {
    let catalogMetadata = [];
    let dateColumns = ["EPOCH"];
    for (let e = 0; e < catalog.entities.values.length; e++) {
        let entity = catalog.entities.values[e];

        let { jsonOMM, satcat, dataSource } = entity.properties;
        let _satcat = satcat?.getValue() || {};
        let metadata: CatalogEntityMetadata = {
            ...jsonOMM || {},
            ..._satcat,
            APOGEE: entity.apogee,
            PERIGEE: entity.perigee,
            ECCENTRICITY: entity.eccentricity,
            entity,
            DATA_SOURCE: dataSource?.getValue()
        };
        for (let x in metadata) {

            if (metadata[x] && metadata[x]?.toNumber) {
                metadata[x] = metadata[x].toNumber();
            } else if (metadata[x] instanceof Date || ~dateColumns.indexOf(x.toUpperCase())) {
                if (~dateColumns.indexOf(x.toUpperCase())) {
                    metadata[x] = new Date(metadata[x]).getTime();
                } else {
                    metadata[x] = isNaN(metadata[x]) ? 0 : new Date(metadata[x]).getTime();
                }
            } else {
                metadata[x] = metadata[x]?.toLowerCase ? metadata[x].toLowerCase() : metadata[x];
            }
        }

        //metadata.ALL_PROP = `${JSON.stringify(entity.properties?.jsonOMM)} ${JSON.stringify(entity.properties.satcat?.getValue())}`?.toLowerCase();

        /*
        let _types = [
            "active"
            ,
            "dead"
            ,
            "debris"
            ,
            "rocket body"
            ,
            "uknown"
        ];

        const _active = (m) => {
            return [0, 2, 3, 4, 5].indexOf(
                m.OPS_STATUS_CODE
            ) > -1
        }

        if (metadata.PAYLOAD && _active(metadata)
        ) {
            metadata.OBJECT_TYPE = _types[0];
        } else if (metadata.PAYLOAD && !_active(e)) {
            metadata.OBJECT_TYPE = _types[1];
        } else if (
            !metadata.PAYLOAD &&
            metadata.OBJECT_NAME &&
            metadata.OBJECT_NAME.indexOf(" deb") > -1
        ) {
            metadata.OBJECT_TYPE = _types[2];
        } else if (
            metadata.OBJECT_NAME &&
            (metadata.OBJECT_NAME.indexOf(" r/b") > -1 ||
                metadata.OBJECT_NAME.indexOf(" akm") > -1)
        ) {
            metadata.OBJECT_TYPE = _types[3];
        } else {
            metadata.OBJECT_TYPE = _types[4];
        }
        */
        entity.metadata = metadata;
        catalogMetadata.push(metadata);
    }
    return catalogMetadata;
}