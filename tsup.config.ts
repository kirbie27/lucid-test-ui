import { defineConfig } from "tsup";
import { sassPlugin } from "esbuild-sass-plugin";
import cssModulesPlugin from "esbuild-css-modules-plugin";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  clean: true,
  esbuildPlugins: [
    sassPlugin(),
    cssModulesPlugin()
  ],
});
