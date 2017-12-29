const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
var sampleData = require('../client/exampleMovieData.js');


app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/movies', function(req,res) {
  res.json(sampleData.exampleMovieData);
});

app.post('/movie', function(req, res) {
  var newMovie = req.body.movieToAdd;
  var moviesList = req.body.moviesList;
  moviesList.push(newMovie);
  res.json(moviesList);
});

app.listen(3000, function () { console.log('MovieList app listening on port 3000!') });

module.exports = app;





