const helpers = require('/database-helpers.js');
const movies = require('../lib/movieAPI');

module.exports = {
  
  movies: {
    
    get: function(req, res) {
      helpers.movies.selectAll().then((movies) => {
          res.status(200).send(movies);
        })
    },

    post: function(req, res) {
      movies.getMovieDetails(req.body.title).then((movie) => (
          helpers.movies.insertMovie(movie)
      )).then(() => (
          res.status(201).end()
        ))
    }
  }
};
