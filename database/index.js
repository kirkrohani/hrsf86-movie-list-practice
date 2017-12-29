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

var makeQueryString = (movie) =>{ return `(NULL, '${movie.title.replace(/[’']/g, "''")}', '${movie.overview.replace(/[’']/g, "''")}', ${movie.vote_average}, '${movie.release_date.replace(/[’']/g, "''")}')`};
var insertSql = `INSERT IGNORE INTO now_playing (id, title, overview, vote_average, release_date) VALUES `;

exports.insertMany = (movies, callback) => {
    
        var queryStrings = [];
        movies.forEach(movie => queryStrings.push(makeQueryString(movie)));
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
    var qS = insertSql + makeQueryString(movie);
    return new Promise((resolve, reject) => {
        exports.connection.query(qS, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    })
    .catch(err => {
        console.log('error in insertOne');
    });      
};