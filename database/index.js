// import {initSession, executeQuery, executeTransaction} from 'my-sql';

const mysql = require('mysql');

exports.connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    database : 'movies'
  });
   
exports.selectAll = (callback) => {
    exports.connection.query('SELECT * FROM now_playing', (err, data) => {
        if (err) {
            callback(err);
        } else {
            callback(err, data);
        }
    });
};

var backdropIfNone = '8uO0gUM8aNqYLs1OsTBQiXu0fEv.jpg';

var makeQueryString = (movie, index) =>{ 
    if (!movie.overview) {
        return `(NULL, '${movie.title.replace(/[’']/g, "''")}', '${backdropIfNone}')`;
    } else {
        return `(${index + 1}, '${movie.title.replace(/[’']/g, "''")}', '${movie.overview.replace(/[’']/g, "''")}', ${movie.vote_average}, '${movie.release_date}', '${movie.backdrop_path || backdropIfNone}')`;
    }
};
var insertSql = `INSERT IGNORE INTO now_playing (id, title, overview, vote_average, release_date, backdrop_path) VALUES `;
var insertSqlOne = `INSERT IGNORE INTO now_playing(id, title, backdrop_path) VALUES`;

exports.insertMany = (movies, callback) => {
    
        var queryStrings = [];
        movies.forEach((movie, index) => queryStrings.push(makeQueryString(movie, index)));
        var qS = insertSql + queryStrings.join(',') + ';';
        // console.log('query string is ', qS);  
        exports.connection.query(qS, (err, data) => {
            if (err) {
                callback(err);
            } else {
                callback(err, data);
            }
        });
};

exports.insertOne = (movie, callback) => {
    var qS = insertSqlOne + makeQueryString(movie);
    console.log(qS, 'qS for post');
    exports.connection.query(qS, (err, data) => {
            if (err) {
                callback(err);
            } else {
                callback(err, data);
            }
        });  
};