CREATE database moviesDB;

USE moviesDB; 

CREATE TABLE movies (
  id int NOT NULL AUTO_INCREMENT,
  title VARCHAR(100) NOT NULL,
  rating DECIMAL(2, 1),
  overview VARCHAR(1000) NOT NULL,
  PRIMARY KEY (id)
);