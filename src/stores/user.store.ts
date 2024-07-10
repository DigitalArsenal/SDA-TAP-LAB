
import { get, writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import type { UserCredentials } from '@/classes/user';

export const IP: Writable<string> = writable("");
export const LocalUserKey: Writable<string> = writable("9a768006-bc0a-4a68-8b0d-426daf865d47");
export const LocalUserKeySaveError: Writable<string> = writable("");
export const LocalUserKeyRestoreError: Writable<string> = writable("");
export const UDLBasicAuth: Writable<UserCredentials> = writable({ username: "", password: "" });
export const UDLLoggedIn: Writable<boolean> = writable(false);

UDLBasicAuth.subscribe((value) => {
    saveCredentialsToLocalStorage(value);
    UDLLoggedIn.set(value.username !== "" && value.password !== "")
});

export function updateUDLBasicAuth(credentials: UserCredentials) {
    UDLBasicAuth.set(credentials);
}

async function gsencrypt(plaintext: string, password: string) {
    try {
        const pwUtf8 = new TextEncoder().encode(password);
        const pwHash = await crypto.subtle.digest('SHA-256', pwUtf8);
        const iv = crypto.getRandomValues(new Uint8Array(12));
        const alg = { name: 'AES-GCM', iv: iv };
        const key = await crypto.subtle.importKey('raw', pwHash, alg, false, ['encrypt']);
        const ptUint8 = new TextEncoder().encode(plaintext);
        const ctBuffer = await crypto.subtle.encrypt(alg, key, ptUint8);
        const ctBase64 = btoa(String.fromCharCode(...new Uint8Array(ctBuffer)));
        const ivHex = Array.from(iv).map(b => ('00' + b.toString(16)).slice(-2)).join('');
        return ivHex + ctBase64;
    } catch (e) {
        console.error('Encryption failed:', e);
        throw e;
    }
}

async function gsdecrypt(ciphertext: string, password: string) {
    try {
        const pwUtf8 = new TextEncoder().encode(password);
        const pwHash = await crypto.subtle.digest('SHA-256', pwUtf8);
        const iv = new Uint8Array(ciphertext?.slice(0, 24)?.match(/.{2}/g)?.map(byte => parseInt(byte, 16)) as any);
        const alg = { name: 'AES-GCM', iv: iv };
        const key = await crypto.subtle.importKey('raw', pwHash, alg, false, ['decrypt']);
        const ctBase64 = ciphertext.slice(24);
        const ctBuffer = Uint8Array.from(atob(ctBase64), c => c.charCodeAt(0));
        const plainBuffer = await crypto.subtle.decrypt(alg, key, ctBuffer);
        return new TextDecoder().decode(plainBuffer);
    } catch (e) {
        console.error('Decryption failed:', e);
        throw e;
    }
}

async function loadCredentialsFromLocalStorage(): Promise<UserCredentials> {
    const storedCredentials = localStorage.getItem('UDLBasicAuth');
    if (storedCredentials) {
        try {
            // Decrypt the stored credentials
            const decryptedCredentials = await gsdecrypt(storedCredentials, get(LocalUserKey));
            return JSON.parse(decryptedCredentials);
        } catch (e) {
            LocalUserKeyRestoreError.set("Error decrypting credentials from localStorage: " + e);
        }
    }
    return { username: "", password: "" };
}

async function saveCredentialsToLocalStorage(credentials: UserCredentials) {
    try {
        // Encrypt the credentials before saving
        const encryptedCredentials = await gsencrypt(JSON.stringify(credentials), get(LocalUserKey));
        localStorage.setItem('UDLBasicAuth', encryptedCredentials);
    } catch (e) {
        LocalUserKeySaveError.set('Error encrypting and saving credentials to localStorage: ' + e);
    }
}

loadCredentialsFromLocalStorage().then((storedCredentials: UserCredentials) => {
    UDLBasicAuth.set(storedCredentials);
})