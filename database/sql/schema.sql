CREATE DATABASE movielist;

USE movielist;

CREATE TABLE movies(
  movieID INTEGER AUTO_INCREMENT,
  title TEXT,
  release_date DATE,
  overview TEXT,
  popularity INT,
  vote_average INT,
  watched BOOLEAN,
  PRIMARY KEY (movieID)
);