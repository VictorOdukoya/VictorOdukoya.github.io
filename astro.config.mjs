import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://victorodukoya.com",
  base: "/",
  integrations: [tailwind()],
  output: "static",
  outDir: "./docs",
  build: {
    assets: "assets",
  },
});
