import { SITT, SITCOLLECTIONT } from "@/classes/standards/SIT/main";

// Extend the SITT class
export class ExtendedSITT extends SITT {
    // New property 'pads'
    pads: any;
}

// Extend the SITCOLLECTIONT class
export class ExtendedSITCOLLECTIONT extends SITCOLLECTIONT {
    // Property that is an array of ExtendedSITT
    RECORDS: ExtendedSITT[];

    constructor() {
        super();
        this.RECORDS = []; // Initialize the array
    }
}