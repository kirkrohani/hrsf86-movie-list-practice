var db = require('./index.js');

module.exports = {

  movies: {
  	get: (callback) => {
  	  var queryStr = 'select DISTINCT title, rating, overview FROM movies';
  	  db.query(queryStr, function(err, results) {
  	  	callback(err, results);
  	  })
  	},

  	post: (params, callback) => {
  	  var queryStr = 'INSERT INTO movies (title, rating, overview) VALUES ?';
  	  db.query(queryStr, params, function(err, results) {
  	  	callback(err, results);
  	  });
  	}
  }

}