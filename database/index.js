const Sequelize = require('sequelize');
const db = new Sequelize('movieDB', 'root', null, {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

const movie = sequelize.define('movie', {
  id: Sequelize.INTEGER,
  title: Sequelize.TEXT,
  year: Sequelize.STRING,
  imdb_rating: Sequelize.FLOAT,
  metascore: Sequelize.INTEGER,
  rated: Sequelize.CHAR(10),
  poster_url: Sequelize.TEXT,
  runtime: Sequelize.INTEGER,
  watched: Sequelize.BOOLEAN,
  imdb_id: Sequelize.CHAR(20),
  tmdb_id: Sequelize.CHAR(20)
});

db.sync()
  .then(() => User.create({
    username: 'janedoe',
    birthday: new Date(1980, 6, 20)
  }))
  .then(jane => {
    console.log(jane.toJSON());
  });