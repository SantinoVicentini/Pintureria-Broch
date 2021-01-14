CREATE DATABASE pintureriaBroch;
CREATE TABLE user(
id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
name VARCHAR(50) NOT NULL,
userName VARCHAR (50) NOT NULL UNIQUE,
email VARCHAR(50) NOT NULL UNIQUE,
password VARCHAR(50) NOT NULL,
avatar VARCHAR(50) NOT NULL
);


CREATE TABLE pintureriaBroch.category(
id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
name VARCHAR(50) NOT NULL);

CREATE TABLE pintureriaBroch.trademark(
id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
name VARCHAR(50) NOT NULL);

CREATE TABLE pintureriaBroch.color(
id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
name VARCHAR(50) NOT NULL);

CREATE TABLE product(
id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
name VARCHAR(50) NOT NULL,
description text NOT NULL,
price INT NOT NULL,
image VARCHAR(50) NOT NULL
);

DROP TABLE IF EXISTS pintureriaBroch.cart;

CREATE TABLE pintureriaBroch.cart(
id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
total VARCHAR(50) NOT NULL,
status tinyint NOT NULL
);

CREATE TABLE pintureriaBroch.cart_product(
id INT PRIMARY KEY AUTO_INCREMENT NOT NULL
);