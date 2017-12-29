DROP DATABASE IF EXISTS movieDB;
CREATE DATABASE movieDB;
USE movieDB;
CREATE TABLE movies (
  id INT NOT NULL AUTO_INCREMENT,
  title TEXT,
  year YEAR,
  imdb_rating FLOAT,
  metascore INT, 
  rated VARCHAR(10),
  poster_url TEXT,
  runtime INT,
  watched BIT DEFAULT 0,
  imdb_id VARCHAR(20),
  tmdb_id VARCHAR(20),
  PRIMARY KEY (id)
);

INSERT INTO movies 
  VALUES (NULL, 'Jurassic Park', 1993, 8.1, 68, 'PG-13', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_SX300.jpg', 127, 1, 'tt0107290', '329');
/*  Execute this file from the command line by typing:
 *    mysql -u root < sql/schema.sql
 *  to create the database and the tables.*/
