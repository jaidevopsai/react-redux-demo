import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../store';
import { setCurrentPrompt, addPrompt, deletePrompt } from '../store/slices/promptSlice';
import './PromptManager.css';
import { useRef, useState } from 'react';

const PromptManager = () => {
  const dispatch = useDispatch();
  const { currentPrompt, prompts } = useSelector((state: RootState) => state.prompt);
  const [eventDesc, setEventDesc] = useState<string>('Type in the input to update Redux state.');
  const prevPromptCount = useRef(prompts.length);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setCurrentPrompt(e.target.value));
    setEventDesc('setCurrentPrompt dispatched: Redux state updated with input text.');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentPrompt.trim()) {
      dispatch(addPrompt());
      setEventDesc('addPrompt dispatched: Prompt added to Redux state.');
    }
  };

  const handleDelete = (id: number) => {
    dispatch(deletePrompt(id));
    setEventDesc(`deletePrompt dispatched: Prompt with id ${id} removed from Redux state.`);
  };

  // Update eventDesc if prompt count changes (add/delete)
  if (prompts.length > prevPromptCount.current) {
    setTimeout(() => setEventDesc('Prompt successfully added to Redux state.'), 300);
    prevPromptCount.current = prompts.length;
  } else if (prompts.length < prevPromptCount.current) {
    setTimeout(() => setEventDesc('Prompt successfully deleted from Redux state.'), 300);
    prevPromptCount.current = prompts.length;
  }

  return (
    <div className="prompt-manager">
      <div className="redux-info">
        <h3>Redux State Info:</h3>
        <div className="state-info">
          <p>Current State:</p>
          <ul>
            <li>Current Prompt: <span className="state-value">{currentPrompt || '(empty)'}</span></li>
            <li>Total Prompts: <span className="state-value">{prompts.length}</span></li>
          </ul>
        </div>
      </div>
      <div className="redux-event-desc" style={{marginBottom: '18px', color: '#2ecc40', fontWeight: 500}}>
        {eventDesc}
      </div>
      <form onSubmit={handleSubmit} className="prompt-form">
        <div className="input-container">
          <input
            type="text"
            value={currentPrompt}
            onChange={handleInputChange}
            placeholder="Enter your prompt..."
            className="prompt-input"
          />
          <div className="action-info">
            👆 Typing here dispatches: <code>setCurrentPrompt(text)</code>
          </div>
        </div>
        <div className="button-container">
          <button type="submit" disabled={!currentPrompt.trim()} className="prompt-button">
            Add Prompt
          </button>
          <div className="action-info">
            👆 Clicking dispatches: <code>addPrompt()</code>
          </div>
        </div>
      </form>
      <div className="prompt-list">
        <h3>Stored Prompts:</h3>
        {prompts.length === 0 ? (
          <p className="no-prompts">No prompts in Redux store. Add your first prompt above!</p>
        ) : (
          prompts.map((prompt) => (
            <div key={prompt.id} className="prompt-item">
              <p className="prompt-text">{prompt.text}</p>
              <div className="prompt-meta">
                <span className="prompt-timestamp">{new Date(prompt.timestamp).toLocaleString()}</span>
                <div className="delete-container">
                  <button
                    onClick={() => handleDelete(prompt.id)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                  <div className="action-info">
                    👆 Clicking dispatches: <code>deletePrompt({prompt.id})</code>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PromptManager;
