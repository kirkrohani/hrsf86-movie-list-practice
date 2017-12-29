const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
var movieAPI = require('../lib/movieAPI.js');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.post('/movie', function(req, res) {
  var newMovie = req.body.movieToAdd;
  var moviesList = req.body.moviesList;
  moviesList.push(newMovie);
  res.json(moviesList);
});

app.get('/load', function(req, res) {
  movieAPI.getNowPlaying(function(response){
    res.json(response);
  });
});

app.listen(3000, function () { console.log('MovieList app listening on port 3000!') });

module.exports = app;





