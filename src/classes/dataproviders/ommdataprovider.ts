//@ts-ignore
import { IPFSDataProvider } from "../dataproviders/ipfsdataprovider";
import type { SpaceCatalogDataSourceIntermediateType } from "@/classes/shims";
import { createMetaData } from "./lib/managecatalogmetadata";
import searchTemplate from "@/templates/omm.search.svelte";
import statusTemplate from "@/templates/omm.status.svelte";
import { CatalogEntityMetadata } from "../entitymetadata";
import xxhash from "xxhashjs";
//@ts-ignore
import * as GlobalOrb from "orbpro";
let globalOrb: any = GlobalOrb;
import type { ExtendedDataSource } from "../extendedDataSource";
let { Orb, Color } = globalOrb;
let { SpaceCatalogDataSource, CoverageGroup } = Orb;


//import catalog from "@/data/catalog.csv?raw";
//import satcatJSON from "@/data/satcat.json?raw";
export class OMMDataProvider extends IPFSDataProvider {
    entityDefault: object;
    searchTemplate: any = searchTemplate;
    statusTemplate: any = statusTemplate;
    satcatPath: string;
    ommPath: string;
    results: Array<any> = [];
    static ommDataSource: ExtendedDataSource = new SpaceCatalogDataSource({
        name: "OMMDataProviderSatellites",
        temeToECEF: true,
        entityDefault: {},
    }) as SpaceCatalogDataSourceIntermediateType;
    metadataID: string = "OMMProvider";
    constructor({
        type,
        lastLoad,
        satcatPath,
        ommPath,
        id,
        ensDomain,
        queryParameters = {},
        freeTextField = "q",
        refreshRate = 0,
        preload = false,
        executeSearch,
        entityDefault = {
            point: {

            },
        },
        overrideMetadataTypes = {
            OWNER: "choice",
            LAUNCH_SITE: "choice",
            TYPE: "choice",
            LAUNCH_DATE: "date",
            EPOCH: "date",
            DECAY_DATE: "date",
            OBJECT_TYPE: "choice",
            DATA_SOURCE: "choice"
        }
    }) {
        super({
            type,
            lastLoad,
            id,
            ensDomain,
            queryParameters,
            freeTextField,
            refreshRate,
            preload,
            overrideMetadataTypes
        });
        if (executeSearch) {
            this.executeSearch = executeSearch;
        }
        this.ommPath = ommPath;
        this.satcatPath = satcatPath;
        this.metadataClass = CatalogEntityMetadata;
        this.dataSource = OMMDataProvider.ommDataSource;
        this.dataSource.dataProvider = this;
    }

    syncData: Function = async () => {
        let omm = "", satcat = "";

        let _needsRefresh = !omm.length || !satcat.length;//await this.needsRefresh();
        if (!_needsRefresh) {
            let localData = await this.getLocalData();
            if (localData) {
                omm = localData[this.ommPath];
                satcat = localData[this.satcatPath];
            }
        }
        const urlParams = new URLSearchParams(window.location.search);
        this.ommPath = urlParams.get("catalog") || urlParams.get("omm") || urlParams.get("tle") || this.ommPath;
        this.satcatPath = urlParams.get("satcat") || urlParams.get("rsm") || this.satcatPath;
        let ommFormat = urlParams.get("ommformat") || "csv";
        let satcatFormat = urlParams.get("satcatformat") || "json";

        if (_needsRefresh || !omm) {
            omm = await this.getData(this.ommPath, true, true, "text");
        }

        if (!satcat) {
            satcat = await this.getData(this.satcatPath, true, true, "text");
        }

        const idHashFunction = (_jsonOMM, _satcat) => xxhash.h32(`${this.id}:${_jsonOMM.NORAD_CAT_ID}`, 0xBEEF).toNumber(16)
        await OMMDataProvider.ommDataSource.loadOMM(omm, ommFormat, satcat, satcatFormat, idHashFunction);
        OMMDataProvider.ommDataSource.metadata = createMetaData(OMMDataProvider.ommDataSource);
        OMMDataProvider.ommDataSource.coverageGroup = new CoverageGroup({
            samples: 36,
            sdc: OMMDataProvider.ommDataSource,
            coverageType: 1,
            angle: 90,
            groundCoverageOnly: false,
            color: Color.LIMEGREEN.withAlpha(0.5)
        });
    }
    get metadata() {
        return OMMDataProvider.ommDataSource.metadata;
    }

}