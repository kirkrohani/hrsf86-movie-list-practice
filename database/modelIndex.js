var db = require('./index.js');

module.exports = {

  movies: {
  	get: (callback) => {
  	  var queryStr = 'select * FROM movies';
  	  db.query(queryStr, function(err, results) {
  	  	callback(err, results);
  	  })
  	},

  	post: (params, callback) => {

  	  // var titleVal = params[0];
  	  // var isInDB = db.query(`SELECT * FROM movies WHERE title = ${titleVal}`);
  	  // if (db.num)

  	  var queryStr = 'INSERT INTO movies (title, rating, overview) VALUES ?';
  	  db.query(queryStr, params, function(err, results) {
  	  	callback(err, results);
  	  });
  	}
  }

}