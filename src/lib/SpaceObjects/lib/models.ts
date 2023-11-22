import starlinkModel from "@/assets/models/starlink_spacex_satellite.glb?url";

export default (name: any) => {
    if (name.toString()?.toLowerCase().includes("starlink")) {
        return starlinkModel;
    }
    return undefined;
}