import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

const initializeTodos = () =>{
    return JSON.parse( localStorage.getItem('todos')) || [];
}

export const useTodos = () => {

    const [todos, dispatchTodoAction] = useReducer(todoReducer, [], initializeTodos);

    useEffect(() => {
      
        localStorage.setItem('todos',JSON.stringify( todos ));
    
     
    }, [todos])
    

    const addTask = ( task ) =>{            

        dispatchTodoAction({
            type:'addTask',
            payload:task
        });

    }
    const removeTask = ( task ) =>{       

       
        dispatchTodoAction({
            type:'removeTask',
            payload:task
        });

    }
    const doneTask = ( task ) =>{              

        dispatchTodoAction({
            type:'doneTask',
            payload:task
        });
    }
    const unDoneTask = ( task ) =>{              

        dispatchTodoAction({
            type:'unDoneTask',
            payload:task
        });
    }

    const getTotal = () =>{
        return todos.length;
    }

    const getPending = () =>{
        return todos.filter( todo => todo.done === false).length;
    }
  return {
    todos,
    getPending,
    getTotal,
    addTask,
    removeTask,
    doneTask,
    unDoneTask
  }
}
