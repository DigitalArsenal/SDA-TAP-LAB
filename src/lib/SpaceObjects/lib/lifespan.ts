export default (name: any) => {

    if (name.toString()?.toLowerCase().includes("flock 1c")) {
        return 17;
    }
    return false;
}