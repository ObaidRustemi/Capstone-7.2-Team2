DROP DATABASE IF EXISTS artnet_db;

CREATE DATABASE artnet_db;

\c artnet_db;

DROP TABLE IF EXISTS users;

CREATE TABLE users 


DROP TABLE IF EXISTS artists;

CREATE TABLE artists(
    id SERIAL PRIMARY KEY, 
    name TEXT
);