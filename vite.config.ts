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
  controlFlowFlattening: false,
  deadCodeInjection: false,
  debugProtection: false,
  debugProtectionInterval: 0,
  disableConsoleOutput: true,
  identifierNamesGenerator: 'hexadecimal',
  /*log: false,
 numbersToExpressions: false,
 renameGlobals: false,
 selfDefending: true,
 simplify: true,
 splitStrings: false,
 stringArray: true,
 stringArrayCallsTransform: false,
 stringArrayEncoding: [],
 stringArrayIndexShift: true,
 stringArrayRotate: true,
 stringArrayShuffle: true,
 stringArrayWrappersCount: 1,
 stringArrayWrappersChainedCalls: true,
 stringArrayWrappersParametersMaxCount: 2,
 stringArrayWrappersType: 'variable',
 stringArrayThreshold: 0.75,
 unicodeEscapeSequence: false*/

};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte({
    preprocess: sveltePreprocess(),

  }),
    // process.env.NODE_ENV === 'production' && Obfuscator({ global: true, options: obfuscatorOptions })
  ],
  build: {
    minify: "terser",
    terserOptions: {
      // Terser options to prevent stripping of debugger
      compress: {
        drop_debugger: false // Do not remove debugger statements
      }
    },
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
      '@': path.resolve(__dirname, 'src'),
    },
  },
  define: {
    'window.CESIUM_BASE_URL': JSON.stringify("packages/orbpro/Build/Cesium"),
  },
  server: {
    host: true,
  },
});
