export const safeURL = ["localhost"];
export const isSafe = () => !!~safeURL.indexOf(window.location.hostname);