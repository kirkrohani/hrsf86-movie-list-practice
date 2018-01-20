const axios = require('axios');
const MOVIE_API_KEY = require("./api_key.js").modules.MOVIE_API_KEY

//-------------FORMATE FOR now_playing
//`https://api.themoviedb.org/3/movie/now_playing?api_key=${MOVIE_API_KEY}&language=en-US&page=1`
const getNewMovie = (callback) => {
	axios.get(`https://api.themoviedb.org/3/movie/76341?api_key=${MOVIE_API_KEY}`)
		.then( (results) => {
			callback(null, results.data)
		})
		.catch( (error) => {
			callback(error, null)
		})
}
//tagline becomes overview for now_playing, title becomes origional_title
const parseMovie = (apiData) => {
	return [
		//apiData.origional_title
		apiData.title,
		//apiData.overview,
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

//----------------FOR NOW PLAYING
 // {
 //      "poster_path": "/e1mjopzAS2KNsvpbpahQ1a6SkSn.jpg",
 //      "adult": false,
 //      "overview": "From DC Comics comes the Suicide Squad, an antihero team of incarcerated supervillains who act as deniable assets for the United States government, undertaking high-risk black ops missions in exchange for commuted prison sentences.",
 //      "release_date": "2016-08-03",
 //      "genre_ids": [
 //        14,
 //        28,
 //        80
 //      ],
 //      "id": 297761,
 //      "original_title": "Suicide Squad",
 //      "original_language": "en",
 //      "title": "Suicide Squad",
 //      "backdrop_path": "/ndlQ2Cuc3cjTL7lTynw6I4boP4S.jpg",
 //      "popularity": 48.261451,
 //      "vote_count": 1466,
 //      "video": false,
 //      "vote_average": 5.91
 //    },




module.exports = {
	getNewMovie: getNewMovie,
	parseMovie: parseMovie
}

