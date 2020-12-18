import React, { useReducer } from 'react'
import { todoReducer } from './todoReducer'
import './styles.css'

const initialState = [{
    id: new Date().getTime(),
    desc: 'Aprender React',
    donde: false
}]

export const TodoApp = () => {

    const [todos] = useReducer(todoReducer, initialState)
    console.log(todos)

    return (
        <div>
            <h1>TodoApp</h1>
            <hr />

            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
            
        </div>
    )
}
