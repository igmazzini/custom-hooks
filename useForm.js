import { useState } from "react"

export const useForm = ( initialState )  =>{

    const [formState , setFormState] = useState( initialState );

    const onInputChange = ({ target }) => {

        const { name, value } = target;

        setFormState({ ...formState, [ name ]: value });
    }

    const clearForm = () => {       

        setFormState( initialState );
    }


    return{
        ...formState,        
        onInputChange,
        clearForm
    }

}