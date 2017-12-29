const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const movieAPI = require('../lib/movieAPI');
const axios = require('axios');
const _ = require('lodash');
let router = express.Router();

let movies = [];
let loadMovies = () => {
  // moviedetails = [];
  movieAPI.getNewMovies((movs) => {
    // _.pullAll(movs, movies, 'id');
    movs.forEach((movie) => {
      movieAPI.getMoreDangDetails(movie.id, (deets) => {
        deets.watched = false;
        movies.push(deets)
      });
    });
  });
};
loadMovies(); //initial loading call before pages can be serverd
let getMovies = (req, res) => {
  console.log('Serving GET request at /movies')
  //sort not working for some reason
  res.send(movies.sort((a, b) => { return a.title.toLowerCase() > b.title.toLowerCase()}));
};
let addMovie = (req, res) => {
  console.log('Serving POST request at /movie')
  movieAPI.searchMovie(req.body.query, (movie) =>{
    movie.watched = false;
    movies.push(movie);
    res.send();
  })
};

router.get('/movies', getMovies);
router.get('/load', loadMovies);
router.post('/movie', addMovie);

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use('/', router);

app.listen(3000, function (){ 
  console.log('MovieList app listening on port 3000!') 
});
