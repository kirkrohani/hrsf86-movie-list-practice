CREATE DATABASE myMovies;

USE myMovies;

CREATE TABLE movies (
  id int NOT NULL AUTO_INCREMENT,
  title VARCHAR(256),
  releaseDate DATE,
  score int,
  PRIMARY KEY (id)
);