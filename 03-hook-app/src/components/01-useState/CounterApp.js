import React, { useState } from 'react';
import './counter.css';

export const CounterApp = () => {

    const [state, setState] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
        counter4: 40,
    })

    return (
        <>
            <h1>Counter 1: {state.counter1}</h1>
            <h1>Counter 2: {state.counter2}</h1>
            <hr />
            
            <button
                className="bnt btn-primary"
                onClick={ () => {
                    setState({
                        // Obtiene todas las propiedades o valores anteriores
                        ...state,
                        // Y luego reemplaza solo el counter1
                        counter1 : state.counter1 + 1
                    })
                }}
            >
                +1
            </button>
        </>
    )
}
