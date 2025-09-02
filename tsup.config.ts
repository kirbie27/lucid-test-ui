// tsup.config.ts
import { defineConfig } from "tsup";
import { sassPlugin } from "esbuild-sass-plugin";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  clean: true,
  esbuildPlugins: [
    sassPlugin({
      type: "css", // emit plain CSS files
    }),
  ],
  loader: {
    ".png": "file",
    ".svg": "file",
  },
});
