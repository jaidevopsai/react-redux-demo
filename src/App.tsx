import PromptManager from './components/PromptManager'
import './App.css'
import NewManager from './components/NewManager'
import MemorizedMyComponent from './components/MemorizedMyComponent'
import ExpensiveComponent from './components/ExpensiveComponent'
import MyLazyComponent from './components/MyLazyComponent'
import { useState, Suspense } from 'react'; 

function App() {
  const [show, setShowLazyComponent] = useState(false);

  return (
    <div className="app-container">


      <hr />

      <button onClick={() => setShowLazyComponent(!show)}>
        show Lazy Component
      </button>
      {
        show && (
          <Suspense fallback={ <div>Loading Lazy Component...</div>}>
            <MyLazyComponent />
          </Suspense>
        )
      }

      <hr />
      <ExpensiveComponent items={['Item 1', 'Item 2', 'Item 3']} />
      <hr />
      
      <MemorizedMyComponent name="MemorizedMyComponent -JAI" />
      <NewManager />

      <h1>Redux Prompt Manager</h1>
      <PromptManager />

       
      <style>{`
        .app-container {
          text-align: center;
          padding: 20px;
          background-color: #f0f0f0;
          min-height: 100vh;
        }
        footer {
          margin-top: 20px;
          font-size: 0.8em;
          color: #666;
        }
      `}</style>  
    </div>
  )
}

export default App
