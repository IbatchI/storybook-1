import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import dts from 'vite-plugin-dts'
import { glob } from 'glob'
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import { extname, relative, resolve } from 'path'
import { fileURLToPath } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts(), libInjectCss()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import "../node_modules/bootstrap/scss/bootstrap";
            @import "./src/styles/_bsOverride.scss";
            @import "./src/styles/_variables.scss";
          `,
      },
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'UI Kit',
      fileName: 'index',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime', 'react-icons'],
      input: Object.fromEntries(
        // https://rollupjs.org/configuration-options/#input
        glob
          .sync('src/**/*.{ts,tsx}', {
            ignore: ['src/stories/*.{tsx,mdx}', 'src/utils/storybookUtils.tsx'],
          })
          .map((file) => {
            return [
              // 1. The name of the entry point
              // lib/nested/foo.js becomes nested/foo
              relative('src', file.slice(0, file.length - extname(file).length)),
              // 2. The absolute path to the entry file
              // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
              fileURLToPath(new URL(file, import.meta.url)),
            ]
          }),
      ),
      output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js',
      },
    },
    emptyOutDir: true,
  },
})
