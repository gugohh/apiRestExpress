
const fetch = require('node-fetch')
require('dotenv').config()

const key = process.env.APIKEY


const getFilm = {
    fetchFilm: async (nameFilm) => {
        let data = await fetch(`https://www.omdbapi.com/?t=${nameFilm}&apikey=${key}`)
        let json = await data.json()
        return json 
    }
}

module.exports = getFilm
