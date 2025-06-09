import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Prompt {
  id: number;
  text: string;
  timestamp: string;
}

interface PromptState {
  prompts: Prompt[];
  currentPrompt: string;
}

const initialState: PromptState = {
  prompts: [],
  currentPrompt: '',
};

export const promptSlice = createSlice({
  name: 'prompt',
  initialState,
  reducers: {
    setCurrentPrompt: (state, action: PayloadAction<string>) => {
      state.currentPrompt = action.payload;
    },
    addPrompt: (state) => {
      if (state.currentPrompt.trim()) {
        state.prompts.push({
          id: Date.now(),
          text: state.currentPrompt,
          timestamp: new Date().toISOString(),
        });
        state.currentPrompt = '';
      }
    },
    deletePrompt: (state, action: PayloadAction<number>) => {
      state.prompts = state.prompts.filter(prompt => prompt.id !== action.payload);
    },
  },
});

export const { setCurrentPrompt, addPrompt, deletePrompt } = promptSlice.actions;
export default promptSlice.reducer;
