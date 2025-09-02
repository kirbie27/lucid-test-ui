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
    sassPlugin({
      type: "css", // forces output of css file
    }),
    cssModulesPlugin(), // ensures .module.scss gets transformed to classnames
  ],
  loader: {
    ".scss": "css",
  },
});
