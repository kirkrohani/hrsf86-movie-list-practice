const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const API = require('../lib/movieAPI.js')
const dbServer = require('../database/modelIndex.js');


app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

let movies = [];
app.get('/load', (req, res) => {
  API.getMovies(function(err, data) {
  	if (err) {
  	  console.log(err)
  	} else {
  	  var movieList = [];
  	  movieList = data.results;
  	  var dbMovieList = [];

  	  movieList.forEach((movie) => {
  	  	var dbMovie = [];
  	  	dbMovie.push(movie.title, movie.vote_average, movie.overview);
  	  	dbMovieList.push(dbMovie);
  	  });

  	  var params = [dbMovieList];
  	  dbServer.movies.post(params, function(err, results){
  	  	  // adds all movies in params to the database
  	  	  if (err) {
  	  	  	console.log(err);
  	  	  }
  	  });

  	  dbServer.movies.get(function(err, result) {
  	  	if (err) {
  	  	  console.log(err);
  	  	} else {

  	  	  res.send(result);
  	  	}
  	  });
  	}
  });
});

app.get('/movies', (req, res) => {
  dbServer.movies.get(function(err, result) {
  	if (err) {
  	  console.log(err);
  	} else {
  	  console.log('successful get from DB');
  	  res.send(result);
  	}
  });
})


app.post('/movie', (req, res) => {

  API.getSingleMovie(req.body.title, function(err, data) {
      if (err) {
        console.log(err)
      } else {
        var movie = data.results[0];
        var dbEntry = [];
        dbEntry.push(movie.title, movie.vote_average, movie.overview);
        var params = [[dbEntry]];
        dbServer.movies.post(params, function(err, results) {
          if (err) {
            console.log(err);
          }
      	});

        dbServer.movies.get(function(err, result) {
  	  	  if (err) {
  	  	    console.log(err);
  	  	  } else {
  	  	    res.send(result);
  	  	  }
  	    });
      }
    })

})

app.listen(3000, function () { console.log('MovieList app listening on port 3000!') });




