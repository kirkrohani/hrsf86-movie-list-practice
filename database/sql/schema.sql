CREATE DATABASE IF NOT EXISTS movieList;

USE movieList;

DROP TABLE movies;

CREATE TABLE movies (
	movieID INT NOT NULL AUTO_INCREMENT,
	title VARCHAR(255) NOT NULL,
	release_date VARCHAR(255),
	overview VARCHAR(900),
	popularity INT,
	vote_average INT,
	watched BOOLEAN,
	PRIMARY KEY (movieID)
);