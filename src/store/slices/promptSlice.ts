/**
 * This file demonstrates Redux Toolkit's createSlice API for managing prompt-related state
 * Key concepts demonstrated:
 * 1. State interface definitions with TypeScript
 * 2. CreateSlice for reducer and action creation
 * 3. Immer-powered immutable state updates
 * 4. Type-safe action creators with PayloadAction
 */

import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// Define the shape of a single prompt
interface Prompt {
  id: number;
  text: string;
  timestamp: string;
}

// Define the shape of the entire prompt state
interface PromptState {
  prompts: Prompt[];
  currentPrompt: string;
}

// Initial state follows the PromptState interface
const initialState: PromptState = {
  prompts: [],
  currentPrompt: '',
};

/**
 * CreateSlice automatically generates action creators and action types
 * that correspond to the reducers and state
 */
export const promptSlice = createSlice({
  name: 'prompt', // Used to generate action types
  initialState,
  reducers: {
    // Action to update the current prompt text
    setCurrentPrompt: (state, action: PayloadAction<string>) => {
      state.currentPrompt = action.payload;
    },
    // Action to add a new prompt to the list
    addPrompt: (state) => {
      if (state.currentPrompt.trim()) {
        // Redux Toolkit allows "mutating" logic thanks to Immer
        state.prompts.push({
          id: Date.now(),
          text: state.currentPrompt,
          timestamp: new Date().toISOString(),
        });
        state.currentPrompt = '';
      }
    },
    // Action to remove a prompt by its ID
    deletePrompt: (state, action: PayloadAction<number>) => {
      // Immutable array update using filter
      state.prompts = state.prompts.filter(prompt => prompt.id !== action.payload);
    },
  },
});

// Export action creators for use in components
export const { setCurrentPrompt, addPrompt, deletePrompt } = promptSlice.actions;

// Export the reducer for store configuration
export default promptSlice.reducer;
