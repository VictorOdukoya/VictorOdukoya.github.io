import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://victorodukoya.com",
  base: "/",
  output: "static",
  outDir: "./dist",
  build: {
    assets: "assets",
  },
});
