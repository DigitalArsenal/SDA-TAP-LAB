export default (name: any) => {
    if (name.toString()?.toLowerCase().includes("starlink")) {
        return "./src/assets/models/starlink_spacex_satellite_4k.glb";
    }
    return undefined;
}