import { Clock } from "orbpro";

export default function syncTwoWay(clock: any, propertyName: any, settingsPath: any, debounceTime: number = 100) {
    let isInternalUpdate = false;
    let debounceTimer: NodeJS.Timeout | null = null;

    const originalPropertyDescriptor: any = Object.getOwnPropertyDescriptor(
        Clock.prototype,
        propertyName
    );

    if (originalPropertyDescriptor) {
        Object.defineProperty(clock, propertyName, {
            get: function () {
                return originalPropertyDescriptor.get.call(this);
            },
            set: function (value) {
                if (!isInternalUpdate) {
                    // Prevent the settingsPath setter from re-triggering this setter
                    isInternalUpdate = true;

                    // Set the clock property using the original property descriptor
                    originalPropertyDescriptor.set.call(this, value);

                    // Set the value on the settings path after debouncing
                    if (debounceTimer) {
                        clearTimeout(debounceTimer);
                    }
                    debounceTimer = setTimeout(() => {
                        console.log(value)
                        settingsPath.set(value);
                        debounceTimer = null;
                    }, debounceTime);

                    // Reset the flag after the update is complete
                    isInternalUpdate = false;
                }
            },
            configurable: true,
        });
    }

    // Listen for changes in the settingsPath and update the clock property
    settingsPath.subscribe((newValue: any) => {
        if (!isInternalUpdate) {
            // Prevent the clock setter from re-triggering the settingsPath setter
            isInternalUpdate = true;

            // Update the clock property directly after debouncing
            if (debounceTimer) {
                clearTimeout(debounceTimer);
            }
            debounceTimer = setTimeout(() => {
                originalPropertyDescriptor.set.call(clock, newValue);
                debounceTimer = null;
            }, debounceTime);

            // Reset the flag after the update is complete
            isInternalUpdate = false;
        }
    });
}