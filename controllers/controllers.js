const getFilm = require('../utiles/films')
const film = require('../utiles/films')

const filmObject = {
    
    home: async(req, res) => {
        let title = req.params.title
        let data = await getFilm.fetchFilm(title)
        res.status(200).json(data)
    },
    filmPost: async (req, res) => { 
        console.log("hola");
        let msj = "Se ha guardado"
        res.status(200).send('Hola')
    },
    putFilm: (req, res) => {
        res.status(200).send('Creado en el PUT') 
    },
    filmDelete: (req,res) => {

    },
    
    err: (req, res) => {
        res.status(404).send('Error 404 Not Found!') 
    }
}
module.exports = filmObject
