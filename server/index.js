const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const movieAPI = require('../lib/movieAPI.js');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.listen(3000, function () { console.log('MovieList app listening on port 3000!') });


let movies = [

];

app.get('/movies', function(req, res) {
  res.send(movies)
});

app.post('/movie', function(req, res) {
  var newMovie = {title: req.body.title};
  movies.push(newMovie);
  res.send(201);
});

app.get('/load', function(req, res) {
  console.log('movieapi', movieAPI);
  movieAPI((movieArray) => {
    movies = movieArray;   
    res.send(movies);
  })
});