# lh-my-first-storybook

Este paquete me sirve para practicar React Componentes + Storybook + NPM Publish

```
npm install lh-my-first-storybook
```

```
yarn add lh-my-first-storybook
```

```
pnpm add lh-my-first-storybook
```

# Acces to variables

In your vite.config.ts add this code:
That it's for import the common variables and the boostrap override variables

```js
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "../node_modules/bootstrap/scss/bootstrap";
          @import '../node_modules/lh-my-first-storybook/dist/styles/_variables.scss';
        `,
      },
    },
  },
```

### We strongly recommend install the following extensions

- [Intelligent scss](https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-scss)
