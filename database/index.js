const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'movies'
});

db.connect();

const fields = {
  id: null,
  title: null,
  year:null,
  overview: null,
  rating: null,
  thumbnail: null,
  genre: null,
  watched: null
};

const selectAllQuery = `
select * from movies`;

const selectOneQuery = `
select * from movies where title=?`;


const insertOneQuery = `
insert into 
  movies (
    id,
    title, 
    year,
    overview,
    rating,
    thumbnail,
    genre,
    watched
  )
values (?,?,?,?,?,?,?,?)
on duplicate key update id=id`;

module.exports = {
    //returns an array of movie arrays
    selectAll: function () {
      return new Promise((resolve, reject) => {
  
        db.query(selectAllQuery, (err, data) => {
          if (err) {
            console.error('Selection Error');
            return;
          }
  
          dataolve(res);
        })
      });
    },
  
    selectOne: function(title) {
      return new Promise((resolve, reject) => {
  
        db.query(selectOneQuery, [title], (err, data) => {
          if (err) {
            console.error('Selection Error');
            return;
          }
  
          resolve(data);
        })
      });
    },
  
    //takes a movie array
    insertOne: function (movie) {
      return new Promise((resolve, reject) => {
  
        db.query(insertOneQuery, movie, (err, res) => {
          if (err) {
            console.error('Insertion error' + err.message);
            return;
          }
  
          resolve();
  
        })
      })
    },
  
    //takes an array of movie arrays
    insertMany: function (movies) {
  
      return Promise.all(movies.map((movie) => (
        module.exports.insertOne(movie)
      )));
    },
    end: function() {
        db.end();
    }
};
//do something here for functionality of database, required for tests
//see tests file folder for more info - 