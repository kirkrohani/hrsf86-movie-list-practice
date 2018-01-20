DROP DATABASE IF EXISTS movieDB;
CREATE DATABASE IF NOT EXISTS movieDB;
USE movieDB;
-- may need to refacto for 'now_playing'
CREATE TABLE IF NOT EXISTS movies(
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	title VARCHAR(80) NOT NULL,
	description VARCHAR(2000),
	released DATE,
	stars INT
);

-- INSERT INTO movies(title, description, released, stars) VALUES('TEST', 'this was a test', '2005-07-13', 3)