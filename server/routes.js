const router = require('express').Router();
const controller = require('./controllers.js');

router.get('/', controller.movies.get);
router.post('/', controller.movies.post);

module.exports = router;