import { useState } from 'react'

import './App.css'

function App() {
  const [counter, setCounter] = useState(0);

  function updateCounter(val) {
    setCounter(counter + val);
  }

  return (
    <div className="hero">
      <h2>React and Counter</h2>
      <p>Counter Value: {counter}</p>
      <button onClick={() => updateCounter(1)}>Add</button>
      <button onClick={() => updateCounter(-1)}>Remove</button>
    </div>
  )
}

export default App
