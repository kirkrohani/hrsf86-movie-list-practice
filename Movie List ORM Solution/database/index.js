var Sequelize = require('sequelize');

var connection = new Sequelize('chat', 'root', '', {dialect: 'mysql'});

var Movies = connection.define('movies', {
	movieID: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
	title: Sequelize.STRING,
	description: Sequelize.STRING,
	popularity: Sequelize.INTEGER,
	watched: Sequelize.BOOLEAN
}, {timestamps: false});

connection.sync();

exports.Movies = Movies;
