var mysql = require('mysql');

var con = mysql.createConnection({
  host: '127.0.0.1:3000',
  user: "root",
  database: 'myMovies'
})

con.connect() 


con.insertMany = function(movies, callback) {
  console.log('movies', movies)
  var queryStr = "INSERT INTO movies (title, releaseDate, score) VALUES(?, ?, ?)";
  con.query(queryStr, [movies], function(err, results) {
    // if (err) {callback(err)}
    console.log('number of records inserted: ', results);
    callback()
  })
}

con.selectAll = function(callback) {
  var queryStr = "SELECT * FROM movies";
  con.query(queryStr, function(err, results, fields) {
    // if(err) {callback(err)}
      console.log(results)
    callback(results)
  })
}

con.insertOne = function(newMovie, callback) {
  var queryStr = "INSERT INTO movies (title, releaseDate, score) VALUES(?, ?, ?)";
  con.query(queryStr, [newMovie], function(err, results) {
    // if (err) {callback(err)}
    callback()
  })
}
module.exports = con;