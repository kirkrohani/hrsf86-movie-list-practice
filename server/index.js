const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const movieAPI = require('../lib/movieAPI.js');
// var controller = require('./controllers.js');
var router = require('express').Router();
var db = require('../database/index.js');

var movies = [];
// var movies = [
//   {title: 'Mean Girls', watched: 'No', Year: 2004, Runtime: '97 min', Metascore: 83, imdbRating: 7.0},
//   {title: 'Hackers', watched: 'No', Year: 1995, Runtime: '107 min', Metascore: 32, imdbRating: 6.2},
//   {title: 'The Grey', watched: 'No', Year: 2011, Runtime: '117 min', Metascore: 75, imdbRating: 6.8},
//   {title: 'Sunshine', watched: 'No', Year: 2007, Runtime: '107 min', Metascore: 76, imdbRating: 7.3},
//   {title: 'Ex Machina', watched: 'No', Year: 2015, Runtime: '108 min', Metascore: 92, imdbRating: 7.7}
// ];

app.use(bodyParser.json());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.listen(3000, function () { console.log('MovieList app listening on port 3000!') });

app.get('/movies', (request, response) => {
  db.selectAll((result) => {
    console.log('ADSFASDFASDFASDFADSFS', result);
    response.send(result);
  });
  console.log('Sent a GET request!');
});

app.get('/load', (request, response) => {
  movieAPI.getRequest((body) => {
    movies = body.results;
    console.log('Movies are ', movies);
    db.insertMany(movies, (err) => {
      if (err) {
        console.log(err);
      }
    });
    response.send(movies);
  });
  console.log('Sent a GET request!');
});

app.post('/movie', (request, response) => {
  // var newMovie = { title: request.body, release_date: "2017-12-28", overview: "Movie about fish", popularity: 9, vote_average: 8 };
  db.insertOne(request.body, (err) => {
    if (err) { console.log(err); }
  });
  movies.push(request.body);
  response.send(movies[movies.length - 1]);
  console.log('New movie is ', request.body);
});

module.exports = app;