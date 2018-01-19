/*
* This Test file is provided to you to be able to be able to test your database functions independently
* of the rest of your application. You will need to build out the db function inside of /database/index.js
* That file is required here below and you will use the exported functions here to test.
* You may run this file by simply going to a terminal window and typing 'node databaseTests.js'
*/

const movieDB = require('../index.js');

let newMovie = ['Movie', 'This is the best movie ever!', '2017-11-11', 0];
let movies = [
              ['test2', 'not the greatest','2001-12-12', 2 ],
              ['test3', 'not the best','2001-12-12', 3 ],
              ['test4', 'not even okay','1997-11-22', 1 ],
              ['test5', 'best so far','1997-11-22', 4 ]
              ];

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

