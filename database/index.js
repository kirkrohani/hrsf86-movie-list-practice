// import {initSession, executeQuery, executeTransaction} from 'my-sql';

const mysql = require('mysql');

exports.connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    database : 'movies'
  });
   
//   exports.connection.connect();

//   exports.connection.connect(function(err) {
//     if (err) {
//       console.error('error connecting: ' + err.stack);
//       return;
//     }
   
//     console.log('connected as id ' + connection.threadId);
//   });

exports.selectAll = (callback) => {
    exports.connection.query('SELECT * FROM now_playing', (err, data) => {
        if (err) {
            callback(err);
        } else {
            callback(err, data);
        }
    });
};

var makeQueryString = (movie) =>{ return `(NULL, '${movie[0]}', '${movie[1]}', '${movie[3]}', '${movie[2]}')`};
var insertSql = `INSERT INTO now_playing (id, title, overview, vote_average, release_date) VALUES `;

exports.insertMany = (movies, callback) => {
    new Promise((resolve, reject) => {
        var queryStrings = [];
        movies.forEach(movie => queryStrings.push(makeQueryString(movie)));
        var qS = insertSql + queryStrings.join(',');
        console.log(qS);
        resolve(qS);
    }).then((qS) => {
        exports.connection.query(qS, (err, data) => {
            if (err) {
                callback(err);
            } else {
                callback(err, data);
            }
        });
    });
};

exports.insertOne = (movie, callback) => {
    new Promise((resolve, reject) => {
        resolve(insertSql + makeQueryString(movie));
    })
    .then((qS) => {
        exports.connection.query(qS, (err, data) => {
            if (err) {
                callback(err);
            } else {
                callback(err, data);
            }
        });
    });      
};

// selectAll = (cb) => {
//     mySql.executeQuery('SELECT * FROM now_playing')
//         .then((result)=>{
//             cb(null, result);
//         })
//         .catch((err)=>{
//             console.error('error');
//         });
// };

//'model' 

//open sql connection
//query db

//functions
//insertmany
//GET from API, INSERT INTO movies

//selectall
//SELECT * FROM MOVIES

//insertone
//POST from VIEW, GET from API, INSERT INTO movies