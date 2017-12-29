var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'movielist'
});

connection.connect(error => {
  if (error) { console.log(error); }
  console.log('Connected!');
});

module.exports = {
  selectAll: (callback) => {
    var query = 'SELECT * FROM movies';
    connection.query(query, (error, result) => {
      if (error) { console.log('selectAll Error: ', error); }
      if (callback) { callback(result); }
    })
  },
  insertOne: (movie, callback) => {
    var query = `INSERT INTO movies VALUES (NULL, "${movie.title}", "${movie.release_date}", "${movie.overview}", ${movie.popularity}, ${movie.vote_average}, FALSE)`;
    connection.query(query, (error, result) => {
      if (error) { console.log('insertOne Error: ', error); }
      if (callback) { callback(result); }
    })
  },
  insertMany: (movies, callback) => {
    movies.forEach((movie) => {
      module.exports.insertOne(movie);
      if (callback) { callback(); }
    });
  },
  toggleWatched: (movie, callback) => {
    var query = `UPDATE movies SET watched = !watched WHERE movieID = ${movie.movieID}`;
    connection.query(query, (error, result) => {
      if (error) { console.log('toggleWatched Error: ', error); }
      if (callback) { callback(result); }
    });
  }
}

module.exports.connection = connection;
// module.exports = movielist;