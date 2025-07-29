import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import tsconfigPaths from "vite-tsconfig-paths";
import dts from "vite-plugin-dts";
import path from "path";
import VueDevTools from "vite-plugin-vue-devtools";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [
    Vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith("swiper-"),
        },
      },
    }),
    tsconfigPaths(),
    dts(),
    VueDevTools({ componentInspector: false }),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    extensions: [".ts", ".js", ".vue"],
  },

  server: {
    allowedHosts: true,
  },

  assetsInclude: "**/*.+(png|jpg|jpeg|gif|svg|ico|json|docx)",

  build: {
    outDir: "./dist",
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "ComponentLibraryExample",
      fileName: "component-library-example",
    },

    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
    cssCodeSplit: false,
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/scss/mixins.scss" as *;
          @use "@/scss/icons.scss" as *;
        `,
      },
    },
  },
});
