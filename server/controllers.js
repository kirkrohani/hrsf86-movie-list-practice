const path = require('path');
const API = require('../lib/movieAPI');
const model = require('../database/index.js');

module.exports = {
    movies: {
        get: (req, res) => {
            model.selectAll((movies) => {
                res.send(movies);
            });
            // module.exports.load.get((movies) => {
            // });
        },

        post: (req, res) => {
            console.log('req.body', req.body);
            module.exports.load.getOne(req.body);
            res.send(req.body);
        }
    },

    load: {
        get: (req, res) => {
            API.getMovie((err, data) => {
                return new Promise ((resolve, reject) => {
                    if (err) {
                        reject(err);
                    } else {
                        let parsedData = JSON.parse(data);
                        movies = parsedData.results;
                        resolve(movies);
                    }
                }).then((newMovies) => {
                    model.insertMany(newMovies);
                    res.send();
                }).catch((err) => {
                    console.log('API fetch error', err);
                });
            });
        },

        // crazy%20stupid%20love

        getOne: (query) => {
            query = query.title.split(' ').join('%20');
            console.log('query', query);
            API.getOneMovie(query, (data) => {
                console.log('fetched data', data);
                let parsedData = JSON.parse(data);
                let movie = parsedData.results[0];
                model.insertOne(movie);
            });
        }
    }
}