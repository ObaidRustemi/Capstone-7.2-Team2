\c artapp_db;


INSERT INTO users(username,firebase_uid, image, type_of_art, description, phone_number, location, is_venue, is_artist) VALUES
('Kaws', 'PYKsxQioabZRlt0f0aHtAu6tl1j1', 'https://www.christies.com/media-library/images/features/articles/2019/03/19/10-things-to-know-about-kaws/kaws_briandonnelly_by_hye-ryoungmin-hero-880i.jpg', 'Pop Art', 'Brian Donnelly, known professionally as Kaws, is an American artist and designer.', 12345678, 'NY,USA', false, true),
('Takashi Murakami','rKuKNL30PYVxQDn5yLDliTWmjCf2', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS67Y4gvW3UQbpAWcTafjzigvRjy_7pDj0YTA&usqp=CAU', 'Contemporary', 'Takashi Murakami is a Japanese contemporary artist. He works in fine arts media as well as commercial and is known for blurring the line between high and low arts.', 12345678, 'Tokyo, Japan', false, true),
('Gasebo', 'nURYZDadw2aZ1ESF6zoaHdYnSv32', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxMt5zjsNv8tT-SqH1kMxn4N6hfwdOhAMogw&usqp=CAU', 'Realism', 'Realism is a genre of art which is based on practical matters or real things rather than imaginary or visionary representations. Realism developed as a reaction to the romanticism in the 19th century. ', 12345678, 'PAT,NJ', false, true),
('MearOne', 'CUotx1PC0NaAlDkoAQGPE7DD8jb2', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsPOjdZEFuf0XsPl9nBVP4MHlgdRdrH6hbdw&usqp=CAU', 'Visionary', 'Mear One is an American artist based in Los Angeles, known for his often-political street graffiti art.', 12345678, 'NY,USA', false, true),
('Frankie','LydaEG5k94TfDmT9KIKAhdzG9Tx2', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkuhfsoNiO7xvIPlUm9F6YlSkbg5TIMKPzsQ&usqp=CAU', 'Romanticism', 'Romanticism is a genre of art which was originated in Europe somewhere in the 18th century against the Age of Enlightenment. Romanticism was an artistic and intellectual movement which is describes by an elevated interest in nature, importance given to the individual’s expression of thoughts and feelings, and to reject the norms of classicism', 12345678, 'NY,USA', false, true),
('Mike', 'ZE6t5nOcxwMMhFxtaanEMBSWlYn2', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkBjPgf2fnrs1xijdTGBEqIVggPnTInj9EPQ&usqp=CAU', 'Art Nouveau', 'Art Nouveau is a term which is derived from French language which literally means ‘new art’. This genre of art developed in France from where it extended to different European countries such as Belgium, Germany, Italy, etc.', 12345678, 'NY,USA', true, false), 
('Sam','SItsbxhHWLTDxvQ1wrQQwnSlnES2', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Zs0Xktv98InMPo4XQUeL6IK8BvsqkSnYgw&usqp=CAU', 'Expressionism', 'Expressionism is a genre of art which deals with the subjective feelings of an artist. This genre of art flourished in the 20th century in a response to the impressionism. The main purpose of expressionism is to depict emotions by means of art.', 12345678, 'PAT,NJ', true, false);



INSERT INTO artwork (title, artist_id,  image) VALUES

-- ('Hokkaido', 1, 'https://img.theculturetrip.com/1440x807/smart/wp-content/uploads/2012/01/hokusai.jpg'),
-- ('93 to infinity', 1, 'https://image.shutterstock.com/image-illustration/seven-running-horses-wildlife-decorative-600w-1754614820.jpg'),
-- ('untitled Denver Mural', 1, 'https://images.303magazine.com/uploads/2013/08/choefeatured-768x766.jpg'),
-- ('Untitled Mural 1', 1, 'https://images.squarespace-cdn.com/content/v1/5554c50ee4b050c7ae08c73a/1436889054101-UAGN411WT2UAQJKHUH2H/david_choe_2.jpeg'),
-- ('title 3', 3, 'https://assets.phillips.com/image/upload/t_Website_LotDetailMainImage/v1602889523/auctions/NY010320/8_001.jpg'),
-- ('title 4', 4, 'https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2014/11/11/1415723375557/9390c5a0-ff8c-4866-be24-8dc86fb512c7-1020x1016.jpeg?width=700&quality=85&auto=format&fit=max&s=4e31578a1b6f94c0328c1d6c5316a8e0'),
-- ('title 5', 5, 'https://images.squarespace-cdn.com/content/v1/591cf35d20099ed1a3cc9c94/1495073736483-WD16PW5W6Y5QFIOAENL2/XCQ8Qcr.jpg?format=750w'),
-- ('title 6', 6, 'https://mearone.com/wp-content/uploads/2021/03/TRIPFULL.jpg'),
-- ('title 7', 7, 'https://cdn.shopify.com/s/files/1/1043/4860/products/14ers_original_batik_12_by_17_300_2048x2048.JPG?v=1455754701');

('title 1', 'PYKsxQioabZRlt0f0aHtAu6tl1j1', 'https://img.theculturetrip.com/1440x807/smart/wp-content/uploads/2012/01/hokusai.jpg'),
('title 2', 'PYKsxQioabZRlt0f0aHtAu6tl1j1', 'https://image.shutterstock.com/image-illustration/seven-running-horses-wildlife-decorative-600w-1754614820.jpg'),
('title 3', 'rKuKNL30PYVxQDn5yLDliTWmjCf2', 'https://assets.phillips.com/image/upload/t_Website_LotDetailMainImage/v1602889523/auctions/NY010320/8_001.jpg'),
('title 4', 'rKuKNL30PYVxQDn5yLDliTWmjCf2', 'https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2014/11/11/1415723375557/9390c5a0-ff8c-4866-be24-8dc86fb512c7-1020x1016.jpeg?width=700&quality=85&auto=format&fit=max&s=4e31578a1b6f94c0328c1d6c5316a8e0'),
('title 5', 'SItsbxhHWLTDxvQ1wrQQwnSlnES2', 'https://images.squarespace-cdn.com/content/v1/591cf35d20099ed1a3cc9c94/1495073736483-WD16PW5W6Y5QFIOAENL2/XCQ8Qcr.jpg?format=750w'),
('Awake', 'CUotx1PC0NaAlDkoAQGPE7DD8jb2', 'https://mearone.com/wp-content/uploads/2021/03/TRIPFULL.jpg'),
('Planet X', 'CUotx1PC0NaAlDkoAQGPE7DD8jb2', 'https://i.ytimg.com/vi/3Gf8vz7ZI3c/maxresdefault.jpg'),
('title 7', 'LydaEG5k94TfDmT9KIKAhdzG9Tx2', 'https://cdn.shopify.com/s/files/1/1043/4860/products/14ers_original_batik_12_by_17_300_2048x2048.JPG?v=1455754701');


INSERT INTO venues ( name, venue_profile_photo, owner_id, venue_info, address) VALUES  
('Emerson Art Exhibitions', 'https://media.timeout.com/images/105439629/image.jpg', 'ZE6t5nOcxwMMhFxtaanEMBSWlYn2','Emerson art exhibitions are designed to provoke thought, broaden understanding of the world and spark curiosity and imagination. The Emerson encourages appreciation of the visual arts by curating and hosting art exhibitions of significant community value. The Emerson seeks exhibitions that interpret not only regional topics, but also touch upon national and international issues.' ,'2453 Broadway, New York NY 10043'),
('The Paper Box', 'http://thepaperbox.nyc/wp-content/uploads/2016/02/IMG_3348-950x713.jpg', 'ZE6t5nOcxwMMhFxtaanEMBSWlYn2', 'The Paper Box is an independently owned music and arts complex in East Williamsburg, Brooklyn. We value artistic expression in all its forms and have hosted a multitude of events since Summer 2012, including live music shows, DJ parties, theater performances, and label showcases. We’ve also hosted many private events including; weddings, bar mitzvahs corporate events, and baby showers. We are a licensed venue with a full bar and certificate of public assembly and Insurance.' ,'17 Meadow St. Brooklyn, NY 11206'),
('Bogart House', 'https://i.ticketweb.com//i/venue/436405_Venue.jpg?v=2', 'SItsbxhHWLTDxvQ1wrQQwnSlnES2', 'Multiple spaces, indoor space and outdoor rooftop, Funktion-One Sound System, Full Bar, Speakeasy Vibes','230 Bogart St, Brooklyn, NY 11206');


INSERT INTO venue_images (venue_id, photo_url) VALUES   
(1,'https://cdn.theculturetrip.com/wp-content/uploads/2019/04/feature_vertical-gallery-chicago-_-8.jpg'),
(1,'https://www.tripsavvy.com/thmb/VPYlfEARBBZbqwu3aGl9a7VfLHg=/3000x1687/smart/filters:no_upscale()/GettyImages-472768194-5d167ebc1a634312b25a98ca5d6613f9.jpg'),
(1,'https://d4qwptktddc5f.cloudfront.net/easy_thumbnails/thumbs_Interior-Design-American-Kennel-Club-Museum-of-the-Dog-New-York-01-0319.jpg.770x0_q95.jpg'),
(1,'https://img.theculturetrip.com/1440x807/smart/wp-content/uploads/2019/01/dg00xh.jpg'),
(1,'https://arttoartgallery.com/wp-content/uploads/2021/01/newslide2-1.jpg'),
(1,'https://arttoartgallery.com/wp-content/uploads/2020/07/slidehpome-1.jpg'),
(2,'https://www.centralparktours.net/blog/content/images/2020/07/nycgallery.jpg'),
(2,'http://thepaperbox.nyc/wp-content/uploads/2016/02/back-yard-185x185.jpg');
