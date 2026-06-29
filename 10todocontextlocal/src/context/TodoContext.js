import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "todo msg",
            isCompleted: false
        }
    ],
    add: (todo) => {},
    update: (id, todo) => {},
    deleteTodo: (id) => {},
    toggle: (id) => {}
});

export const TodoProvider = TodoContext.Provider;

export function useTodo() {
    return useContext(TodoContext);
}