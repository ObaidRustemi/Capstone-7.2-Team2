DROP DATABASE IF EXISTS artapp_db;

CREATE DATABASE artapp_db;

\c artapp_db;

DROP TABLE IF EXISTS users;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username TEXT,
    firebase_uid TEXT,
    image TEXT,
    type_of_art TEXT, 
    description TEXT,
    phone_number INT,
    location TEXT,
    is_venue BOOLEAN,
    is_artist BOOLEAN
    -- profile_img_firebase TEXT
);

DROP TABLE IF EXISTS artwork;

CREATE TABLE artwork(
    id SERIAL PRIMARY KEY, 
    title TEXT,
    artist_id TEXT REFERENCES users(firebase_uid)
        ON DELETE CASCADE,
    image TEXT
);

-- COME BACK LATER --
-- DROP TABLE IF EXISTS artist_request;

-- CREATE TABLE artist_request(
--     id SERIAL PRIMARY KEY, 
--     artist_id INT REFERENCES users(id),
--     owner_id INT REFERENCES galleries(id),
--     gallery_id INT REFERENCES users(id),
--     message TEXT
-- );

DROP TABLE IF EXISTS venues;

CREATE TABLE venues(
    id SERIAL PRIMARY KEY, 
    name TEXT,
    venue_profile_photo TEXT,
    owner_id TEXT REFERENCES users(firebase_uid),
    venue_info TEXT,
    address TEXT
    -- ON DELETE CASCADE
);

--COME BACK LATER --
-- DROP TABLE IF EXISTS gallery_request;

-- CREATE TABLE gallery_request(
--     id SERIAL PRIMARY KEY, 
--     artist_id INT REFERENCES users(id),
--     owner_id INT REFERENCES galleries(id),
--     gallery_id INT REFERENCES users(id),
--     message TEXT
-- );

DROP TABLE IF EXISTS venue_images;

CREATE TABLE venue_images(
    id SERIAL PRIMARY KEY, 
    venue_id INT REFERENCES venues(id),
    photo_url TEXT
);
