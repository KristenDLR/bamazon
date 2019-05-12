DROP DATABASE IF EXISTS bamazon

CREATE DATABASE bamazon

USE bamazon;

CREATE TABLE products (
	id INTEGER AUTO_INCREMENT NOT NULL,
    productName VARCHAR(255) NOT NULL,
    quantity INTEGER,
    price FLOAT(7,2),
    PRIMARY KEY(id)
);

INSERT INTO items(productName, quantity, price)
VALUES ("Lizzie McGuire Sleeping Bag", 1, 250.00);
