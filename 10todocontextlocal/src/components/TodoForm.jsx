import React, { useContext, useState } from "react";
import { TodoContext, useTodo } from "../context/TodoContext";

export default function TodoForm() {
    const [todo, setTodo] = useState("");
    const {add} = useTodo();

    function addTodo(e) {
        e.preventDefault();
        const inputVal = e.target.value;

        // as id is passed in the app.jsx
        // add({todo: todo, isCompleted: false});
        // also, if key: key
        add({todo, isCompleted: false})

        // to make the field empty
        setTodo("");
    }
    
    return (
        <form onSubmit={addTodo} className="flex">
          <input
              type="text"
              placeholder="Write Todo..."
              className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
          />
          <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
              Add
          </button>
      </form>   
    )
}