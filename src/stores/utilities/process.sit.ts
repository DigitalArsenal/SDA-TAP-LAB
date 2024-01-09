import { Viewer, CustomDataSource, EntityCollection, DataSourceDisplay } from "orbpro";
import { Cartesian2, Cartesian3, Color, Entity, HeightReference, HorizontalOrigin, NearFarScalar } from "orbpro";

import type { ExtendedSITCOLLECTIONT, ExtendedSITT } from "@/classes/ISIT";

// Define a color mapping for different site types
const siteTypeColors: { [key: string]: Color } = {
    "0": Color.RED, // Example color for site type 1
    "1": Color.GREEN, // Example color for site type 1
    "2": Color.BLUE, // Example color for site type 2
    // Add more mappings as needed
};
export const processSIT = async (viewer: Viewer, data: ExtendedSITCOLLECTIONT) => {
    // Create a CustomDataSource for SIT
    const sitDataSource = new CustomDataSource("SIT");

    // Suspend events for the CustomDataSource
    sitDataSource.entities.suspendEvents();

    // Helper function to add entities
    const addEntity = (record: ExtendedSITT) => {
        return new Promise<void>((resolve, reject) => {
            let position;
            const siteColor = siteTypeColors[record.SITE_TYPE?.toString()] || Color.WHITE;

            try {
                position = Cartesian3.fromDegrees(record.LONGITUDE, record.LATITUDE);
            } catch (e) {
                console.log(JSON.stringify(record, null, 4));
                //reject(e);
                // return;
            }

            const entity = new Entity({
                show: siteColor !== Color.WHITE,
                id: record.ID?.toString(),
                name: record.NAME?.toString(),
                position: position,
                properties: {
                    SIT: record
                },
                label: {
                    pixelOffset: new Cartesian2(-10, 0),
                    backgroundColor: Color.GRAY,
                    font: "14px",
                    text: record.NAME?.toString(),
                    horizontalOrigin: HorizontalOrigin.RIGHT,
                    scaleByDistance: new NearFarScalar(1.5e2, 1.5, 8.0e6, 0.1)
                },
                point: {
                    pixelSize: 5,
                    color: siteColor,
                    heightReference: HeightReference.CLAMP_TO_GROUND
                }
            });

            sitDataSource.entities.add(entity); // Add the entity to the CustomDataSource
            resolve();
        });
    };

    // Process entities asynchronously
    const records = data.RECORDS;
    const processingPromises = records.map(async (record) => {
        await addEntity(record);
    });

    try {
        await Promise.all(processingPromises);

        // Resume events for the CustomDataSource
        sitDataSource.entities.resumeEvents();
        // Add the CustomDataSource to the viewer
        viewer.dataSources.add(sitDataSource);

        console.log("All entities processed and added to viewer");
    } catch (error) {
        alert("Error processing entities:");
    }
};
