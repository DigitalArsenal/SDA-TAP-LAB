import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  build: {
    assetsInlineLimit: 0, // This ensures all assets are inlined
    minify: "terser",
    terserOptions: {
      // Terser options to prevent stripping of debugger
      compress: {
        drop_debugger: false, // Do not remove debugger statements
      },
    },
    emptyOutDir: false,
    outDir: "docs",
    rollupOptions: {
      onwarn(warning, warn) {
        // Check if the warning is a 'PLUGIN_WARNING' from 'vite:resolve'
        if (
          warning.code === "PLUGIN_WARNING" &&
          warning.plugin === "vite:resolve"
        ) {
          // Check if the warning message is about externalizing modules for browser compatibility
          if (
            warning.message &&
            warning.message.includes(
              "has been externalized for browser compatibility"
            )
          ) {
            return; // This suppresses the specific warning
          }
        }
        // Handle all other warnings as usual
        warn(warning);
      },
      input: {
        app: "index.html",
      },
    },
  },
});
