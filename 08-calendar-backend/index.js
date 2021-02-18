const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { dbConnection } = require('./database/config');

const app = express();

// Base de datos
dbConnection();

// CORS
app.use(cors());

// Directorio Publico
app.use(express.static('public'));

//Lectura y parseo del body (se deja de usar bodyparse)
app.use(express.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));


app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}!`)
})