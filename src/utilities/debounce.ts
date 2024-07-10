export function debounce(func: (...args: any[]) => void, wait: number) {
    let timeout: number | undefined;

    return function (...args: any[]) {
        clearTimeout(timeout);
        timeout = window.setTimeout(() => {
            func(...args);
        }, wait);
    };
}