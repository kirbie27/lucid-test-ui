import { defineConfig } from "tsup";
import { sassPlugin } from "esbuild-sass-plugin";
import cssModulesPlugin from "esbuild-css-modules-plugin";

export default defineConfig({
  entry: ["src/index.ts"],
  outDir: "dist",
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  clean: true,
  esbuildPlugins: [
    sassPlugin(),        // ✅ handles .scss (global styles)
    cssModulesPlugin()   // ✅ handles .module.scss (scoped styles)
  ],
});
