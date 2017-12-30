CREATE DATABASE IF NOT EXISTS chat;

USE chat;

DROP TABLE IF EXISTS movies;

CREATE TABLE movies (
	movieID INT NOT NULL AUTO_INCREMENT,
	title TEXT,
	description TEXT,
	popularity INT,
	watched BOOLEAN,
	PRIMARY KEY (movieID)
);