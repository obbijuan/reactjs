const express = require('express');
require('dotenv').config();


const app = express();

// Directorio Publico
app.use(express.static('public'));

//Lectura y parseo del body (se deja de usar bodyparse)
app.use(express.json());

app.use('/api/auth', require('./routes/auth'));


app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}!`)
})