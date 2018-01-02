const Sequelize = require('sequelize');
const db = new Sequelize('movieDB', 'root', null, {
  host: 'localhost',
  dialect: 'mysql'//,
});

const Movie = db.define('Movie', {
  title: Sequelize.TEXT,
  year: Sequelize.INTEGER,
  imdb_rating: Sequelize.TEXT,
  metascore: Sequelize.TEXT,
  rated: Sequelize.CHAR(10),
  poster_url: Sequelize.TEXT,
  runtime: Sequelize.INTEGER,
  watched: Sequelize.BOOLEAN,
  imdb_id: Sequelize.CHAR(20),
  tmdb_id: {
    type: Sequelize.INTEGER,
    primaryKey:true
  }
});

Movie.sync()
  .then(() => Movie.findOrCreate({
    where: { tmdb_id: 329 },
    defaults: {
      title: 'Jurassic Park',
      year: 1993,
      imdb_rating: 8.1,
      metascore: 68,
      rated: 'PG-13',
      poster_url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_SX300.jpg',
      runtime: 127,
      watched: true,
      imdb_id: 'tt0107290',
      tmdb_id: 329
    }
  }));

module.exports = Movie;