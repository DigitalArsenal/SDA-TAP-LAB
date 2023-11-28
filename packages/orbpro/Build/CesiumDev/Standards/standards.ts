//spacedatastandards.org v23.3.3-0.1.2
import * as flatbuffers from "flatbuffers";
import { Buffer } from "buffer";
export interface KeyValueDataStructure {
    [key: string]: any;
}
export * as CAT from "./CAT/main";
export * as OMM from "./OMM/main";
export * as CDM from "./CDM/main";
export * as OPM from "./OPM/main";
export * as OEM from "./OEM/main";
export * as MPE from "./MPE/main";
export * as UPM from "./UPM/main";
export * as CSM from "./CSM/main";

export const writeFB = (standard: any): Buffer => {
    if (!standard?.pack) {
        console.log(standard);
        new Error("INVALID DATA TO BE PACKED");

    }
    const flatBufferBuilder = new flatbuffers.Builder(1);
    let packed = standard.pack(flatBufferBuilder);
    flatBufferBuilder.finish(packed);
    return Buffer.from(flatBufferBuilder.asUint8Array());
}

export const readFB = (fbs: any, tableName: any, parentClass: KeyValueDataStructure) => {
    let input = new parentClass[`${tableName}COLLECTIONT`];
    parentClass[`${tableName}COLLECTION`][`getRootAs${tableName}COLLECTION`](
        new flatbuffers.ByteBuffer(fbs)).unpackTo(input);
    return input;
}

export const getFileName = (standard: string, CID: string) => `${CID}.${standard?.toLowerCase()}.fbs`;
