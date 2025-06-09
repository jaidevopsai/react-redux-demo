// Unit tests for promptSlice
// These tests cover the main reducer logic for prompt management

import promptReducer, {
  setCurrentPrompt,
  addPrompt,
  deletePrompt
} from './promptSlice';

describe('promptSlice', () => {
  it('should return the initial state', () => {
    expect(promptReducer(undefined, { type: undefined })).toEqual({
      prompts: [],
      currentPrompt: '',
    });
  });

  it('should handle setCurrentPrompt', () => {
    const state = { prompts: [], currentPrompt: '' };
    const action = setCurrentPrompt('Hello');
    const result = promptReducer(state, action);
    expect(result.currentPrompt).toBe('Hello');
  });

  it('should handle addPrompt when currentPrompt is not empty', () => {
    const state = { prompts: [], currentPrompt: 'Test prompt' };
    const result = promptReducer(state, addPrompt());
    expect(result.prompts.length).toBe(1);
    expect(result.prompts[0].text).toBe('Test prompt');
    expect(result.currentPrompt).toBe('');
  });

  it('should not add prompt when currentPrompt is empty', () => {
    const state = { prompts: [], currentPrompt: '   ' };
    const result = promptReducer(state, addPrompt());
    expect(result.prompts.length).toBe(0);
    expect(result.currentPrompt).toBe('   ');
  });

  it('should handle deletePrompt', () => {
    const state = {
      prompts: [
        { id: 1, text: 'A', timestamp: '2024-01-01T00:00:00Z' },
        { id: 2, text: 'B', timestamp: '2024-01-01T00:00:01Z' },
      ],
      currentPrompt: '',
    };
    const result = promptReducer(state, deletePrompt(1));
    expect(result.prompts.length).toBe(1);
    expect(result.prompts[0].id).toBe(2);
  });
});
