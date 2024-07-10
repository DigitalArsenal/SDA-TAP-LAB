import type { DataProvider } from "./dataprovider";

export class QueryFilterRow {
    predicate: string
    comparator: string
    value: string
    joinType: string
}

export class Filter {
    query: Array<QueryFilterRow> = [];
    queryRaw: string;
    dataProvider: DataProvider = null;
    dataProviderID: string = null;
    result: Array<any> = [];
    resultTimestamp: number = 0;
}

