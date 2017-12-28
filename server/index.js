const express = require('express');

const app = express();
exports.app = app;

const bodyParser = require('body-parser');
const path = require('path');
const controllers = require('./controllers.js')
const router = require('./routes.js');

app.use(bodyParser.json());
app.use('/movies', router);

// app.get('/movies', controllers.movies.get);
// app.post('/movies', controllers.movies.post);

// app.use(express.static(path.join(__dirname, '../client')));
app.use(express.static(path.join(__dirname, '../client')));
app.listen(3000, function () { console.log('MovieList app listening on port 3000!') });




