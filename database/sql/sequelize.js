const Sequelize = require('sequelize');
module.exports.db = new Sequelize('movies', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    dialectOptions: { decimalNumbers: true }
});

module.exports.Movies = module.exports.db.define('Movies', {
    id: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    title: Sequelize.STRING,
    realease_date: Sequelize.DATEONLY,
    poster_path: Sequelize.STRING,
    vote_average: Sequelize.FLOAT,
    overview: Sequelize.TEXT
});

// Movies.create({
//     title: 'Star Wars: The Last Jedi',
//     realease_date: '2017-12-13',
//     poster_path: '/xGWVjewoXnJhvxKW619cMzppJDQ.jpg',
//     vote_average: '7.4',
//     overview: `Rey develops her newly discovered abilities with the guidance 
//                 of Luke Skywalker, who is unsettled by the strength of her powers. 
//                 Meanwhile, the Resistance prepares to do battle with the First Order.`
// });

// module.exports.db.sync();
// db.sync().then(() => {
//     Movies.findAll().then((movies) => {
//         movies.map((movie) => console.log(movie.dataValues));
//     })
// })