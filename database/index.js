const connection = require('./sql/sequelize.js');
const controller = require('../server/controllers.js');

module.exports = {
    insertMany: (newMovies) => {
        newMovies.map((movie) => {
            // connection.db.sync().then(() => {
            connection.Movies.findOrCreate({
                where: {
                title: movie.title
                },
                defaults: {
                    title: movie.title,
                    realease_date: movie.release_date,
                    poster_path: movie.poster_path,
                    vote_average: movie.vote_average,
                    overview: movie.overview
                }
            }).spread((movies, created) => {
                // console.log(movies.get({
                //     plain: true
                // }))
                // console.log(created);
            })
            // });
        });
    },

    selectAll: (cb) => {
        connection.Movies.findAll().then((movies) => cb(movies));
    },

    insertOne: (movie) => {
        connection.Movies.create({
            title: movie.title,
            realease_date: movie.release_date,
            poster_path: movie.poster_path,
            vote_average: movie.vote_average,
            overview: movie.overview
        });
    }
}



