import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts(), cssInjectedByJsPlugin()],
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
      name: 'Carousel',
      fileName: 'react-carousel',
    },
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: 'React',
        },
      },
    },
  },
})
