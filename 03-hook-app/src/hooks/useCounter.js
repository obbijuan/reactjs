// El objectivo de un custom hooks es la reutilizacion.
import { useState } from 'react'

export const useCounter = (initialState = 0) => {

    const [state, setState] = useState(initialState)
    const [position, setPosition] = useState(initialState)
    
    const increment = () => {
        setState( state + 1 )
    }
    const decrement = () => {
        setState( state - 1 )
    }
    const reset = () => {
        setState( initialState )
    }

    const random = (arrIds) => {
        state < (arrIds.length - 1) ? increment() : reset()
        let randomItem = arrIds[state];
        setPosition(randomItem)
    }

    return {
        state,
        increment,
        decrement,
        reset,
        position,
        random
    }

}
