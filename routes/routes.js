const router = require('express').Router() 
const filmObject = require('../controllers/controllers') 

router.get('/film/:title', filmObject.home) 

router.post('/film/', filmObject.filmPost)

router.put('/film' ,filmObject.putFilm)


router.delete('/film', filmObject.filmDelete)


module.exports = router