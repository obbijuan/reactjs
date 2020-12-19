import { useState } from "react"

// Este custom hook se encarga de manejar los formularios
export const useForm = (initialState = {}) => {
    
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues(initialState);
    }

    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            [target.name] : target.value
        })
    }
    // En el primer valor del arregle devuelve el estado del formulario
    // y el segundo valor el handleInputChange.
    return [values, handleInputChange, reset]
}
