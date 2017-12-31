DROP DATABASE IF EXISTS movie_list;
CREATE DATABASE movie_list;

USE movie_list;

CREATE TABLE movies (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(40) NOT NULL,
  release_date VARCHAR(15),
  rating INT,
  overview VARCHAR(250),
  image_link VARCHAR(100),
  watched_bool BOOLEAN
);
