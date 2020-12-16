import React, { useMemo, useState } from 'react'
import { useCounter } from '../../hooks/useCounter'

import '../02-useEffect/effects.css'

export const MemoHook = () => {

    const { position, increment } = useCounter([], 500)
    const [show, setShow] = useState(true)

    const procesoPesado = (iteraciones) => {
        for (let i = 0; i < iteraciones; i++) {
            console.log(`Ahi vamos.....`)
        }
        return `${iteraciones} iteraciones realizadas!`
    }

    // Vuelve a calcular el valor memorizado, cuando una de las dependencias haya cambiado.
    const memoProcesoPesado = useMemo(() => procesoPesado(position), [position])

    return (
        <div>
            <h1>MemoHook</h1>
            <h3>Counter: <small>{ position }</small></h3>
            <hr />

            <p>{ memoProcesoPesado }</p>
            
            <button
                className="btn btn-primary"
                onClick={ increment }
            >
            +1
            </button>
            <button
                className="btn btn-primary ml-3"
                onClick={() => { 
                    setShow(!show);
                }}
            >
                Show/Hide { JSON.stringify(show) }
            </button>
        </div>
    )
}
