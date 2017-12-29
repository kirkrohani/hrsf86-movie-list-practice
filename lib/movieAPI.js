// import { log } from 'util';

const request = require('request');

module.exports = {
    getMovie: (cb) => {
        request('https://api.themoviedb.org/3/movie/now_playing?api_key=98591d1b58f77bdd90683fb41601cd4a&language=en-US', 
            (err, res, body) => {
                if (err) {
                    console.log('error from getMovie', err);
                } else {
                    cb(null, body);
                }
            }
        )
    },

    getOneMovie: (query, cb) => {
        request(`https://api.themoviedb.org/3/search/movie?api_key=98591d1b58f77bdd90683fb41601cd4a&language=en-US&query=${query}&page=1&include_adult=false`,
            (err, res, body) => {
                if (err) {
                    console.log('error from get one movie', err);
                } else {
                    cb(body);
                }
            }
        )
    }
};