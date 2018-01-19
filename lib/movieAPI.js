const axios = require('axios');
const MOVIE_API_KEY = require("./api_key.js").modules.MOVIE_API_KEY

console.log(MOVIE_API_KEY)
//https://api.themoviedb.org/3/movie/76341?api_key={api_key}
const getNewMovie = (callback) => {
	axios.get(`https://api.themoviedb.org/3/movie/76341?api_key=${MOVIE_API_KEY}`)
		.then( (results) => {
			callback(null, results.data)
		})
		.catch( (error) => {
			callback(error, null)
		})
}

module.export = {
	getNewMovie: getNewMovie
}