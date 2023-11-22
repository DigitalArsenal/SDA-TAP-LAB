// vite.config.ts
import { defineConfig } from "file:///home/tj/software/SDA-TAP-LAB/node_modules/vite/dist/node/index.js";
import { svelte } from "file:///home/tj/software/SDA-TAP-LAB/node_modules/@sveltejs/vite-plugin-svelte/src/index.js";
import path from "path";
import { fileURLToPath } from "url";
import sveltePreprocess from "file:///home/tj/software/SDA-TAP-LAB/node_modules/svelte-preprocess/dist/index.js";
import "file:///home/tj/software/SDA-TAP-LAB/node_modules/rollup-plugin-obfuscator/dist/rollup-plugin-obfuscator.js";
import "file:///home/tj/software/SDA-TAP-LAB/node_modules/vite-plugin-compression/dist/index.mjs";
import copy from "file:///home/tj/software/SDA-TAP-LAB/node_modules/rollup-plugin-copy/dist/index.commonjs.js";
var __vite_injected_original_import_meta_url = "file:///home/tj/software/SDA-TAP-LAB/vite.config.ts";
var __filename = fileURLToPath(__vite_injected_original_import_meta_url);
var __dirname = path.dirname(__filename);
var app = "index.html";
var banner = `/*!
* \xA9 ${(/* @__PURE__ */ new Date()).getFullYear()} Lyteworx Automation Systems, LLC. and DigitalArsenal.io, Inc. - All Rights Reserved.
*
* No part of this software may be reproduced, distributed,
* or transmitted in any form or by any means, including photocopying, recording, or other
* electronic or mechanical methods, without the prior written permission.
* Reverse engineering, disassembly, or decompilation of this software is strictly prohibited.
* 
*/`;
var vite_config_default = defineConfig({
  plugins: [
    svelte({
      preprocess: sveltePreprocess()
    }),
    copy({
      targets: [
        { src: "./coi-serviceworker.js", dest: "docs" }
      ],
      hook: "writeBundle"
      // Determines at which stage in the build the files should be copied
    })
    // viteCompression({ algorithm: "brotliCompress" })
    // process.env.NODE_ENV === 'production' && Obfuscator({ global: true, options: obfuscatorOptions })
  ],
  build: {
    minify: "terser",
    terserOptions: {
      // Terser options to prevent stripping of debugger
      compress: {
        drop_debugger: false
        // Do not remove debugger statements
      },
      mangle: {
        toplevel: true,
        keep_classnames: true,
        keep_fnames: true
      }
    },
    emptyOutDir: false,
    outDir: "docs",
    rollupOptions: {
      external: ["cesium"],
      input: {
        app
      },
      output: {
        banner
      }
    }
  },
  resolve: {
    alias: {
      orbpro: path.resolve(__dirname, "../OrbPro/Source/Cesium.js"),
      "orbpro_build": path.resolve(__dirname, "../OrbPro/Build"),
      "@": path.resolve(__dirname, "src")
    }
  },
  define: {
    "window.CESIUM_BASE_URL": JSON.stringify("packages/orbpro/Build/Cesium")
  },
  server: {
    host: true
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS90ai9zb2Z0d2FyZS9TREEtVEFQLUxBQlwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvdGovc29mdHdhcmUvU0RBLVRBUC1MQUIvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvdGovc29mdHdhcmUvU0RBLVRBUC1MQUIvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCB7IHN2ZWx0ZSB9IGZyb20gJ0BzdmVsdGVqcy92aXRlLXBsdWdpbi1zdmVsdGUnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgeyBmaWxlVVJMVG9QYXRoIH0gZnJvbSAndXJsJztcbmltcG9ydCBzdmVsdGVQcmVwcm9jZXNzIGZyb20gJ3N2ZWx0ZS1wcmVwcm9jZXNzJ1xuaW1wb3J0IHsgUm9sbHVwUGx1Z2luT2JmdXNjYXRvck9wdGlvbnMgfSBmcm9tICdyb2xsdXAtcGx1Z2luLW9iZnVzY2F0b3InO1xuaW1wb3J0IHZpdGVDb21wcmVzc2lvbiBmcm9tICd2aXRlLXBsdWdpbi1jb21wcmVzc2lvbic7XG5pbXBvcnQgY29weSBmcm9tICdyb2xsdXAtcGx1Z2luLWNvcHknO1xuXG5jb25zdCBfX2ZpbGVuYW1lID0gZmlsZVVSTFRvUGF0aChpbXBvcnQubWV0YS51cmwpO1xuY29uc3QgX19kaXJuYW1lID0gcGF0aC5kaXJuYW1lKF9fZmlsZW5hbWUpO1xuXG5jb25zdCBhcHAgPSBcImluZGV4Lmh0bWxcIjtcbi8vIE9iZnVzY2F0b3Igb3B0aW9uc1xuY29uc3Qgb2JmdXNjYXRvck9wdGlvbnM6IFJvbGx1cFBsdWdpbk9iZnVzY2F0b3JPcHRpb25zW1wib3B0aW9uc1wiXSA9IHtcblxuICBjb21wYWN0OiB0cnVlLFxuICBjb250cm9sRmxvd0ZsYXR0ZW5pbmc6IGZhbHNlLFxuICBkZWFkQ29kZUluamVjdGlvbjogZmFsc2UsXG4gIGRlYnVnUHJvdGVjdGlvbjogZmFsc2UsXG4gIGRlYnVnUHJvdGVjdGlvbkludGVydmFsOiAwLFxuICBkaXNhYmxlQ29uc29sZU91dHB1dDogdHJ1ZSxcbiAgaWRlbnRpZmllck5hbWVzR2VuZXJhdG9yOiAnaGV4YWRlY2ltYWwnLFxuICAvKmxvZzogZmFsc2UsXG4gbnVtYmVyc1RvRXhwcmVzc2lvbnM6IGZhbHNlLFxuIHJlbmFtZUdsb2JhbHM6IGZhbHNlLFxuIHNlbGZEZWZlbmRpbmc6IHRydWUsXG4gc2ltcGxpZnk6IHRydWUsXG4gc3BsaXRTdHJpbmdzOiBmYWxzZSxcbiBzdHJpbmdBcnJheTogdHJ1ZSxcbiBzdHJpbmdBcnJheUNhbGxzVHJhbnNmb3JtOiBmYWxzZSxcbiBzdHJpbmdBcnJheUVuY29kaW5nOiBbXSxcbiBzdHJpbmdBcnJheUluZGV4U2hpZnQ6IHRydWUsXG4gc3RyaW5nQXJyYXlSb3RhdGU6IHRydWUsXG4gc3RyaW5nQXJyYXlTaHVmZmxlOiB0cnVlLFxuIHN0cmluZ0FycmF5V3JhcHBlcnNDb3VudDogMSxcbiBzdHJpbmdBcnJheVdyYXBwZXJzQ2hhaW5lZENhbGxzOiB0cnVlLFxuIHN0cmluZ0FycmF5V3JhcHBlcnNQYXJhbWV0ZXJzTWF4Q291bnQ6IDIsXG4gc3RyaW5nQXJyYXlXcmFwcGVyc1R5cGU6ICd2YXJpYWJsZScsXG4gc3RyaW5nQXJyYXlUaHJlc2hvbGQ6IDAuNzUsXG4gdW5pY29kZUVzY2FwZVNlcXVlbmNlOiBmYWxzZSovXG5cbn07XG5cbi8vIFlvdXIgYmFubmVyIHRleHRcbmNvbnN0IGJhbm5lciA9IGAvKiFcbiogXHUwMEE5ICR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSBMeXRld29yeCBBdXRvbWF0aW9uIFN5c3RlbXMsIExMQy4gYW5kIERpZ2l0YWxBcnNlbmFsLmlvLCBJbmMuIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbipcbiogTm8gcGFydCBvZiB0aGlzIHNvZnR3YXJlIG1heSBiZSByZXByb2R1Y2VkLCBkaXN0cmlidXRlZCxcbiogb3IgdHJhbnNtaXR0ZWQgaW4gYW55IGZvcm0gb3IgYnkgYW55IG1lYW5zLCBpbmNsdWRpbmcgcGhvdG9jb3B5aW5nLCByZWNvcmRpbmcsIG9yIG90aGVyXG4qIGVsZWN0cm9uaWMgb3IgbWVjaGFuaWNhbCBtZXRob2RzLCB3aXRob3V0IHRoZSBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4qIFJldmVyc2UgZW5naW5lZXJpbmcsIGRpc2Fzc2VtYmx5LCBvciBkZWNvbXBpbGF0aW9uIG9mIHRoaXMgc29mdHdhcmUgaXMgc3RyaWN0bHkgcHJvaGliaXRlZC5cbiogXG4qL2A7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbc3ZlbHRlKHtcbiAgICBwcmVwcm9jZXNzOiBzdmVsdGVQcmVwcm9jZXNzKCksXG5cblxuICB9KSxcbiAgY29weSh7XG4gICAgdGFyZ2V0czogW1xuICAgICAgeyBzcmM6ICcuL2NvaS1zZXJ2aWNld29ya2VyLmpzJywgZGVzdDogJ2RvY3MnIH1cbiAgICBdLFxuICAgIGhvb2s6ICd3cml0ZUJ1bmRsZScgLy8gRGV0ZXJtaW5lcyBhdCB3aGljaCBzdGFnZSBpbiB0aGUgYnVpbGQgdGhlIGZpbGVzIHNob3VsZCBiZSBjb3BpZWRcbiAgfSlcbiAgICAvLyB2aXRlQ29tcHJlc3Npb24oeyBhbGdvcml0aG06IFwiYnJvdGxpQ29tcHJlc3NcIiB9KVxuICAgIC8vIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgT2JmdXNjYXRvcih7IGdsb2JhbDogdHJ1ZSwgb3B0aW9uczogb2JmdXNjYXRvck9wdGlvbnMgfSlcbiAgXSxcbiAgYnVpbGQ6IHtcbiAgICBtaW5pZnk6IFwidGVyc2VyXCIsXG4gICAgdGVyc2VyT3B0aW9uczoge1xuICAgICAgLy8gVGVyc2VyIG9wdGlvbnMgdG8gcHJldmVudCBzdHJpcHBpbmcgb2YgZGVidWdnZXJcbiAgICAgIGNvbXByZXNzOiB7XG4gICAgICAgIGRyb3BfZGVidWdnZXI6IGZhbHNlIC8vIERvIG5vdCByZW1vdmUgZGVidWdnZXIgc3RhdGVtZW50c1xuICAgICAgfSxcbiAgICAgIG1hbmdsZToge1xuICAgICAgICB0b3BsZXZlbDogdHJ1ZSxcbiAgICAgICAga2VlcF9jbGFzc25hbWVzOiB0cnVlLFxuICAgICAgICBrZWVwX2ZuYW1lczogdHJ1ZVxuICAgICAgfVxuICAgIH0sXG4gICAgZW1wdHlPdXREaXI6IGZhbHNlLFxuICAgIG91dERpcjogXCJkb2NzXCIsXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgZXh0ZXJuYWw6IFsnY2VzaXVtJ10sXG4gICAgICBpbnB1dDoge1xuICAgICAgICBhcHAsXG4gICAgICB9LFxuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIGJhbm5lclxuICAgICAgfVxuICAgIH0sXG4gIH0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgb3JicHJvOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi4vT3JiUHJvL1NvdXJjZS9DZXNpdW0uanMnKSxcbiAgICAgIFwib3JicHJvX2J1aWxkXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLi9PcmJQcm8vQnVpbGQnKSxcbiAgICAgICdAJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYycpLFxuICAgIH0sXG4gIH0sXG4gIGRlZmluZToge1xuICAgICd3aW5kb3cuQ0VTSVVNX0JBU0VfVVJMJzogSlNPTi5zdHJpbmdpZnkoXCJwYWNrYWdlcy9vcmJwcm8vQnVpbGQvQ2VzaXVtXCIpLFxuICB9LFxuICBzZXJ2ZXI6IHtcbiAgICBob3N0OiB0cnVlLFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXlRLFNBQVMsb0JBQW9CO0FBQ3RTLFNBQVMsY0FBYztBQUN2QixPQUFPLFVBQVU7QUFDakIsU0FBUyxxQkFBcUI7QUFDOUIsT0FBTyxzQkFBc0I7QUFDN0IsT0FBOEM7QUFDOUMsT0FBNEI7QUFDNUIsT0FBTyxVQUFVO0FBUGlKLElBQU0sMkNBQTJDO0FBU25OLElBQU0sYUFBYSxjQUFjLHdDQUFlO0FBQ2hELElBQU0sWUFBWSxLQUFLLFFBQVEsVUFBVTtBQUV6QyxJQUFNLE1BQU07QUFpQ1osSUFBTSxTQUFTO0FBQUEsVUFDVCxvQkFBSSxLQUFLLEdBQUUsWUFBWSxDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFVOUIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQUMsT0FBTztBQUFBLE1BQ2YsWUFBWSxpQkFBaUI7QUFBQSxJQUcvQixDQUFDO0FBQUEsSUFDRCxLQUFLO0FBQUEsTUFDSCxTQUFTO0FBQUEsUUFDUCxFQUFFLEtBQUssMEJBQTBCLE1BQU0sT0FBTztBQUFBLE1BQ2hEO0FBQUEsTUFDQSxNQUFNO0FBQUE7QUFBQSxJQUNSLENBQUM7QUFBQTtBQUFBO0FBQUEsRUFHRDtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLElBQ1IsZUFBZTtBQUFBO0FBQUEsTUFFYixVQUFVO0FBQUEsUUFDUixlQUFlO0FBQUE7QUFBQSxNQUNqQjtBQUFBLE1BQ0EsUUFBUTtBQUFBLFFBQ04sVUFBVTtBQUFBLFFBQ1YsaUJBQWlCO0FBQUEsUUFDakIsYUFBYTtBQUFBLE1BQ2Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxhQUFhO0FBQUEsSUFDYixRQUFRO0FBQUEsSUFDUixlQUFlO0FBQUEsTUFDYixVQUFVLENBQUMsUUFBUTtBQUFBLE1BQ25CLE9BQU87QUFBQSxRQUNMO0FBQUEsTUFDRjtBQUFBLE1BQ0EsUUFBUTtBQUFBLFFBQ047QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLFFBQVEsS0FBSyxRQUFRLFdBQVcsNEJBQTRCO0FBQUEsTUFDNUQsZ0JBQWdCLEtBQUssUUFBUSxXQUFXLGlCQUFpQjtBQUFBLE1BQ3pELEtBQUssS0FBSyxRQUFRLFdBQVcsS0FBSztBQUFBLElBQ3BDO0FBQUEsRUFDRjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sMEJBQTBCLEtBQUssVUFBVSw4QkFBOEI7QUFBQSxFQUN6RTtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
