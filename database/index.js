var mysql = require('mysql');

var db = mysql.createConnection({
  // host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'movieList'
});

db.connect(function(err) {
  if (err) {
    throw err;
  }
  console.log('MySQL connected!')
});

db.insertOne = function(movieParams, callback) {
  var queryStr = 'INSERT INTO movies (title, release_date, vote_average, overview) values (?, ?, ?, ?)';
  db.query(queryStr, movieParams, function(err) {
    callback(err);
  })
}

db.insertMany = function(movies, callback) {
  for (var i = 0; i < movies.length; i++) {
    var queryStr = 'INSERT INTO movies (title, release_date, vote_average, overview) values (?, ?, ?, ?)';
    db.query(queryStr, movies[i], function(err) {
      callback(err);
    })
  }
}

db.selectAll = function(callback) {
  var queryStr = 'SELECT * FROM movies';
  db.query(queryStr, function(err, results) {
    callback(err, results);;
  })
}

// db.updateOne = function(id, callback) {
//   var queryStr = 'UPDATE movies SET watched = !watched WHERE id = ?'
//   db.query(queryStr, [id], function(err) {
//     callback(err);
//   })
// }

module.exports = db;