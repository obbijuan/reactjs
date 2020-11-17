import React, {useState} from 'react'
import PropTypes from 'prop-types'

// Snnipet:rafcp
const CounterApp = ({ value = 10 }) => {

    const [counter, setCounter] = useState(value);

    const handleAdd = () => setCounter(counter+1)
    const handleReset = () => setCounter(value)
    const handleSubtrack = () => setCounter(counter-1)

    return (<>
        <h1>CounterApp</h1>
        <h2>{counter}</h2>

        <button onClick={ handleSubtrack }>-1</button>
        <button onClick={ handleReset }>Reset</button>
        <button onClick={ handleAdd }>+1</button>
    </>)
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp