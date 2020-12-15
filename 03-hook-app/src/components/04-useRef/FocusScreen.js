import React, { useRef } from 'react'
import '../02-useEffect/effects.css'

export const FocusScreen = () => {
    
    // Permite una referencia mutable
    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.select();
    }

    return (
        <div>
            <h1>Focus Screen</h1>
            <hr />
            
            <input
                ref={ inputRef }
                className="form-control"
                placeholder="Su nombre"
            />

            <button
                className="btn btn-primary mt-4"
                onClick={handleClick}
            >
                Focus
            </button>

        </div>
    )
}
