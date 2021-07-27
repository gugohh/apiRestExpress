const express = require('express')
const process = require('process')


require('dotenv').config()
const router = require('./routes/routes')

const app = express()
const port = process.env.PORT || 8080;

//Motor de vista
app.set('view engine', 'pug')
app.set('views', '/views')

//Middleware
app.use(express.json())

//Rutas
app.use('/', router)
app.use('/api', router)

app.get('*', (req,res) =>{
    res.status(404).send('Sorry...404 not found')
})

app.listen(port, () =>{
    console.log(`Example app listening at http://localhost:${port}`);
})