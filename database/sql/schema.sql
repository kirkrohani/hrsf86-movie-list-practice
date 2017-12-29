DROP DATABASE movies;
CREATE DATABASE IF NOT EXISTS movies;
USE movies;

CREATE TABLE IF NOT EXISTS now_playing (
    id INT NOT NULL,
    title VARCHAR(40),
    overview VARCHAR(2000),
    vote_average INT NOT NULL,
    release_date VARCHAR(20),
    backdrop_path VARCHAR(120),
    PRIMARY KEY(id)
);