const express = require('express') //Crear expres
const app = express()              //crear una nueva aplicación


app.get('/', (req, res) => {
    res.sendStatus(200);
    
})

app.listen(3031, () => {
    console.log('el servidor esta corriendo en el puerto 3031')
})