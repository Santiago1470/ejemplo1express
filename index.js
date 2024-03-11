const express = require('express')
const app = express()
const port = 3000

app.get('/hola', (req, res) => {
    res.send('Hola Mundo');
})

app.listen(port, () => {
    console.log(`La aplicación se está ejecutando por el puerto ${port}`)
})