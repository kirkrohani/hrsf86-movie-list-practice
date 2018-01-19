const axios = require('axios');
const MOVIE_API_KEY = require("./api_key.js").modules.MOVIE_API_KEY
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

const parseMovie = (apiData) => {
	return [
		apiData.title,
		apiData.tagline,
		apiData.release_date,
		Math.round(apiData.vote_average / 2)
	]
}
//schema peramemeters
	// title = apiData.title 
	// stars = apiData.vote_average  Math.round(num/2) to get stars
	// released = apiData.release_date 
	// stars = apiData.tagline = description "1999-10-12"



module.exports = {
	getNewMovie: getNewMovie,
	parseMovie: parseMovie
}

