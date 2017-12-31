/*
* This Test file is provided to you to be able to be able to test your database functions independently
* of the rest of your application. You will need to build out the db function inside of /database/index.js
* That file is required here below and you will use the exported functions here to test.
* You may run this file by simply going to a terminal window and typing 'node databaseTests.js'
*/

const movieDB = require('../index.js');

let newMovie = { 
   id: 376658,
   vote_average: 6.7,
   title: 'Love Beats Rhymes',    
   poster_path: '/40DTqW72Igok7ilNJ5ju6HWYhpi.jpg',
   overview: 'An aspiring hip-hop artist discovers the world of slam poetry.',
   release_date: '2017-12-01' };

let movies = [{ 
   id: 376658,
   vote_average: 6.7,
   title: 'Love Beats Rhymes',    
   poster_path: '/40DTqW72Igok7ilNJ5ju6HWYhpi.jpg',
   overview: 'An aspiring hip-hop artist discovers the world of slam poetry.',
   release_date: '2017-12-01' },
  { 
   id: 446354,
   vote_average: 6.7,
   title: 'The Post',
   poster_path: '/5765ORvdKVX5bWmhEjjiOqLk3TH.jpg',
   overview: 'A cover-up that spanned four U.S. Presidents pushed the country\'s first female newspaper publisher and a hard-driving editor to join an unprecedented battle between journalist and government. Inspired by true events.',
   release_date: '2017-12-22' } ];


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

movieDB.insertOne(newMovie, (err) => {
  if(err) {
    console.log('Error inserting to DB');    
  } else {
    console.log('Successfully inserted data into DB: ');
  }
});

