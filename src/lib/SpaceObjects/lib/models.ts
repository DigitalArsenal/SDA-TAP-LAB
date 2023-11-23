import starlinkModel from "@/assets/models/starlink_spacex_satellite.glb?url";
import issModel from "@/assets/models/ISS_stationary.glb?url";
import onewebModel from "@/assets/models/oneweb.glb?url";

export default (name: any) => {
    const sname = name.toString()?.toLowerCase();
    if (sname.includes("starlink")) {
        return starlinkModel;
    } else if (sname.includes("zarya")) {
        return issModel;
    } else if (sname.includes("oneweb")) {
        return onewebModel;
    }
    return undefined;
}