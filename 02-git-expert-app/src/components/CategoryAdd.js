import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const CategoryAdd = ({setCategories} ) => {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => { 
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => { 
        e.preventDefault()

        if (inputValue.trim().length > 2) {
            // setCategories(categ => [inputValue, ...categ])
            setCategories([inputValue])
            setInputValue('')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>{inputValue}</p>
            <input
                type="text"
                value={inputValue}
                onChange={ handleInputChange}
            />
        </form>
    )
}

CategoryAdd.propTypes = {
    setCategories: PropTypes.func.isRequired
}
