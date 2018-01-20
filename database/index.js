const mysql = require('mysql');
const movieAPI = require('../lib/movieAPI.js');

console.log(movieAPI.parseMovie)

var con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'movieDB'
});

//---------------------------do I need this kind of thing?
// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT name, address FROM customers", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//   });
// });
//---------------------------It doesn't seems so.
var selectAll = (callback) => {
	var searchAll = 'SELECT * FROM movies';

	con.query(searchAll, (error, movieDatabase) => {
		if(error) {
			callback(error, null); //need null?
		} else {
			callback(null, movieDatabase);
		}
	});

}

var insertOne = (movieData, callback) => {
	var insertOneStatement = 'INSERT INTO movies (title, description, released, stars) VALUES (?,?,?,?)';

	con.query(insertOneStatement, movieData, (error) => {
		if(error) {
			callback(error, null) //null?
		} else {
			callback(null)
		}
	//con.end() ?
	})
}

var insertMany = (movieData, callback) => {
	var insertManyStatment = 'INSERT INTO movies (title, description, released, stars) VALUES ?';
	//UNCOMMENT FOR API DATA
	//var parseData = movieAPI.parseMovie(movieData)

	con.query(insertManyStatment, [movieData]/*[parseData]*/, (error) => { 
		if(error) {
			callback(error, null)
		} else {
			callback(null)
		}
	//con.end()
	})
}


module.exports = {
	selectAll: selectAll,
	insertOne: insertOne,
	insertMany: insertMany
}