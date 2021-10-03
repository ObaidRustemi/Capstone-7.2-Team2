\c artapp_db;

INSERT INTO users(username,firebase_uid, type_of_art, description, phone_number, location, is_venue, is_artist) VALUES
('Monica', null,'Abstract', 'Abstract art is an art in which the artwork is based on general ideas rather than having any physical existence. In other words, we can say that an abstract art is based on an internal form instead of having any pictorial representation of things.', 12345678, 'NY,USA', false, true),
('Trisha',null, 'Impressionism', 'Impressionism is a genre of art that became popular in the late 19th century in a response to the needs of the French Academie des Beaux-Arts, commonly called The Academie.', 12345678, 'MS,USA', false, true),
('Gasebo', 'nURYZDadw2aZ1ESF6zoaHdYnSv32','Realism', 'Realism is a genre of art which is based on practical matters or real things rather than imaginary or visionary representations. Realism developed as a reaction to the romanticism in the 19th century. ', 12345678, 'PAT,NJ', false, true),
('Tatiana', null,'Neoclassicism', 'Neoclassicism was a Western cultural movement in the decorative and visual arts, literature, theatre, music, and architecture that drew inspiration from the art and culture of classical antiquity', 12345678, 'NY,USA', false, true),
('Frankie',null, 'Romanticism', 'Romanticism is a genre of art which was originated in Europe somewhere in the 18th century against the Age of Enlightenment. Romanticism was an artistic and intellectual movement which is describes by an elevated interest in nature, importance given to the individual’s expression of thoughts and feelings, and to reject the norms of classicism', 12345678, 'NY,USA', false, true),
('Shawn', null,'Art Nouveau', 'Art Nouveau is a term which is derived from French language which literally means ‘new art’. This genre of art developed in France from where it extended to different European countries such as Belgium, Germany, Italy, etc.', 12345678, 'NY,USA', true, false), 
('Sam',null, 'Expressionism', 'Expressionism is a genre of art which deals with the subjective feelings of an artist. This genre of art flourished in the 20th century in a response to the impressionism. The main purpose of expressionism is to depict emotions by means of art.', 12345678, 'PAT,NJ', true, false);


INSERT INTO artwork (title, artist_id, image) VALUES
('Hokkaido', 1, 'https://img.theculturetrip.com/1440x807/smart/wp-content/uploads/2012/01/hokusai.jpg'),
('93 to infinity', 1, 'https://image.shutterstock.com/image-illustration/seven-running-horses-wildlife-decorative-600w-1754614820.jpg'),
('untitled Denver Mural', 1, 'https://images.303magazine.com/uploads/2013/08/choefeatured-768x766.jpg'),
('Untitled Mural 1', 1, 'https://images.squarespace-cdn.com/content/v1/5554c50ee4b050c7ae08c73a/1436889054101-UAGN411WT2UAQJKHUH2H/david_choe_2.jpeg'),
('title 3', 3, 'https://assets.phillips.com/image/upload/t_Website_LotDetailMainImage/v1602889523/auctions/NY010320/8_001.jpg'),
('title 4', 4, 'https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2014/11/11/1415723375557/9390c5a0-ff8c-4866-be24-8dc86fb512c7-1020x1016.jpeg?width=700&quality=85&auto=format&fit=max&s=4e31578a1b6f94c0328c1d6c5316a8e0'),
('title 5', 5, 'https://images.squarespace-cdn.com/content/v1/591cf35d20099ed1a3cc9c94/1495073736483-WD16PW5W6Y5QFIOAENL2/XCQ8Qcr.jpg?format=750w'),
('title 6', 6, 'https://mearone.com/wp-content/uploads/2021/03/TRIPFULL.jpg'),
('title 7', 7, 'https://cdn.shopify.com/s/files/1/1043/4860/products/14ers_original_batik_12_by_17_300_2048x2048.JPG?v=1455754701');

INSERT INTO venues ( name, venue_profile_photo, owner_id, venue_info, address) VALUES  
('Emerson Art Exhibitions', 'https://media.timeout.com/images/105439629/image.jpg', 6,'Emerson art exhibitions are designed to provoke thought, broaden understanding of the world and spark curiosity and imagination. The Emerson encourages appreciation of the visual arts by curating and hosting art exhibitions of significant community value. The Emerson seeks exhibitions that interpret not only regional topics, but also touch upon national and international issues.' ,'2453 Broadway, New York NY 10043'),
('VENUE 3', 'https://media.timeout.com/images/105439629/image.jpg', 6, 'Founded by Gallery Director Alex Farkas in 2006, UGallery has developed a loyal following of art collectors, artists, and interior designers in all 50 states and over 50 countries.' ,'4566 Broadway, New York NY 10043'),
('VENUE 2', 'https://media.timeout.com/images/105439629/image.jpg', 7, 'Painter and poet Jesse Murry (1948–1993) identified three significant approaches to landscape —“poetic,” “dramatic,” and “visionary,” which he aimed to synthesize into abstract paintings. Built of subtly shifting color dynamics, his canvases became “places summoned by the memory through the imagination','5344 Amsterdam, New York NY 10043');

INSERT INTO venue_images (venue_id, photo_url) VALUES   
(1,'https://cdn.theculturetrip.com/wp-content/uploads/2019/04/feature_vertical-gallery-chicago-_-8.jpg'),
(1,'https://www.tripsavvy.com/thmb/VPYlfEARBBZbqwu3aGl9a7VfLHg=/3000x1687/smart/filters:no_upscale()/GettyImages-472768194-5d167ebc1a634312b25a98ca5d6613f9.jpg'),
(1,'https://d4qwptktddc5f.cloudfront.net/easy_thumbnails/thumbs_Interior-Design-American-Kennel-Club-Museum-of-the-Dog-New-York-01-0319.jpg.770x0_q95.jpg'),
(1,'https://img.theculturetrip.com/1440x807/smart/wp-content/uploads/2019/01/dg00xh.jpg'),
(1,'https://arttoartgallery.com/wp-content/uploads/2021/01/newslide2-1.jpg'),
(1,'https://arttoartgallery.com/wp-content/uploads/2020/07/slidehpome-1.jpg'),
(2,'https://www.centralparktours.net/blog/content/images/2020/07/nycgallery.jpg'),
(2,'http://thepaperbox.nyc/wp-content/uploads/2016/02/back-yard-185x185.jpg');
