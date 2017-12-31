const mysql = require('mysql');

var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'movie_list'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

var insertMany = function(movies, callback) {
  var queryString = 'INSERT IGNORE INTO movies (title, release_date, rating, overview, image_link, watched_bool) VALUES ?';
  con.query(queryString, [movies], function(err, result) {
    callback(err, result);
  });
}

var insertOne = function(movieArr, callback) {
  var queryString = 'INSERT INTO movies (title, release_date, rating, overview, image_link, watched_bool) VALUES (?, ?, ?, ?, ?, ?)';
  con.query(queryString, movieArr, function(err, result) {
    callback(err, result);
  });
}

var selectAll = function(callback) {
  con.query('SELECT * FROM movies', function(err, result) {
    callback(err, result);
  });
}

module.exports.insertMany = insertMany;
module.exports.insertOne = insertOne;
module.exports.selectAll = selectAll;