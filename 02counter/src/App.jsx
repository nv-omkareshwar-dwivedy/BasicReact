import { useState } from 'react'

import './App.css'

function App() {
  const [counter, setCounter] = useState(0);

  function updateCounter(val) {
    // assignment
    // on remove it should not go below zero
    // on add it should not exceed 20
    // case: remove
    if(val < 0 && counter == 0) return;
    // case: add
    if(val > 0 && counter == 20) return;

    setCounter(counter + val);

  }

  return (
    <div className="hero">
      <h2>React and Counter: 0 to 20</h2>
      <p>Counter Value: {counter}</p>
      <button onClick={() => updateCounter(1)}>Add</button>
      <button onClick={() => updateCounter(-1)}>Remove</button>
    </div>
  )
}

export default App
