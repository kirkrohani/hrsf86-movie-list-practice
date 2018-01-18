const mysql = require('mysql');
const MOVIE_API_KEY = require('../lib/api_key.js').modules.MOVIE_API_KEY

var con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'movieDB'
});
//do I need this?
// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT name, address FROM customers", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//   });
// });

var selectAll = (callback) => {
	var searchQuery = 'SELECT * FROM movies';

	con.query(searchQuery, (error, movieDatabase) => {
		if(error) {
			callback(error, null); //need null?
		} else {
			callback(null, movieDatabase);
		}
	});

}

var insertOne = (movieData, callback) => {
	var insertStatement = 'INSERT INTO movies (title, description, released, stars) VALUES ?';

	let newMovie = ['Test Movie', 'This is the best movie ever!', '2017-11-11', 0];

	con.query(insertStatement, newMovie, (error) => {
		if(error) {
			callback(error, null) //null?
		} else {
			callback(null)
		}
	})
}

var insertMany = (movieData, callback) => {
	var insertManyStatement = 'INSERT INTO movies (title, description, relased, stars) VALUES'
}


module.exports = {
	selectAll: selectAll,
	insertOne: insertOne,
	insertMany: insertMany
}