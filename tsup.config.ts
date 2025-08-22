import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.tsx"], // entry point
  format: ["cjs", "esm"],   // CommonJS + ESModules
  dts: true,                // generate .d.ts files
  sourcemap: true,
  clean: true,              // clean dist before build
  minify: false,            // keep output readable
  external: ["react", "react-dom"] // don’t bundle React
});
