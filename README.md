# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

# React + TypeScript + Redux Demo

This project demonstrates a modern React application using TypeScript, Redux Toolkit, and Vite.

## Features

- 🔄 State Management with Redux Toolkit
- 📝 Prompt Management System
- 🎯 Type-safe Redux implementation
- ⚡ Vite for fast development
- 🔍 TypeScript for better code quality

## Redux Implementation Guide

### Store Setup
The Redux store is configured in `src/store/index.ts`:
```typescript
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import promptReducer from './slices/promptSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    prompt: promptReducer,
  },
});
```

### Redux Slices
We use Redux Toolkit's `createSlice` for efficient Redux development:

1. **Prompt Slice** (`src/store/slices/promptSlice.ts`)
   - Manages prompt-related state
   - Features: Add, Delete, and Update prompts
   - Type-safe actions and reducers

2. **Counter Slice** (`src/store/slices/counterSlice.ts`)
   - Basic counter functionality
   - Demonstrates simple Redux state management

### Using Redux in Components

Example using the Prompt Manager:
```typescript
// Using Redux hooks
const dispatch = useDispatch();
const { currentPrompt, prompts } = useSelector((state: RootState) => state.prompt);

// Dispatching actions
dispatch(setCurrentPrompt('New prompt'));
dispatch(addPrompt());
dispatch(deletePrompt(id));
```

## Redux Learning Resources

### Official Documentation
1. [Redux Toolkit Quick Start](https://redux-toolkit.js.org/introduction/quick-start)
2. [Redux Fundamentals](https://redux.js.org/tutorials/fundamentals/part-1-overview)
3. [Redux Style Guide](https://redux.js.org/style-guide/style-guide)

### Best Practices
- Use Redux Toolkit's `createSlice` for reducers
- Implement type safety with TypeScript
- Follow the Redux three principles:
  1. Single source of truth
  2. State is read-only
  3. Changes are made with pure functions

### TypeScript Integration
- Define RootState and AppDispatch types
- Use typed hooks for better type inference
- Define interfaces for all state shapes

## Project Structure

```
src/
  ├── store/              # Redux store configuration
  │   ├── index.ts       # Store setup and type definitions
  │   └── slices/        # Redux slices
  │       ├── promptSlice.ts
  │       └── counterSlice.ts
  │
  ├── components/        # React components
  │   └── PromptManager  # Example component using Redux
  │
  └── App.tsx           # Root component
```

## Development

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Key Concepts Demonstrated

1. **Redux Toolkit Features**
   - CreateSlice API
   - Immer-powered mutations
   - Automatic action creators

2. **TypeScript Integration**
   - Type-safe actions
   - State interface definitions
   - Typed selectors

3. **Modern React Patterns**
   - Functional components
   - Redux hooks (useSelector, useDispatch)
   - TypeScript integration
