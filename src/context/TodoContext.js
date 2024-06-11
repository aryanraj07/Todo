import { createContext, useContext } from "react";

export const TodoContext=createContext({
    todos:[
        {
            id:1,
            todo:'todo',
            completed:false
        }
    ],
    addTodo:(todo)=>{},
    updateTodo:(todo,id)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}
})
export const TodoContextProvider=TodoContext.Provider;
export const useTodo=()=>useContext(TodoContext);
    
        