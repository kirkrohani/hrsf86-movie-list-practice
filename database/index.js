const mysql = require('mysql');
const MOVIE_API_KEY = require('../lib/api_key.js').modules.MOVIE_API_KEY

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
	//con.end()
	})
}

var insertMany = (movieData, callback) => {
	var insertManyStatment = 'INSERT INTO movies (title, description, relased, stars) VALUES ?';
	
	con.query(insertManyStatment, [...movieData], (error) => { //[...movieData] ? does it have to be destructured
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