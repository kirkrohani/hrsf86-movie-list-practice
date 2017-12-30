var mysql = require('mysql');


var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'moviesDB'
});

connection.connect(function(err) {
  if (err) {
	throw (err);
  }
  console.log('Connected!');
  // var queryStr = "INSERT INTO movies (title, rating, overview) VALUES ()"

});

module.exports = connection;