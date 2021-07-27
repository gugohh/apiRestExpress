const express = require('express')
const router = require('./routes/routes')
const process = require('process')


require('dotenv').config()

const app = express()
const port = process.env.PORT;

//Middleware
app.use(express.json())//Convertimos todo lo que nos llegan a json

//Rutas
/* app.use('/', router) */
app.use('/api', router)

app.get('*', (req,res) =>{
    res.status(404).send('Sorry...404 not found')
    res.status(500).send('Sorry...Error 500');
})

app.listen(port, () =>{
    console.log(`Example app listening at http://localhost:${port}`);
})