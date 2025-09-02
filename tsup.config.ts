import { defineConfig } from "tsup";
import { sassPlugin } from "esbuild-sass-plugin";
import cssModulesPlugin from "esbuild-css-modules-plugin";

export default defineConfig({
  entry: {
    index: "src/index.ts", // 👈 this ensures dist/index.js instead of dist/src/index.js
  },
  outDir: "dist",
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  clean: true,
  esbuildPlugins: [
    // handles plain SCSS (globals)
    sassPlugin(),
    // handles CSS Modules
    cssModulesPlugin(),
  ],
  loader: {
    ".scss": "css", // for any plain SCSS imports
  },
});
