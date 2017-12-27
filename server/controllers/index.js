const model = require('../model');
const movies = require('../../lib/movieAPI');

module.exports = {
  
  movies: {
    
    get: function(req, res) {

      model.movies.selectAll()

        .then((movies) => {
          res.status(200).send(movies);
        })

        .catch((err) => {
          res.status(400).send('Bad Request');
        });
    },

    post: function(req, res) {
      
      movies.getMovieDetails(req.body.title)

        .then((movie) => (
          model.movies.insertOne(movie)
        ))

        .then(() => (
          res.status(201).end()
        ))

        .catch((err) => {
          console.error(err.message);
          res.status(400).send('Bad Request');
        });
    }
  },

  load: {
    
    get: function(req, res) {

      movies.load()

        .then((movies) => (
          model.movies.insertMany(movies)
          ))
        
        .then(() => {
          res.status(200).end();
        })

        .catch((err) => {
          res.status(503).send('Server unable to retrieve Movies');
        });
    } 
  },

  watched: {

    patch: function(req, res) {
      console.log(req.body);
      model.movies.updateWatched(req.body.id, req.body.watched)

        .then(() => {
          res.status(200).end();
        })

        .catch((err) => {
          res.status(400).send('Serve unable to modify movie attribute');
        })
    }
  }
};
