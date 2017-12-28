const router = require('express').Router();
const controller = require('./controllers.js');

router.get('/', controller.movies.get);
router.post('/', controller.movies.post);

router.get('/load', controller.load.get);

module.exports = router;