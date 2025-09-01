import { defineConfig } from "tsup";
import { sassPlugin } from "esbuild-sass-plugin";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  clean: true,
  minify: false,
  external: ["react", "react-dom"],
  esbuildPlugins: [
    sassPlugin({
      type: "css", // compile SCSS to CSS
      modules: true // enables .module.scss support
    }),
  ],
});
