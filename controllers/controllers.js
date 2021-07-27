const {getFilm} = require('../utiles/films')
const film = require('../utiles/films')

const films = {
    home: async(req,res)=>{
        let title = req.params.title
        let data = await getFilm(title)
        res.status(200).render('home',{data})
    },
    film: async(req, res)=>{
        let title = req.params.title
        let films = await film.getFilm(title)
        res.status(200).render('film', {data:film})
    },
    filmPost: async(req, res) =>{
        let param = await req.body.browser
        console.log();
    }

}

module.exports = films;