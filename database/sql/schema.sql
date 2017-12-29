CREATE DATABASE movie_list;

USE movie_list;

CREATE TABLE movies (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  title CHAR,
  release_date CHAR,
  rating INT,
  overview CHAR,
  image_link CHAR,
  watched_bool CHAR
);
