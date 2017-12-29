var models = require('./models');
const path = require('path');
const API = require('../lib/movieAPI');
const model = require('../database/index.js');

module.exports = {
    movies: {
        get: (req, res) => {
            model.selectAll((movies) => {
                console.log(movies[0].dataValues);
                console.log('movies', movies);
                res.send(movies);
            });
            // module.exports.load.get((movies) => {
            // });
        },

        post: (req, res) => {
            model.insertOne(req.body);
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
        }
    }
}