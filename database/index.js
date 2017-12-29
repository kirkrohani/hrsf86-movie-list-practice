var mysql      = require('mysql');

var connection = mysql.createConnection({
  user     : 'root',
  password : '',
  database : 'movieList'
});
 
connection.connect();

// var queryDB = (queryStr, queryArgs, callback) => {
//   connection.query(queryStr, queryArgs, function (error, results) {
//     callback(error, results);
//   });
// }

var queryDBPromisey = (queryStr, queryArgs, resolve, reject) => {
  connection.query(queryStr, queryArgs, (error, results) => {
    if (error) {
      reject(error);
    } else {
      resolve(results);
    }
  });
}

module.exports = {
  insertMany: (movies) => {
    return new Promise((resolve, reject) => {
      var moviesArray = [];
      movies.forEach(({id, vote_average, title, poster_path, overview, release_date}) => {
        moviesArray.push([id, vote_average, title, poster_path, overview, release_date]);
      })

      var queryStr = 'INSERT into movies (id, vote_average, title, poster_path, overview, release_date) VALUES ? \
                    ON DUPLICATE key UPDATE id = id';

    // INSERT INTO users (username) VALUES (?) ON DUPLICATE key UPDATE username = username;
      queryDBPromisey(queryStr, [moviesArray], resolve, reject);
    });
  },

  selectAll: () => {
    return new Promise((resolve, reject) => {
      var queryStr = 'SELECT * FROM movies';
      var queryArgs = [];
      queryDBPromisey(queryStr, queryArgs, resolve, reject);
    })
  },

  insertOne: (newMovie) => {
    return new Promise((resolve, reject) => {
      var queryStr = 'INSERT into movies SET ?';
      queryDBPromisey(queryStr, newMovie, resolve, reject);
    });
  },

  updateWatched: (id, watchedState) => {
    return new Promise((resolve, reject) => {
      var queryStr = 'UPDATE movies SET watched=? WHERE id=?';
      var queryArgs = [watchedState, parseInt(id)];
      queryDBPromisey(queryStr, queryArgs, resolve, reject);
    });
  }
}

// const movies = [{ 
//        id: 376658,
//        vote_average: 6.7,
//        title: 'Love Beats Rhymes',    
//        poster_path: '/40DTqW72Igok7ilNJ5ju6HWYhpi.jpg',
//        overview: 'An aspiring hip-hop artist discovers the world of slam poetry.',
//        release_date: '2017-12-01' },
//      { 
//        id: 446354,
//        vote_average: 6.7,
//        title: 'The Post',
//        poster_path: '/5765ORvdKVX5bWmhEjjiOqLk3TH.jpg',
//        overview: 'A cover-up that spanned four U.S. Presidents pushed the country\'s first female newspaper publisher and a hard-driving editor to join an unprecedented battle between journalist and government. Inspired by true events.',
//        release_date: '2017-12-22' } ]

// module.exports.insertMany(movies, (error, results) => console.log('done', error, results));
// module.exports.selectAll((error, results) => console.log('found: ', results, error));

