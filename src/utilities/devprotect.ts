import devtools from "devtools-detect";
import { isSafe } from "@/stores/dev.store";

let intervalId: any;

const prevent = async (event: any) => {
    const safe = isSafe();
    console.log(safe);
    if (!safe) {
        if (event.detail.isOpen) {
            intervalId = setInterval(() => {
                debugger;
            }, 10); // Call debugger every 1 second
        } else {
            clearInterval(intervalId);
        }
    }
}
export const init = async () => {
    await prevent({ detail: devtools });
    window.addEventListener("devtoolschange", prevent);
};