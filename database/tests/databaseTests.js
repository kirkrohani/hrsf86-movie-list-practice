/*
* This Test file is provided to you to be able to be able to test your database functions independently
* of the rest of your application. You will need to build out the db function inside of /database/index.js
* That file is required here below and you will use the exported functions here to test.
* You may run this file by simply going to a terminal window and typing 'node databaseTests.js'
*/

const movieDB = require('../index.js');

let newMovie = {
      title: 'Star Wars: The Last Jedi',
      realease_date: '2017-12-13',
      poster_path: '/xGWVjewoXnJhvxKW619cMzppJDQ.jpg',
      vote_average: '7.4',
      overview: `Rey develops her newly discovered abilities with the guidance 
                  of Luke Skywalker, who is unsettled by the strength of her powers. 
                  Meanwhile, the Resistance prepares to do battle with the First Order.`
  };

  let newMovie1 = {
    title: 'Star Wars: The Last Jedi',
    realease_date: '2017-12-13',
    poster_path: '/xGWVjewoXnJhvxKW619cMzppJDQ.jpg',
    vote_average: '7.4',
    overview: `Rey develops her newly discovered abilities with the guidance 
                of Luke Skywalker, who is unsettled by the strength of her powers. 
                Meanwhile, the Resistance prepares to do battle with the First Order.`
};

let movies = [newMovie, newMovie1];

// movieDB.insertMany(movies, (err) => {
//   if(err) {
//     console.log('Error inserting to DB');
//   } else {
//     console.log('Successfully inserted data into DB: ');
//   }
// });


movieDB.selectAll( (err, movieDataFromDB) => {
  if(err) {
    console.log('Error selecting from DB');
  } else {
    console.log('Successfully retrieved data from DB: ', movieDataFromDB);
  }
});

// movieDB.insertOne(newMovie, (err) => {
//   if(err) {
//     console.log('Error inserting to DB');    
//   } else {
//     console.log('Successfully inserted data into DB: ');
//   }
// });

