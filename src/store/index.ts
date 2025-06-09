import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import promptReducer from './slices/promptSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    prompt: promptReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
