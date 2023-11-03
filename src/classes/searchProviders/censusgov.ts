export interface Benchmark {
    id: string;
    benchmarkName: string;
    benchmarkDescription: string;
    isDefault: boolean;
}

export interface Address {
    address: string;
}

export interface Input {
    benchmark: Benchmark;
    address: Address;
}

export interface Coordinates {
    x: number;
    y: number;
}

export interface TigerLine {
    tigerLineId: string;
    side: string;
}

export interface AddressComponents {
    fromAddress: string;
    toAddress: string;
    preQualifier: string;
    preDirection: string;
    preType: string;
    streetName: string;
    suffixType: string;
    suffixDirection: string;
    suffixQualifier: string;
    city: string;
    state: string;
    zip: string;
}

export interface AddressMatch {
    matchedAddress: string;
    coordinates: Coordinates;
    tigerLine: TigerLine;
    addressComponents: AddressComponents;
}

export interface Result {
    input: Input;
    addressMatches: AddressMatch[];
}

export interface CensusGovResult {
    result: Result;
}
