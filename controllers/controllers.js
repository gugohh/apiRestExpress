const getFilm = require('../utiles/films')
const film = require('../utiles/films')

const filmObject = {
    
    home: async(req, res) => {
        let title = req.params.title
        let data = await getFilm.fetchFilm(title)
        res.status(200).json(data)
    },
    filmPost: async (req, res) => { 
        console.log("Se ha realizado el POST");
        //let msj = "Se ha guardado"
        res.status(200).send('Hola')
    },
    putFilm: (req, res) => {
        console.log('Se ha realizado el PUT');
        res.status(200).send(req.body) 
    },
    filmDelete: (req,res) => {
        console.log('Se ha realizado el DELETE');
        res.status(200).send(req.body)
    },
    
    err: (req, res) => {
        res.status(404).send('Error 404 Not Found!') 
        res.status(500).send('Error 500!')
    }
}
module.exports = filmObject


