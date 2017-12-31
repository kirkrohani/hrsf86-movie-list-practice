const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
var movieAPI = require('../lib/movieAPI.js');
var movieDB = require('../database/index.js');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

//load data from API into DB
//only want this to happen on very first page load
app.get('/load', function(req, res) {
  movieAPI.getNowPlaying(function(response){
    var moviesArr = [];
    for (var i = 0; i < response.length; i++) {
      var movie = response[i];
      moviesArr.push([movie.title, movie.release_date, movie.vote_average, movie.overview, movie.poster_path, false]);
    }
    movieDB.insertMany(moviesArr, (err) => {
      if(err) {
        console.log('Error inserting to DB:', err);
      } else {
        console.log('Successfully loaded data into DB');
      }
    });
    res.json(response);
  });
});

//insert movie into DB
app.post('/movie', function(req, res) {
  var newMovie = req.body.movieToAdd;
  let newMovieArr = [newMovie.title, '', null, '', '', false];
  movieDB.insertOne(newMovieArr, (err) => {
    if(err) {
      console.log('Error inserting to DB:', err);
    } else {
      console.log('Successfully inserted data into DB');
    }
  });
  res.json(newMovieArr);
});

//retrieve all movies from DB
app.get('/movies', function(req,res) {
  var getMoviesArr = [];
  movieDB.selectAll((err, movieDataFromDB) => {
    if(err) {
      console.log('Error selecting from DB');
    } else {
      console.log('Successfully retrieved data from DB');
      for (var i = 0; i < movieDataFromDB.length; i++) {
        var getMovie = movieDataFromDB[i];
        getMoviesArr.push({
          title: getMovie.title,
          release_date: getMovie.release_date,
          rating: getMovie.rating,
          overview: getMovie.overview,
          image_link: getMovie.image_link,
          watched_bool: getMovie.watched_bool
        });
      }
      res.json(getMoviesArr);
    }
  });
});

app.listen(3000, function () { console.log('MovieList app listening on port 3000!') });

module.exports = app;





