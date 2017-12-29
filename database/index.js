const connection = require('./sql/sequelize.js');
const controller = require('../server/controllers.js');

module.exports = {
    insertMany: (newMovies, cb) => {
        newMovies.map((movie) => {
            connection.db.sync().then(() => {
                connection.Movies.create({
                    title: movie.title,
                    realease_date: movie.release_date,
                    poster_path: movie.poster_path,
                    vote_average: movie.vote_average,
                    overview: movie.overview
                });
            });
        });
        cb();
    },

    selectAll: (cb) => {
        connection.Movies.findAll().then((movies) => {
            movies.map((movie) => {
                cb(null, movie.dataValues);
            });
        });
    },

    insertOne: (movie, cb) => {
        connection.db.sync().then(() => {
            connection.Movies.create({
                title: movie.title,
                realease_date: movie.release_date,
                poster_path: movie.poster_path,
                vote_average: movie.vote_average,
                overview: movie.overview
            });
        });
        cb();
    }
}



