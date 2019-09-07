drop database if exists bamazon_DB;
create database bamazon_DB;
use bamazon_DB;
create table products(
	position int NOT NULL AUTO_INCREMENT,
	item_id  VARCHAR(100) NULL,
	product_name VARCHAR(100) NULL,
  department_name VARCHAR(100) NULL,
  price DECIMAL(10,3) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (item_id)
);
insert INTO products (item_id , product_name, department_name, price, stock_quantity )
VALUES ("A0001", "IPHONE X", "sell", "999", 200),
	("A0002", "HP ENVY x360 Laptop", "sell", 699.99, 100),
    ("A0003", "Google Pixel USB-C earbuds", "sell", 30, 500),
    ("A0004", "powerbank 5000mAh", "sell", 24.99, 243),
    ("A0005", "alexa", "sell", 750, 20),
    ("A0006", "HP Classic Wired Keyboard", "sell", 12.99, 765),
	("A0007", "Sony SRS-XB10-Speaker", "sell", 49.99, 120),
    ("A0008", "Staples 23420 Wireless Optical Mouse", "sell", 10, 5000),
    ("A0009", "Dell 24 Ultrathin Monitor", "sell", 240, 4),
    ("A0010", "Apple Watch Series 4", "sell", 500, 11);
 SELECT * FROM bamazon_DB.products;
