# lh-my-first-storybook

Este paquete me sirve para practicar React Componentes + Storybook + NPM Publish

```
npm install lh-my-first-storybook
```

```
yarn add lh-my-first-storybook
```

```
pnpm install lh-my-first-storybook
```

# Acces to variables

In your vite.config.ts add this code:

```javascript
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
```
