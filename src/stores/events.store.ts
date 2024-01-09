import { writable, type Writable } from 'svelte/store';
export const nodeREDURL = "apollo.sdataplab.com/node-red";
export const messages = createWebSocketStore(nodeREDURL);
import { HYPT } from '@/classes/standards/HYP/HYP';
import { HYPCOLLECTIONT } from '@/classes/standards/HYP/HYPCOLLECTION';
import type { SITT } from '@/classes/standards/LDM/SIT';
const lastQueryTime = localStorage.getItem("lastQueryTime");
const startTime = lastQueryTime
    ? new Date(lastQueryTime).toISOString()
    : new Date(0).toISOString();

fetch(`https://${nodeREDURL}/messagearchive?start=${startTime}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
})
    .then((response) => response.json())
    .then((result) => {
        const storedMessages = JSON.parse(
            localStorage.getItem("messages") || "[]"
        );
        const combinedMessages = [...storedMessages, ...result].slice(-10000);
        localStorage.setItem("messages", JSON.stringify(combinedMessages));
        messages.set(combinedMessages);
        localStorage.setItem("lastQueryTime", new Date().toISOString());
    })
    .catch((error) => console.error("Error:", error));

export function createWebSocketStore(url: string) {
    const { subscribe, set, update } = writable<any[]>([]);
    let ws: WebSocket;
    let attempt = 0;

    const connect = () => {
        ws = new WebSocket(`wss://${url}/ws`);

        ws.onopen = () => {
            console.log("WebSocket connected");
            attempt = 0;
        };

        ws.onmessage = (event) => {
            const newMessage = JSON.parse(event.data);
            console.log(newMessage)
            update(messages => {
                const updatedMessages = [...messages, newMessage].slice(-10000);
                localStorage.setItem('messages', JSON.stringify(updatedMessages));
                return updatedMessages;
            });
        };

        ws.onerror = (error) => {
            console.error("WebSocket error:", error);
        };

        ws.onclose = () => {
            console.log("WebSocket disconnected");
            attempt++;
            const delay = Math.min(1000 * (2 ** attempt), 30000);
            setTimeout(connect, delay);
        };
    };

    connect();

    return {
        set,
        subscribe,
        sendMessage: (message: any) => {
            if (ws && ws.readyState === WebSocket.OPEN) {
                ws.send(message);
            }
        },
        reconnect: () => {
            if (ws) {
                ws.close();
            } else {
                connect();
            }
        }
    };
}

export const getMessageType = (message: any) => {
    // Extract the type based on the key ending with "COLLECTION"
    const messageTypeEntry = Object.entries(message).find(([key, _]) =>
        key.endsWith("COLLECTION")
    );
    return messageTypeEntry ? messageTypeEntry[0].split("COLLECTION")[0] : null;
};

export const activeEvents: Writable<any> = writable({});
export const activeEvent: Writable<HYPT | SITT | any> = writable(new HYPT());