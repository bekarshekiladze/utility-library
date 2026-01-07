<<<<<<< HEAD
import path from 'node:path';
=======
>>>>>>> 94d67c0 (wip: implement partial application (untyped))
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
  },
<<<<<<< HEAD
  resolve: {
    alias: {
      '@lib': path.resolve(__dirname, 'src/index.ts'),
    },
  },
=======
>>>>>>> 94d67c0 (wip: implement partial application (untyped))
});
