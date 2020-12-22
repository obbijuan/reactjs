import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer'
import { useForm } from '../../hooks/useForm'
import { TodoList } from './TodoList'
import './styles.css'

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init)

    const [{ description }, handleInputChange, reset] = useForm({
        description: ''
    })

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))

        // Si la dependencia cambia, significa que tiene que volver a guardar en el local storage
    }, [todos]);

    const handleDelete = (todoId) => {

        const action = {
            type: 'remove',
            payload: todoId 
        }
        dispatch(action);

    }

    const handleToggle = (todoId) => {

        dispatch({
            type: 'toggle',
            payload: todoId
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // Valida que no se agreguen Todos vacios
        if (description.trim().length <=1) {
            return;
        }
        
        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }

        const action = {
            type: 'add',
            payload: newTodo 
        }

        dispatch(action);
        reset();
    }

    return (
        <div>
            <h1>TodoApp ({ todos.length })</h1>
            <hr />

            <div className="row">

                <div className="col-7">
                    {/* TodoList, todos, handleDelete, handleToggle */}
                    <TodoList
                        todos={todos}
                        handleDelete={handleDelete}
                        handleToggle={handleToggle}
                    />
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <form onSubmit={ handleSubmit }>
                        <input
                            type="text"
                            name="description"
                            className="form-control"
                            autoComplete="off"
                            value={ description }
                            onChange={ handleInputChange }
                        />
                        <button
                            type="submit"
                            className="btn btn-primary mt-1 btn-block"
                        >
                            Agregar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
