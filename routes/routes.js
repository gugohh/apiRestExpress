
const router = require('express').Router() 
const controllers = require('../controllers/controllers') 

router.get('/', controllers.home) 
router.get('/film/:title', controllers.films) 

//router.post('/film', controllers.filmPost)
//router.post('/film', controllers.filmPost)
//router.post('/film', controllers.filmPost)
//router.post('/film', controllers.filmPost)


module.exports = router