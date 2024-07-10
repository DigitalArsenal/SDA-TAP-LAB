import LZString from "lz-string";

onmessage = function (e) {
    let method = e.data?.method || "compressToEncodedURIComponent";
    let payload = e.data?.payload;
    if (!payload) throw Error("No payload");
    const result = LZString[method](payload);
    postMessage(result);
}