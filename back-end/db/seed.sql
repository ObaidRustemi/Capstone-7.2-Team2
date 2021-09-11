\c artapp_db;

INSERT INTO users(username, email, password, phone_number, is_artist, is_venue) VALUES
('Monica', 'monica@gmail.com', 'monica123', 12345678, true, false),
('Trisha', 'trisha@gmail.com', 'trisha123', 12345678, true, false),
('Wendy', 'wendy@gmail.com', 'wendy123', 12345678, true, false),
('Tatiana', 'tatiana@gmail.com', 'tatiana123', 12345678, true, false),
('Frankie', 'frankie@gmail.com', 'frankie123', 12345678, true, false),
('Shawn', 'shawn@gmail.com', 'shawn123', 12345678, false, true),
('Sam', 'trisha@gmail.com', 'trisha123', 12345678, false, true);


INSERT INTO artwork (title, artist_id, image) VALUES
('title 1', 1, 'https://img.theculturetrip.com/1440x807/smart/wp-content/uploads/2012/01/hokusai.jpg'),
('title 2', 2, 'https://image.shutterstock.com/image-illustration/seven-running-horses-wildlife-decorative-600w-1754614820.jpg'),
('title 3', 3, 'https://assets.phillips.com/image/upload/t_Website_LotDetailMainImage/v1602889523/auctions/NY010320/8_001.jpg'),
('title 4', 4, 'https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2014/11/11/1415723375557/9390c5a0-ff8c-4866-be24-8dc86fb512c7-1020x1016.jpeg?width=700&quality=85&auto=format&fit=max&s=4e31578a1b6f94c0328c1d6c5316a8e0'),
('title 5', 5, 'https://images.squarespace-cdn.com/content/v1/591cf35d20099ed1a3cc9c94/1495073736483-WD16PW5W6Y5QFIOAENL2/XCQ8Qcr.jpg?format=750w'),
('title 6', 6, 'https://mearone.com/wp-content/uploads/2021/03/TRIPFULL.jpg'),
('title 7', 7, 'https://cdn.shopify.com/s/files/1/1043/4860/products/14ers_original_batik_12_by_17_300_2048x2048.JPG?v=1455754701');

INSERT INTO venues ( name, owner_id, address) VALUES  
('VENUE 1', 6, '2453 Broadway, New York NY 10043'),
('VENUE 2', 7, '5344 Amsterdam, New York NY 10043');

INSERT INTO venue_images (venue_id, photo_url) VALUES   
(1,'https://media.timeout.com/images/105439629/image.jpg'),
(1,'https://d4qwptktddc5f.cloudfront.net/easy_thumbnails/thumbs_Interior-Design-American-Kennel-Club-Museum-of-the-Dog-New-York-01-0319.jpg.770x0_q95.jpg'),
(2,'https://www.centralparktours.net/blog/content/images/2020/07/nycgallery.jpg'),
(2,'http://thepaperbox.nyc/wp-content/uploads/2016/02/back-yard-185x185.jpg');
