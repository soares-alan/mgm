# React + TypeScript + Vite + Tailwind CSS

Este projeto foi configurado com React, TypeScript, Vite e Tailwind CSS, seguindo as melhores práticas de organização de código e estrutura de pastas.

## Estrutura de Pastas

```
src/
  ├── assets/       # Imagens e arquivos estáticos
  ├── components/   # Componentes reutilizáveis
  ├── pages/        # Páginas da aplicação
  ├── styles/       # Estilos globais e utilitários
  ├── App.tsx       # Componente principal da aplicação
  └── main.tsx      # Ponto de entrada da aplicação
```

## Paleta de Cores

As cores são configuradas no tema do Tailwind e podem ser acessadas via classes utilitárias:

- Fundo principal: `bg-background` (#F7F7F7)
- Elementos de destaque/cards: `bg-card` (#FFFFFF)
- Elementos primários (botões, links): `bg-primary`, `text-primary` (#0086c5)
- Texto principal: `text-text` (#222222)
- Texto secundário: `text-text-secondary` (#666666)

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
