var mysql = require('mysql');
var movieAPI = require('../lib/movieAPI.js');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'moviedb'
});

connection.connect();

module.exports = {
  get: (callback) => {
    var movies = [];
    var queryString = 'SELECT * FROM movies';
    new Promise((resolve, reject) => {
      connection.query(queryString, [], (err, rows, fields) => {
        if(err) {
          reject(err);
        } else {
          resolve(rows);
        }
      })
    })
    .then((rows) => {
      // console.log('db query rows:', rows);
      rows.forEach((row) => {
        movies.push(row);
      });
      callback(movies);
    })
    .catch((err) => {
      console.error('error in query:', err);
    });
  },

  load: (callback) => {
    var movies = [];
    var insertPromises = [];
    movieAPI.load(body => {
      // store movies from api call locally to avoid a post-insert query
      movies = body.results;
      // create promise for each insert and push into array
      movies.forEach(movie => {
        var insertString = `INSERT IGNORE INTO movies
                          (id, title, release_date, poster_path, overview)
                          VALUES
                          (?, ?, ?, ?, ?)`;
        var insertArgs = [movie.id, movie.title, movie.release_date, movie.poster_path, movie.overview];
        var promise = new Promise((resolve, reject) => {
          connection.query(insertString, insertArgs, (err, rows, fields) => {
            if(err) {
              reject(err);
            } else {
              resolve();
            }
          })
        });
        insertPromises.push(promise);
      });
      // now do promiseall
      Promise.all(insertPromises)
        .then(console.log('done with', insertPromises.length, 'inserts'))
        // .then(callback(movies))
        .then(callback())
        .catch(reason => {console.error('error on inserts:', reason);});
    });// end of movieAPI.load
  },
  post: (movie, callback) => {
    var postString = `INSERT INTO movies
                      (title, release_date, poster_path, overview)
                      VALUES
                      (?, ?, ?, ?)`;
    var postArgs = [movie.title, movie.release_date, movie.poster_path, movie.overview];
    var promise = new Promise((resolve, reject) => {
      connection.query(postString, postArgs, (err, rows, fields) => {
        if(err) {
          reject(err);
        } else {
          resolve();
        }
      })
    })
    .then(callback())
    .catch(reason => {console.error('error on post:', reason);});
  }
};
