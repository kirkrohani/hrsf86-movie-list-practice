var models = require('./models');
const path = require('path');
const API = require('../lib/movieAPI');

var movies = [
    {title: 'Mean Girls', year: '2012', rating: '8'},
    {title: 'Hackers', year: '2012', rating: '8'},
    {title: 'The Grey', year: '2012', rating: '8'},
    {title: 'Sunshine', year: '2012', rating: '8'},
    {title: 'Ex Machina', year: '2012', rating: '8'},
    {title: '50 Shades of Grey', year: '2012', rating: '8'}
  ];

module.exports = {
    movies: {
        get: (req, res) => {
            module.exports.load.get((movies) => {
                res.send(movies);
            });
        },

        post: (req, res) => {
            movies.push(req.body);
            res.send(req.body);
        }
    },

    load: {
        get: (cb) => {
            API.getMovie((data) => {
                let parsedData = JSON.parse(data);
                movies = parsedData.results;
                cb(movies);
            });
        }
    }
}