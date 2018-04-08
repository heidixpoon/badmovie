CREATE DATABASE if not exists badmovies;

USE badmovies;

CREATE TABLE favorites (
  id INT NOT NULL AUTO_INCREMENT, 
  title VARCHAR(50) NOT NULL,
  release_date VARCHAR(50) NOT NULL,
  poster_path VARCHAR(300) NOT NULL,
  vote_average VARCHAR(50) NOT NULL,
  PRIMARY Key(ID)


);



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

