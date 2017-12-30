// window.MOVIE_API_KEY = '777049894bda8ce6d1f5e2098a1f0d9d';

const request = require('request');
const fetch = require("isomorphic-fetch");
const url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=777049894bda8ce6d1f5e2098a1f0d9d&page=1&language=en-US'
module.exports = {

	getMovies: (cb) => {
		
		  request(url, 
			(err, res, body) => {
			  if (err) {
			  	console.log(err);
			  } else {
			  	cb (err, JSON.parse(res.body));
			  }
			})
	},

	getSingleMovie: (query, cb) => {
		request(`https://api.themoviedb.org/3/search/movie?api_key=777049894bda8ce6d1f5e2098a1f0d9d&language=en-US&query=${query}&page=1&include_adult=false`, 
			(err, res, body) => {
			  if (err) {
			  	console.log(err);
			  } else {
			  	cb (err, JSON.parse(res.body));
			  }
			})
	}
	

}
