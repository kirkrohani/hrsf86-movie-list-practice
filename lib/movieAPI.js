const request = require('request');
const Promise = require('bluebird');

const getRequest = (callback) => {
	request('https://api.themoviedb.org/3/movie/now_playing?api_key=cf63f209ba41d00e7005a8d34c652e6f&language=en-US&page=1', function(error, response, body) {
		if(error) {
			throw error;
		} else {
			callback(JSON.parse(response.body));
		}
	});
}

exports.getRequest = getRequest;