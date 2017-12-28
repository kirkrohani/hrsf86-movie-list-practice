var controller = require('./controllers/index.js');
var router = require('express').Router();

//Connect controller methods to their corresponding routes
router.get('/movies', controller.get);

router.post('/movies', controller.post);

router.get('/load', controller.load);

module.exports = router;