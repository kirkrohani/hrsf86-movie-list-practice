/*
* This Test file is provided to you to be able to be able to test your database functions independently
* of the rest of your application. You will need to build out the db function inside of /database/index.js
* That file is required here below and you will use the exported functions here to test.
* You may run this file by simply going to a terminal window and typing 'node databaseTests.js'
*/

const movieDB = require('../index.js');

let newMovie = ['Test Movie', '2017-11-11', 9.0, 'testing...', 0];
let movies = [
  ['Test Movie 1', '2017-11-11', 9.0, 'testing...', 0],
  ['Test Movie 2', '2017-11-11', 9.0, 'testing...', 0],
  ['Test Movie 3', '2017-11-11', 9.0, 'testing...', 0],
  ['Test Movie 4', '2017-11-11', 9.0, 'testing...', 0],
];

movieDB.insertOne(newMovie, (err) => {
  if(err) {
    console.log(err);
    console.log('Error inserting to DB');    
  } else {
    console.log('Successfully inserted data into DB: ');
  }
});

movieDB.insertMany(movies, (err) => {
  if(err) {
    console.log('Error inserting to DB');
  } else {
    console.log('Successfully inserted data into DB: ');
  }
});

movieDB.selectAll( (err, movieDataFromDB) => {
  if(err) {
    console.log('Error selecting from DB');
  } else {
    console.log('Successfully retrieved data from DB: ', movieDataFromDB);
  }
});




