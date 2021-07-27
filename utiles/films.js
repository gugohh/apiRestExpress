
const fetch = require('node-fetch')
require('dotenv').config()

const key = process.env.APIKEY


const getFilm = {
    fetchFilm: async (nameFilm) => {
        let res = await fetch(`https://www.omdbapi.com/?t=${nameFilm}&apikey=${key}`)
        let data = await res.json()
        return data
    }
}

getFilm
     .fetchFilm()
     .then((data) => console.log(data))
 
module.exports = getFilm

