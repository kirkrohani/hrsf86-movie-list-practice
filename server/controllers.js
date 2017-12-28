var models = require('./models');
const path = require('path');
// var React = require('react');
// var ReactDOMServer = require('react-dom/server');
// var App = require('./../client/src/index.jsx');

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
            res.send(movies);
        },

        post: (req, res) => {
            movies.push(req.body);
            res.send(req.body);
        }
    }
}