import { useCallback, useEffect, useRef, useState } from "react";

import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [isNum, setIsNum] = useState(false);
  const [isChar, setIsChar] = useState(false);
  const [password, setPassword] = useState("");
  
  //useRef hook - for taking the reference
  // useCallback is a performance optimization hook that memoizes a function and returns the same 
  // function reference until its dependencies change.
  const passwordRef = useRef(null);

  // cache a function during re-rendering and re renders when dependencies changes
  const passwordGenerator = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pass = "";
    if (isNum) {
      str += "0123456789";
    }
    if (isChar) {
      str += "!@#$%^&*-_+=[]{}~`";
    }

    for (let index = 0; index <= length; index++) {
      let ind = Math.floor(Math.random() * str.length + 1);
      pass += str[ind];
    }

    setPassword(pass);
    // dependency are for optimisation
  }, [length, isNum, isChar, setPassword]);

  // sync the components
  // useEffect is a side-effect hook that executes code after rendering
  useEffect(() => {
    passwordGenerator();
    // dependency are for running above method
  }, [length, isNum, isChar, passwordGenerator])

  const copyPasswordToClipboard = () => {
    passwordRef.current?.select();
    //passwordRef.current?.setSelectionRange(0, 3);
    window.navigator.clipboard.writeText(password);
  }

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-300">
      <h1 className="text-white text-center my-3">Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4 ">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3 bg-white text-orange-800"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button 
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0" 
          onClick={copyPasswordToClipboard}>
          copy
        </button>
      </div>

      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            id="length"
            min={8}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
          />
          <label htmlFor="length">Length: {length}</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={isNum}
            id="numberInput"
            onChange={(e) => setIsNum(e.target.checked)}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={isChar}
            id="characterInput"
            onChange={(e) => setIsChar(e.target.checked)}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
