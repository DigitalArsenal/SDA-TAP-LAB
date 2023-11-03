//@ts-ignore
import { DataSource, DataSourceCollection, CoverageGroup } from "@/lib/external/orb.mjs";
import type { DataProvider } from "./dataprovider";

export class ExtendedDataSource extends DataSource {
    dataProvider?: DataProvider;
    loadOMM: Function;
    metadata?: Array<any>;
    metadataSources?: Array<any>;
    coverageGroup?: CoverageGroup;
}