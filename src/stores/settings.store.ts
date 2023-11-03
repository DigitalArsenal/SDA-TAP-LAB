import { writable, get } from "svelte/store";
import Settings from "@/classes/settings";
const settings = new Settings();
const activeComponents = writable([]);
const activeComponentProps = writable({});
const goBack = () => {
    let aC = get(activeComponents);
    if (aC.length) {
        activeComponents.update((aCArray) => {
            aCArray.pop();
            return aCArray;
        });
    }
}
export { settings as default, activeComponents, activeComponentProps, goBack };