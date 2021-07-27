
const router = require('express').Router() 
const controllers = require('../controllers/controllers') 

router.get('/', controllers.home) 
router.get('/film/:title', controllers.films) 

router.post('/film', controllers.filmPost)

router.put('/film' ,controllers.putFilm)



module.exports = router