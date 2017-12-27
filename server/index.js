const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const movieAPI = require('../lib/movieAPI.js');

var movies = [];

app.use(bodyParser.json());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.listen(3000, function () { console.log('MovieList app listening on port 3000!') });

app.get('/movies', (req, res) => res.send(
  JSON.stringify(movies)
));

app.get('/load', (req, res) => {
  movieAPI.load((body) => {
    // console.log('results:', body.results);
    movies = body.results;
    // on initial load, set custom state variables
    movies.forEach(movie => {
      movie.watched = false;
      movie.showPanel = false;
    });
    console.log('done with controller load request');
    res.send(JSON.stringify(movies));
  });
});

app.post('/movie', (req, res) => {
  console.log('post req.body:', req.body);
  movies.push(req.body);
  res.send(JSON.stringify(movies));
});
