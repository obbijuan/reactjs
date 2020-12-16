import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { Small } from './Small'
import '../02-useEffect/effects.css'

export const Memorize = () => {

    const { position, increment } = useCounter(10)
    const [show, setShow] = useState(true)

    return (
        <div>
            <h1>Memorize</h1>
            <h2>Counter: <Small value={ position}/></h2>
            <hr />
            
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
