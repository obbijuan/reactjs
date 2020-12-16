import React, { useCallback, useEffect, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';

import '../02-useEffect/effects.css'

// Cuando el componente CallbackHook se renderiza llama a la funcion increment()
// y como es una constante que está en memoria, cada vez que se ejecuta se vuelve a crear
// un espacio nuevo en memoria y esto hace que no funcione un React.memo() para este ejemplo.
// En estos casos es cuando se usa el useCallback()
export const CallbackHook = () => {

    const [counter, setCounter] = useState(10)

    // Funcion que se envía como referencia en el ShowIncrement.
    // const increment = () => {
    //     setCounter(counter + 1);
    // }
    
    const increment = useCallback((num) => {
        setCounter( c => c + num);
    }, [setCounter])
    
    // Si un useEffect tiene una dependencia que es una funcion, se recomianda 
    // que se use un useCallback()
    useEffect(() => {
        //??
    }, [increment])

    return (
        <div>
            <h1>useCallback Hook: {counter}</h1>
            <hr />
            
            <ShowIncrement increment={ increment }/>
        </div>
    )
}
