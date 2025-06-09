import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setCurrentPrompt, addPrompt, deletePrompt } from '../store/slices/promptSlice';
import './PromptManager.css';

const PromptManager = () => {
  const dispatch = useDispatch();
  const { currentPrompt, prompts } = useSelector((state: RootState) => state.prompt);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addPrompt());
  };

  return (
    <div className="prompt-manager">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={currentPrompt}
          onChange={(e) => dispatch(setCurrentPrompt(e.target.value))}
          placeholder="Enter your prompt..."
          className="prompt-input"
        />
        <button type="submit" disabled={!currentPrompt.trim()}>
          Add Prompt
        </button>
      </form>

      <div className="prompt-list">
        {prompts.map((prompt) => (
          <div key={prompt.id} className="prompt-item">
            <p>{prompt.text}</p>
            <div className="prompt-meta">
              <span>{new Date(prompt.timestamp).toLocaleString()}</span>
              <button
                onClick={() => dispatch(deletePrompt(prompt.id))}
                className="delete-btn"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromptManager;
