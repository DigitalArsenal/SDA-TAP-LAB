import starlinkModel from "@/assets/models/ISS_stationary.glb?url";
import issModel from "@/assets/models/ISS_stationary.glb?url";

export default (name: any) => {
    if (name.toString()?.toLowerCase().includes("starlink")) {
        return starlinkModel;
    } else if (name.toString()?.toLowerCase().includes("zarya")) {
        return issModel;
    }
    return undefined;
}