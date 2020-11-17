import React from 'react';
import PropTypes from 'prop-types';

const FirstApp = ({ saludo, subtitle }) => {
    
    return (
        <>
            <h1>{saludo}</h1>
            <p>{subtitle}</p>
        </>
    )
}

// Se fuerza al componente a proveer la props saludo
FirstApp.propTypes = {
    saludo: PropTypes.string.isRequired
}
// Establece parametro por defecto
FirstApp.defaultProps = {
    subtitle: "I'am a subtitle"
}
 

export default FirstApp;