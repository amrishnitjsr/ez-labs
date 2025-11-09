# V Films - Varnan Landing Page

A beautiful React landing page for V Films, built with TypeScript and Vite.

## Project Overview

This is a frontend-only React application showcasing V Films' brand identity and services. 

The design features:

- Elegant mandala pattern background
- Brand logo with custom styling
- Inspirational tagline: "Varnan is where stories find their voice and form"
- Services showcase (Films, Brands, Art)
- Company description and mission statement

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## Installation

```bash
npm install
```

## Running the Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Building for Production

```bash
npm run build
```

## Project Structure

```
ez-labs/
├── public/               # Static assets (logos, images)
├── src/
│   ├── components/       # React components
│   │   ├── HeroSection.tsx
│   │   └── HeroSection.css
│   ├── App.tsx          # Main App component
│   ├── App.css          # App styles
│   ├── index.css        # Global styles
│   └── main.tsx         # Entry point
├── index.html
└── package.json
```

## Required Assets

Please add the following images to the `public/` folder:

1. **mandala-pattern.png** - The decorative mandala background pattern
2. **vfilms-logo.png** - The V Films logo

## Fonts Used

The project uses the following Google Fonts:

- **Dancing Script** - For the tagline (handwritten style)
- **Playfair Display** - For the services section (serif)
- **Lato** - For body text

## Technologies

- React 18
- TypeScript
- Vite
- CSS3

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

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

export default defineConfig([
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
