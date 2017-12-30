// window.MOVIE_API_KEY = '777049894bda8ce6d1f5e2098a1f0d9d';

const request = require('request');
const fetch = require("isomorphic-fetch");
const url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=777049894bda8ce6d1f5e2098a1f0d9d&page=1&language=en-US'
module.exports = {

	getMovies: (cb) => {
		// return new Promise((resolve, reject) => {
		  request(url, 
			(err, res, body) => {
			  if (err) {
			  	console.log(err);
			  } else {
			  	//console.log('body is ', body)
			  	//console.log('typeof is ', typeof body)
			  	cb(err, JSON.parse(res.body));
			  }
			})
	}
	
	// getMovies: (cb) => {
	// 	fetch(url)
	// 	  .then(function(data) {
	// 	    console.log('attmept 2 data is', data);
	// 	  }).catch(function(error) {
	// 	  	console.log(error);
	// 	  });
	// }

}
