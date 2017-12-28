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
      callback(result);
    })
  },
  insertOne: (movie, callback) => {
    // let {title, overview, release_date, popularity, vote_average} = movie;
    var query = `INSERT INTO movies VALUES (NULL, "${movie[1]}", "${movie[2]}", "${movie[3]}", ${movie[4]}, ${movie[5]}, FALSE)`;
    connection.query(query, (error, result) => {
      if (error) { console.log('insertOne Error: ', error); }
      callback(result);
    })
  },
  insertMany: (movies, callback) => {
    movies.forEach((movie) => {
      module.exports.insertOne(movie, callback);
    });
  }
}

module.exports.connection = connection;
// module.exports = movielist;