export const safeURL = ["localhost", "192.168.1.158"];
export const isSafe = () => !!~safeURL.indexOf(window.location.hostname);