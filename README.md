<div align="center">
   <h1 align="center" style="font-size:70px;">
        React + MaterialUI + Zustand
    </h1>
    <h1 align="center">
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" width="70" height="70"/> +
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-original.svg" width="70" height="70" /> +
        <img src="https://raw.githubusercontent.com/pmndrs/zustand/main/examples/demo/src/resources/bear.png" width="120" height="70"  />
    </h1>
</div>

# Clonación e Instalacion del Proyecto.

Clonación.

```bash
    git clone https://github.com/AlexNarvaez00/react-zustand-list-albums.git
```

Instalación.

```bash
npm install
```

# Ejecución del servidor de desarrollo.

```bash
npm run dev
```

---

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and
some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)
  uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc)
  uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the
configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
parserOptions: {
 ecmaVersion: 'latest',
 sourceType: 'module',
 project: ['./tsconfig.json', './tsconfig.node.json'],
 tsconfigRootDir: __dirname,
},
```

- Replace `plugin:@typescript-eslint/recommended` to
  `plugin:@typescript-eslint/recommended-type-checked` or
  `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install
  [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and
  add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends`
  list
