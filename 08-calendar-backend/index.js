const express = require('express');
require('dotenv').config();

console.log(process.env)

const app = express();

// Directorio Publico
app.use( express.static('public') )


// Rutas
// app.get('/', (req, res) => {
    
//     res.json({
//         ok: true
//     })
// })

app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}!`)
})