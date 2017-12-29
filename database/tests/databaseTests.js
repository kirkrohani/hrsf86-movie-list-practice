/*
* This Test file is provided to you to be able to be able to test your database functions independently
* of the rest of your application. You will need to build out the db function inside of /database/index.js
* That file is required here below and you will use the exported functions here to test.
* You may run this file by simply going to a terminal window and typing 'node databaseTests.js'
*/

const movieDB = require('../index.js');

let newMovie = [null, 'Test Movie', '2017-11-11', 'This is the best movie ever!', 0.0, 0, false];
let movies = [[null, 'a', '2017-11-12', 'aa', 0.1, 1, false], [null, 'b', '2017-11-13', 'bb', 0.2, 2, false], [null, 'c', '2017-11-14', 'cc', 0.3, 3, false]];
// let movies = [];

movieDB.insertMany(movies, (err) => {
  if(err) {
    console.log('insertMany: Error inserting to DB', err);
  } else {
    console.log('insertMany: Successfully inserted data into DB: ', movies);
  }
});


movieDB.selectAll( (err, movieDataFromDB) => {
  if(err) {
    console.log('selectAll: Error selecting from DB', err);
  } else {
    console.log('selectAll: Successfully retrieved data from DB: ', movieDataFromDB);
  }
});

movieDB.insertOne(newMovie, (err) => {
  if(err) {
    console.log('insertOne: Error inserting to DB', err);    
  } else {
    console.log('insertOne: Successfully inserted data into DB: ', newMovie);
  }
});

