export const todoReducer = (state, action) =>{


    switch (action?.type) {

        case 'addTask':         

            return [...state, action.payload];

        case 'removeTask':         

            return state.filter( todo => todo.id != action.payload.id);
    
        case 'doneTask':         

            return state.map( (todo) =>{ 

                if(todo.id === action.payload.id){
                    todo.done = true;
                }

                return todo;
            } );
        case 'unDoneTask':         

            return state.map( (todo) =>{ 

                if(todo.id === action.payload.id){
                    todo.done = false;
                }

                return todo;
            } );
    
        default:
            return state;
    }  

    
}