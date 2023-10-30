import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';
import { fileURLToPath } from 'url';
import sveltePreprocess from 'svelte-preprocess'
import Obfuscator, { RollupPluginObfuscatorOptions } from 'rollup-plugin-obfuscator';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = "index.html";
// Obfuscator options
const obfuscatorOptions: RollupPluginObfuscatorOptions["options"] = {
  compact: true,
  controlFlowFlattening: true,
  controlFlowFlatteningThreshold: 1,
  deadCodeInjection: true,
  debugProtection: true,
  debugProtectionInterval: 1000 * 10
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte({
    preprocess: sveltePreprocess(),

  }),
  process.env.NODE_ENV === 'production' && Obfuscator({ global: true, options: obfuscatorOptions })
  ],
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
