--create new database to use
CREATE DATABASE IF NOT EXISTS moviedata;
--use that database
USE moviedata;
--create table
CREATE TABLE IF NOT EXISTS mymovies (
    uniqueId INTEGER,
    title VARCHAR(30),
    year VARCHAR(4),
    overview TEXT(140),
    rating (DECIMAL(4,2),
    watched INT(1)
    
    PRIMARY KEY (uniqueId)
    );

);
--