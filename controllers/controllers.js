const {getFilm} = require('../utiles/films')
const getFilm  = require('../utils/films')

const filmObject = {
    home: (req, res) => {
        let title = req.params.title
        let data = await getFilm(title)
        res.status(200).render('home',{data})
    },
    film: async (req, res) => {
        let name = req.params.title 
        let film = await getFilm .fetchFilm(name)
        res.status(200).render('film', { film }) 
    },
    filmPost: async (req, res) => { 
       
        let name = await req.body.title 
        res.status(308).redirect(`/film/${name}`) 
    },
    putFilm: (req, res) => {
        res.status(200).send('Creado en el PUT') 
    },
    
    err: (req, res) => {
        res.status(404).send('Error 404 Not Found!') 
    }
}
module.exports = filmObject
