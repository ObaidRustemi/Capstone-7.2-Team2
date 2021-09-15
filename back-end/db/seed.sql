\c artapp_db;

INSERT INTO users(profile_pic, type_of_art, description, phone_number, location, is_venue) VALUES
('Monica', 'Abstract', 'Abstract art is an art in which the artwork is based on general ideas rather than having any physical existence. In other words, we can say that an abstract art is based on an internal form instead of having any pictorial representation of things.', 12345678, 'NY,USA', false),
('Trisha', 'Impressionism', 'Impressionism is a genre of art that became popular in the late 19th century in a response to the needs of the French Academie des Beaux-Arts, commonly called The Academie.', 12345678, 'MS,USA', false),
('Wendy', 'Realism', 'Realism is a genre of art which is based on practical matters or real things rather than imaginary or visionary representations. Realism developed as a reaction to the romanticism in the 19th century. ', 12345678, 'PAT,NJ', false),
('Tatiana', 'Neoclassicism', 'Neoclassicism was a Western cultural movement in the decorative and visual arts, literature, theatre, music, and architecture that drew inspiration from the art and culture of classical antiquity', 12345678, 'NY,USA', false),
('Frankie', 'Romanticism', 'Romanticism is a genre of art which was originated in Europe somewhere in the 18th century against the Age of Enlightenment. Romanticism was an artistic and intellectual movement which is describes by an elevated interest in nature, importance given to the individual’s expression of thoughts and feelings, and to reject the norms of classicism', 12345678, 'NY,USA', false),
('Shawn', 'Art Nouveau', 'Art Nouveau is a term which is derived from French language which literally means ‘new art’. This genre of art developed in France from where it extended to different European countries such as Belgium, Germany, Italy, etc.', 12345678, 'NY,USA', true),
('Sam', 'Expressionism', 'Expressionism is a genre of art which deals with the subjective feelings of an artist. This genre of art flourished in the 20th century in a response to the impressionism. The main purpose of expressionism is to depict emotions by means of art.', 12345678, 'PAT,NJ', true);


INSERT INTO artwork (title, artist_id, image) VALUES
('title 1', 1, 'https://img.theculturetrip.com/1440x807/smart/wp-content/uploads/2012/01/hokusai.jpg'),
('title 2', 2, 'https://image.shutterstock.com/image-illustration/seven-running-horses-wildlife-decorative-600w-1754614820.jpg'),
('title 3', 3, 'https://assets.phillips.com/image/upload/t_Website_LotDetailMainImage/v1602889523/auctions/NY010320/8_001.jpg'),
('title 4', 4, 'https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2014/11/11/1415723375557/9390c5a0-ff8c-4866-be24-8dc86fb512c7-1020x1016.jpeg?width=700&quality=85&auto=format&fit=max&s=4e31578a1b6f94c0328c1d6c5316a8e0'),
('title 5', 5, 'https://images.squarespace-cdn.com/content/v1/591cf35d20099ed1a3cc9c94/1495073736483-WD16PW5W6Y5QFIOAENL2/XCQ8Qcr.jpg?format=750w'),
('title 6', 6, 'https://mearone.com/wp-content/uploads/2021/03/TRIPFULL.jpg'),
('title 7', 7, 'https://cdn.shopify.com/s/files/1/1043/4860/products/14ers_original_batik_12_by_17_300_2048x2048.JPG?v=1455754701');

INSERT INTO venues ( name, venue_profile_photo, owner_id, address) VALUES  
('VENUE 1', 'https://media.timeout.com/images/105439629/image.jpg', 6, '2453 Broadway, New York NY 10043'),
('VENUE 3', 'https://media.timeout.com/images/105439629/image.jpg', 6, '4566 Broadway, New York NY 10043'),
('VENUE 2', 'https://media.timeout.com/images/105439629/image.jpg', 7, '5344 Amsterdam, New York NY 10043');

INSERT INTO venue_images (venue_id, photo_url) VALUES   
(1,'https://media.timeout.com/images/105439629/image.jpg'),
(1,'https://d4qwptktddc5f.cloudfront.net/easy_thumbnails/thumbs_Interior-Design-American-Kennel-Club-Museum-of-the-Dog-New-York-01-0319.jpg.770x0_q95.jpg'),
(2,'https://www.centralparktours.net/blog/content/images/2020/07/nycgallery.jpg'),
(2,'http://thepaperbox.nyc/wp-content/uploads/2016/02/back-yard-185x185.jpg');
