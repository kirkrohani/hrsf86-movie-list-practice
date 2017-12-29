CREATE DATABASE movielist;

USE movielist;

CREATE TABLE movies(
  movieID INTEGER AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  release_date VARCHAR(11),
  overview VARCHAR(1000) NOT NULL,
  popularity INTEGER,
  vote_average INTEGER,
  watched BOOLEAN,
  PRIMARY KEY (movieID)
);