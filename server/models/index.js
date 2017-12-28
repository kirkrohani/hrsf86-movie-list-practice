// var db = require('../../database/index.js');

// module.exports = {
//   movielist = {
//     get: (callback) => {
//       var query = 'SELECT * FROM movies';
//       db.query(query, (error, result) => {
//         callback(result);
//       })
//     },
//     post: (params, callback) => {
//       var query = 'INSERT INTO movies (title, release_date, overview, popularity, vote_average, watched) VALUES ?';
//       db.query(query, params, (error, result) => {
//         callback(result);
//       })
//     }
//   }
// }