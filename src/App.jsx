import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Testing Vite</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Testing <code>src/vite-App.jsx</code> 
        </p>
      </div>
      
    </>
  )
}

export default App
