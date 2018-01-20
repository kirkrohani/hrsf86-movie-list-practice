/*
* This Test file is provided to you to be able to be able to test your database functions independently
* of the rest of your application. You will need to build out the db function inside of /database/index.js
* That file is required here below and you will use the exported functions here to test.
* You may run this file by simply going to a terminal window and typing 'node databaseTests.js'
*/

const movieDB = require('../index.js');

let newMovie = ['Confessions of a dangerous Mind', 'This is the best movie ever!', '1999-11-11', 5];
let movies = [
  ['Mean Girls',
   'better than you would think',
   '1997-12-05',
   4],
  ['Hackers',
   'sorta whatever',
   '1997-11-23',
   2],
  ['The Grey',
   'cold',
   '1998-03-21',
   3],
  ['Sunshine',
   'very cold',
   '1987-04-22',
   1],
  ['Ex Machina',
   'not quite as cold as those other two',
   '1999-09-13',
   4],
];

movieDB.insertMany(movies, (err) => {
  if(err) {
    console.log('Error inserting many to DB', err);
  } else {
    console.log('Successfully inserted many data into DB: ');
  }
});


movieDB.selectAll( (err, movieDataFromDB) => {
  if(err) {
    console.log('Error selecting from DB', err);
  } else {
    console.log('Successfully retrieved data from DB: ', movieDataFromDB);
  }
});

movieDB.insertOne(newMovie, (err) => {
  if(err) {
    console.log('Error inserting one to DB');    
  } else {
    console.log('Successfully inserted one  data into DB: ');
  }
});

