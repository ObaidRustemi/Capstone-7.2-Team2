\c artnet_db;

INSERT INTO users (username) VALUES
('Monica'),
('Trisha'),
('Wendy'),
('Tatiana'),
('Frankie'),
('Shawn'),
('Sam');

INSERT INTO artwork (title, artist_id, image) VALUES
('title 1', 1, "https://img.theculturetrip.com/1440x807/smart/wp-content/uploads/2012/01/hokusai.jpg"),
('title 2', 2, "https://image.shutterstock.com/image-illustration/seven-running-horses-wildlife-decorative-600w-1754614820.jpg"),
('title 3', 3, "https://assets.phillips.com/image/upload/t_Website_LotDetailMainImage/v1602889523/auctions/NY010320/8_001.jpg"),
('title 4', 4, "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2014/11/11/1415723375557/9390c5a0-ff8c-4866-be24-8dc86fb512c7-1020x1016.jpeg?width=700&quality=85&auto=format&fit=max&s=4e31578a1b6f94c0328c1d6c5316a8e0"),
('title 5', 5, "https://images.squarespace-cdn.com/content/v1/591cf35d20099ed1a3cc9c94/1495073736483-WD16PW5W6Y5QFIOAENL2/XCQ8Qcr.jpg?format=750w"),
('title 6', 6, "https://mearone.com/wp-content/uploads/2021/03/TRIPFULL.jpg"),
('title 7', 7, "https://cdn.shopify.com/s/files/1/1043/4860/products/14ers_original_batik_12_by_17_300_2048x2048.JPG?v=1455754701");

INSERT INTO venues ( name, owner_id, address) VALUES  
('VENUE 1', 1, '2453 Broadway, New York NY 10043'),
('VENUE 2', 2, '5344 Amsterdam, New York NY 10043'),
('VENUE 3', 3, '88 Hamilton, New York NY 10043'),
('VENUE 4', 4, '11 West 139th ST, New York NY 10043'),
('VENUE 5', 5, '124 East Adam Clayton Powell, New York NY 10043'),
('VENUE 6', 6, '3333 Riverside, New York NY 10043'),
('VENUE 7', 7, '123 Essex ST, New York NY 10043');

INSERT INTO venue_images (venue_id, photo_url) VALUES   
(1,'https://media.timeout.com/images/105439629/image.jpg')
(1,'https://d4qwptktddc5f.cloudfront.net/easy_thumbnails/thumbs_Interior-Design-American-Kennel-Club-Museum-of-the-Dog-New-York-01-0319.jpg.770x0_q95.jpg')
(2,'https://www.centralparktours.net/blog/content/images/2020/07/nycgallery.jpg')
(2,'http://thepaperbox.nyc/wp-content/uploads/2016/02/back-yard-185x185.jpg')
(3,'http://thepaperbox.nyc/wp-content/uploads/2016/02/thepaperboxbrooklyn2-185x185.jpg')
(3,'http://thepaperbox.nyc/wp-content/uploads/2016/02/bar-185x185.jpg')
(4,'https://media.timeout.com/images/104677572/750/562/image.jpg')
(4,'https://res.cloudinary.com/the-jewish-museum/image/fetch/q_auto,f_auto/v1/https://s3.amazonaws.com/tjmassets/carousels/1245_Constellations_Homepage.jpg')
(5,'')
(5,'')
(6,'')
(6,'')
(7,'')
(7,'')