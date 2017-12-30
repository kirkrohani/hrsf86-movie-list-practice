const axios = require('axios');

const getMovieAPI = (callback) => {
	axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=cf63f209ba41d00e7005a8d34c652e6f&language=en-US&page=1')
	.then(function(response) {
		var relevantData = [];
		response.data.results.forEach((entry) => {
			var movie = {};
			movie.title = entry.title;
			movie.description = entry.overview;
			movie.popularity = entry.popularity;
			movie.watched = false;
			relevantData.push(movie);
		});
		callback(relevantData);
	});
}

const searchMovieAPI = (query, callback) => {
	axios.get(`https://api.themoviedb.org/3/search/movie?api_key=cf63f209ba41d00e7005a8d34c652e6f&language=en-US&query=${query}`)
	.then(function(response) {
		var newEntry = response.data.results[0]
		var movie = {};
		movie.title = newEntry.title;
		movie.description = newEntry.overview;
		movie.popularity = newEntry.popularity;
		movie.watched = false;
		callback(movie);
	});
}

exports.getMovieAPI = getMovieAPI;
exports.searchMovieAPI = searchMovieAPI;