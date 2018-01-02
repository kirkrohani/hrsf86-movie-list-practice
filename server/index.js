const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const movieAPI = require('../lib/movieAPI');
const axios = require('axios');
const _ = require('lodash');
const db = require('../database')
let router = express.Router();

let storeMovie = (movie) => {
  db.findOrCreate({
    where: { tmdb_id: movie.id },
    defaults: {
      title: movie.title,
      year: movie.imdb_info.year,
      imdb_rating: movie.imdb_info.rating,
      metascore: movie.imdb_info.metascore,
      rated: movie.imdb_info.rated,
      poster_url: movie.imdb_info.poster,
      runtime: movie.runtime,
      watched: false,
      imdb_id: movie.imdb_id,
      tmdb_id: movie.id
    }
  });
}

let updateWatched = (req, res) => {
  db.update({ watched: req.body.watched }, { where: { tmdb_id: req.body.tmdb_id } });
  res.send();
}

let loadMovies = () => {
  movieAPI.getNewMovies((movs) => {
    movs.forEach((movie) => {
      movieAPI.getMoreDangDetails(movie.id, (deets) => {
        storeMovie(deets);
      });
    });
  });
};

loadMovies(); //initial loading call before pages can be serverd

let getMovies = (req, res) => {
  console.log('Serving GET request at /movies')
  db.findAll().then(movies => res.send(movies))
};

let addMovie = (req, res) => {
  console.log('Serving POST request at /movie')
  movieAPI.searchMovie(req.body.query, (movie) =>{
    storeMovie(movie);
    res.send();
  })
};

router.get('/movies', getMovies);
router.get('/load', loadMovies);
router.post('/movie', addMovie);
router.post('/update', updateWatched);

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use('/', router);

app.listen(3000, function (){ 
  console.log('MovieList app listening on port 3000!') 
});
