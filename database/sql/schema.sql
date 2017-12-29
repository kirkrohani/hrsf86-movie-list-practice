CREATE DATABASE IF NOT EXISTS movieList; 

USE movieList;

DROP TABLE if exists movies; 

CREATE TABLE movies (
  db_id int AUTO_INCREMENT, 
  id int UNIQUE,
  release_date char(10) ,
  vote_average decimal(3, 1), 
  watched TINYINT(1),
  overview text, 
  poster_path varchar(100), 
  title varchar(150) not NULL,
  PRIMARY KEY(DB_ID) 
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < database/sql/schema.sql
 *  to create the database and the tables.*/