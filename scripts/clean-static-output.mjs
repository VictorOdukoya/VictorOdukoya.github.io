import { rmSync } from 'node:fs';

// Only the ignored, generated build directory. Prevent deleted pages surviving a rebuild.
rmSync(new URL('../dist/', import.meta.url), { recursive: true, force: true });
