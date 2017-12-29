var mysql = require('mysql');

var connection = mysql.createConnection({
	user: 'root',
	password: '',
	database: 'movies'
});
connection.connect(function(err) {
  if (err) {
  	throw err;
  }
  console.log('We are connected!');
});
connection.query(mysql, function(err, results) {
  if (err) {
  	throw err;
  }
  console.log('Result', result);
});
module.exports = connection;