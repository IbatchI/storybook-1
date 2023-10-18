import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
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
})
