import { defineConfig } from "tsup";
import { sassPlugin } from "esbuild-sass-plugin";
import cssModulesPlugin from "esbuild-css-modules-plugin";

export default defineConfig({
  entry: {
    index: "src/index.ts", // forces dist/index.js instead of dist/src/index.js
  },
  outDir: "dist",
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  clean: true,
  esbuildPlugins: [
    sassPlugin(),
    cssModulesPlugin(),
  ],
});
