const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const movieAPI = require('../lib/movieAPI.js');
const db = require('../database/index.js');
const Sequelize = require('sequelize');


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/load', function(req, res) {
	movieAPI.getMovieAPI(function(result) {
		var flag = 0;
		result.forEach((entry) => {
			db.Movies.create(entry)
			flag++;
			if(flag === result.length) {
				res.sendStatus(200);
			}
			})
		})
});


app.get('/movies', function(req, res) {
	var movies = [];
	db.Movies.findAll()
	.then((movie) => {
		movie.forEach((entry) => {
			movies.push(entry.dataValues);
		})
	}).then(() => {
		res.json(movies);
	})
})

app.post('/movie', function(req, res) {
	db.Movies.findOne({where: {title: req.body.title}})
	.then((obj) => {
		if(obj) {
			obj.updateAttributes({
				watched: !obj.dataValues.watched,
			})
			res.sendStatus(201);
		} 
		else {
			movieAPI.searchMovieAPI(req.body.title, function(result) {
				db.Movies.create(result)
				.then(() => res.sendStatus(201));
			})
		}
	})
})

app.listen(3000, function () { console.log('MovieList app listening on port 3000!') });




