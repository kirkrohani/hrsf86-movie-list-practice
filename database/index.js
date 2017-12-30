var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'movieList'
});

connection.connect(function(error){
	if(error) {throw error;}
	console.log('CONNECTED TO THE DATABASE!');
});

movies = {
	get: (callback) => {
		var query = 'SELECT * FROM movies';
		connection.query(query, function(error, result) {
			callback(error, result);
		});
	},

	post: (parameters, callback) => {
		var query = 'INSERT INTO movies (title, release_date, overview, popularity, vote_average, watched) VALUES ?';
		connection.query(query, parameters, function(error, result) {
			callback(error, result);
		})
	},

	postNewMovie: (parameters, callback) => {
		var query = 'INSERT INTO movies (title, watched) VALUES (?, false)';
		connection.query(query, parameters, function(error, result) {
			callback(error, result);
		})
	},

	toggleWatched: (parameters, callback) => {
		var query = 'UPDATE movies SET watched = NOT watched WHERE (title = ?)';
		connection.query(query, parameters, function(error, result) {
			if(error) {throw error;}
			callback(error, result);
		})
	}
}

module.exports.connection = connection;
module.exports.movies = movies;