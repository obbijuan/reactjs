import React from 'react'

// Con memo, solo se va a disparar si las properties cambian (value)
export const Small = React.memo(({ value }) => {

    console.log('Me volvi a llamar!')
    
    return (
        <small>{ value }</small>
    )
})
