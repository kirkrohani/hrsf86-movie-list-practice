// // var Sequelize = require('sequelize');
// // var db = new Sequelize('movielist', 'root', '', { dialect: 'mysql' });

// // var MovieList = db.define('MovieList', {
// //   id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
// //   title: Sequelize.STRING,
// //   movieId: Sequelize.INTEGER,
// //   releaseDate: Sequelize.DATEONLY,
// //   description: Sequelize.STRING
// // })

// // MovieList.sync();

// var mysql = require('mysql');

// var connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'movielist'
// });

// connection.connect(error => {
//   if (error) { console.log(error); }
//   console.log('Connected!');
// });


// module.exports.connection = connection;
// module.exports.movieList = movieList;