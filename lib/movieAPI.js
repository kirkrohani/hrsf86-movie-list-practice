// import { log } from 'util';

const request = require('request');

module.exports.getMovie = (cb) => {
    request('https://api.themoviedb.org/3/movie/now_playing?api_key=98591d1b58f77bdd90683fb41601cd4a&language=en-US', 
        (err, res, body) => {
            return new Promise ((resolve, reject) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(body);
                }
            }).then(cb(body));
        }
    )
}