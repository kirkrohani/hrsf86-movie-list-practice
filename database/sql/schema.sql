drop database if exists moviedb;
create database moviedb;

use moviedb;

create table movies (
  id int not null auto_increment primary key,
  title varchar(50) not null,
  release_date date,
  poster_path varchar(255),
  overview varchar(255),
  watched boolean not null default 0
) ENGINE=InnoDB;
