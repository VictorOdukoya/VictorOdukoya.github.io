import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const outputPath = resolve(__dirname, "..", "docs", ".nojekyll");

mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, "GitHub Pages should serve nested _astro assets as static files.\n");