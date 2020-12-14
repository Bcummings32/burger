DROP DATABASE IF EXISTS burgers_db

CREATE DATABASE burgers_db
USE burgers_db

--burger name, devoured boolean
CREATE TABLE burgers (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    devour BOOLEAN DEFAULT
    PRIMARY KEY(id)  
);