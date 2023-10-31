import path, { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  declaration: true,
  rollup: {
    emitCJS: true
  },
  entries: [
    'src/index',
  ],
  alias: {
    '@': resolve(path.dirname(fileURLToPath(import.meta.url)), 'src'),
    // '@': resolve(__dirname, 'src'),
  },
});