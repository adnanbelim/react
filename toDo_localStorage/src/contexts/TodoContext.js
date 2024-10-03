import React, { createContext, useContext } from "react";

// Create context of todo
export const TodoContext = createContext({
    // variable and function create which we define in app.jsx and use it
    // Add data as array of object
    // Is context ka initial state ek object hai jisme: array of obj hai
    todos : [
        //byDefault add list => {}, {}, {}
        {
            id : 1,
            todos : "Todo message",
            complete : false
        }
    ],
    addTodo : (todo) => {},
    updateTodo: (id, todo) => { },
    deleteTodo: (id) => { },
    toggleComplete: (id) => { }
});

// context (TodoContext) ko use karne ke liye useContext
export const useTodo = () => {
    return useContext(TodoContext);
}

// wrap karna padega baad me hume elements ko, isliye hum yahi provider attribute ke sath export kar dete hai

export const TodoProvider = TodoContext.Provider