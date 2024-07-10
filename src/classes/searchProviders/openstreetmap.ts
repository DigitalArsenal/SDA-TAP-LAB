export interface Geojson {
    type: string;
    coordinates: any[];
}

export interface OpenStreetMapResult {
    place_id: number;
    licence: string;
    osm_type: string;
    osm_id: number;
    boundingbox: string[];
    lat: string;
    lon: string;
    display_name: string;
    place_rank: number;
    category: string;
    type: string;
    importance: number;
    icon: string;
    geojson: Geojson;
}
