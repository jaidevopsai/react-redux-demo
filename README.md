# React + Redux + TypeScript Demo

This project demonstrates a modern React application using TypeScript, Redux Toolkit, and Vite, with a custom, license-safe light theme and educational UI for learning Redux state management.

## Features

- **Redux Toolkit State Management**: Uses Redux Toolkit for efficient, type-safe state management.
- **Prompt Management**: Add, view, and delete prompts, all managed in Redux state.
- **Live Redux Action Descriptions**: UI displays real-time explanations of Redux actions and state changes as you interact.
- **Custom Light Theme**: Clean, accessible, and license-safe color palette and font stack.
- **TypeScript Integration**: All state, actions, and components are fully typed for safety and maintainability.
- **Educational UI**: See which Redux actions are dispatched and how state changes, directly in the app.
- **Modern React Patterns**: Functional components, hooks, and best practices.
- **Vite-Powered**: Fast development and hot module replacement.
- **Unit Tested**: All Redux logic is covered by unit tests for reliability and maintainability.

## How It Works

- **Prompt Input**: Typing in the input dispatches `setCurrentPrompt`, updating Redux state.
- **Add Prompt**: Clicking "Add Prompt" dispatches `addPrompt`, storing the prompt in Redux.
- **Delete Prompt**: Clicking "Delete" on a prompt dispatches `deletePrompt`, removing it from Redux.
- **Redux State Info**: The UI shows the current prompt and total prompts in Redux state.
- **Event Descriptions**: A green info bar explains what Redux action just happened and what it did.

## Project Structure

```
src/
  App.tsx              # Main app component
  App.css              # App-level styles
  index.css            # Global styles (custom light theme)
  main.tsx             # Entry point, Redux Provider setup
  components/
    PromptManager.tsx  # Prompt management UI and Redux logic
    PromptManager.css  # Styles for PromptManager
  store/
    index.ts           # Redux store configuration
    slices/
      counterSlice.ts  # Example counter slice
      promptSlice.ts   # Prompt management slice
      promptSlice.test.ts # Unit tests for promptSlice
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the development server:**
   ```bash
   npm run dev
   ```
3. **Open the app:**
   Visit [http://localhost:5173](http://localhost:5173) in your browser.

## Testing

- **Run all tests:**
  ```bash
  npm test
  # or
  npx jest
  ```
- **Test Coverage:**
  - The `src/store/slices/promptSlice.test.ts` file covers all main reducer logic:
    - Initial state
    - setCurrentPrompt
    - addPrompt (with and without input)
    - deletePrompt
  - All tests pass as of June 2025.

## Learning Redux in This App

- **See Redux in Action:**
  - Typing in the input updates Redux state (`setCurrentPrompt`).
  - Adding a prompt stores it in Redux (`addPrompt`).
  - Deleting a prompt removes it from Redux (`deletePrompt`).
- **Live State Info:**
  - The UI always shows the current Redux state for prompts.
- **Action Descriptions:**
  - Every action you take is described in real time, so you can learn how Redux works as you use the app.

## Customization & License

- All theme colors and fonts are custom and license-safe.
- You can freely use, modify, and distribute this project.

## Useful Links

- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Vite Documentation](https://vitejs.dev/)
- [Jest Documentation](https://jestjs.io/)

---

Enjoy learning Redux with a modern, beautiful, and open-source React app!
