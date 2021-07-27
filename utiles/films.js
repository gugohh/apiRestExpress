
const fetch = require('node-fetch')

const getFilm = {
    fetchFilm: async (nameFilm) => {
        let data = await fetch(`https://www.omdbapi.com/?t=${nameFilm}&apikey=b7bbff30`)
        let json = await data.json()
        return json 
    }
}

module.exports = getFilm
