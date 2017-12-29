CREATE DATABASE movieList;

USE movieList;

CREATE TABLE movies (
  id int NOT NULL AUTO_INCREMENT,
  title varchar(30) NOT NULL,
  release_date varchar(20) NOT NULL,
  vote_average DECIMAL(3, 1) NOT NULL,
  overview TEXT NOT NULL,
  watched BOOLEAN NOT NULL DEFAULT 0,
  PRIMARY KEY (id)
);

-- CREATE TABLE moviesWatched (
--   id int NOT NULL,
--   title varchar(30) NOT NULL,
--   release_date varchar(20) NOT NULL,
--   vote_average DECIMAL(3, 1) NOT NULL,
--   overview VARCHAR(100) NOT NULL
-- );