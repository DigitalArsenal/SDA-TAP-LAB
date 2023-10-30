import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';
const app = "beta.html";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  build: {
    emptyOutDir: false,
    outDir: "docs",
    rollupOptions: {
      external: ['cesium'],
      input: {
        app,
      },
    },
  },
  resolve: {
    alias: {
      orbpro: path.resolve(__dirname, '../OrbPro/Source/Cesium.js'),
      "orbpro_build": path.resolve(__dirname, '../OrbPro/Build'),
    },
  },
  define: {
    'window.CESIUM_BASE_URL': JSON.stringify("packages/orbpro/Build/Cesium"),
  },
  server: {
    host: true,
  },
});
