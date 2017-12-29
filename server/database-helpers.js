//database helpers

//
var db = require('../database/index.js');


module.exports = {

  movies: {

    selectAll: function () {
      return db.selectAll()
    },

    insertMovie: function (movie) {

      let movieArray = [];
      movieArray[db.fields.id]          = movie.id;
      movieArray[db.fields.title]       = movie.title || null;
      movieArray[db.fields.year]        = movie.year || null;
      movieArray[db.fields.overview]    = movie.overview || null;
      movieArray[db.fields.rating]      = movie.rating || null;
      movieArray[db.fields.thumbnail]   = movie.thumbnail || null;
      movieArray[db.fields.genre]       = movie.genre || null;
      movieArray[db.fields.watched]     = movie.watched || 0;

      return db.insertMovie(movieArray);
    },

    insertMany: function(movies) {

      let moviesArray = movies.map((movie) => (
        [
          movie.id,
          movie.title || null,
          movie.year || null,
          movie.overview || null,
          movie.rating || null,
          movie.thumbnail || null,
          movie.genre || null,
          movie.watched || 0,
        ]
      ));

      console.log(moviesArray[0]);

      return db.insertMany(moviesArray);
    }

  }
  
};

