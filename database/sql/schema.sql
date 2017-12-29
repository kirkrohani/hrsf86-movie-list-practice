CREATE DATABASE movies;

USE movies;

CREATE TABLE list (
	id int AUTO_INCREMENT,
	title VARCHAR(20), 
	overview VARCHAR(255),
	PRIMARY KEY(id)
);