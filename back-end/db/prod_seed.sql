INSERT INTO users(username, firebase_uid, image, type_of_art, description, phone_number, location, is_venue, is_artist, status) VALUES
('MearOne', 'CUotx1PC0NaAlDkoAQGPE7DD8jb2', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsPOjdZEFuf0XsPl9nBVP4MHlgdRdrH6hbdw&usqp=CAU', 'Visionary', 'Mear One is an American artist based in Los Angeles, known for his often-political street graffiti art.', 12345678, 'NY,USA', false, true, 'Available'),
('Frankie','LydaEG5k94TfDmT9KIKAhdzG9Tx2', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkuhfsoNiO7xvIPlUm9F6YlSkbg5TIMKPzsQ&usqp=CAU', 'Romanticism', 'Romanticism is a genre of art which was originated in Europe somewhere in the 18th century against the Age of Enlightenment. Romanticism was an artistic and intellectual movement which is describes by an elevated interest in nature, importance given to the individual’s expression of thoughts and feelings, and to reject the norms of classicism', 12345678, 'USA', false, true, 'Available'),
('Mike', 'ZE6t5nOcxwMMhFxtaanEMBSWlYn2', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkBjPgf2fnrs1xijdTGBEqIVggPnTInj9EPQ&usqp=CAU', 'Art Nouveau', 'Art Nouveau is a term which is derived from French language which literally means new art’. This genre of art developed in France from where it extended to different European countries such as Belgium, Germany, Italy, etc.', 12345678, 'USA', true, false, 'Available'), 
('Sam','SItsbxhHWLTDxvQ1wrQQwnSlnES2', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Zs0Xktv98InMPo4XQUeL6IK8BvsqkSnYgw&usqp=CAU', 'Expressionism', 'Expressionism is a genre of art which deals with the subjective feelings of an artist. This genre of art flourished in the 20th century in a response to the impressionism. The main purpose of expressionism is to depict emotions by means of art.', 12345678, 'Paterson, NJ', true, false, 'Available'),
('Rocio Marie Cabrera','x8CeahIL7jaZ3rENptL7d9mY6t52', 'https://images.squarespace-cdn.com/content/v1/567f25e4a976af5d461070fe/1497822525271-6V7XYSC6I1JY1TLV37HV/image-asset.jpeg?format=750w', 'Surreal Pop Art', 'Painter and sculptor from the Bronx', 333-444-7777, 'Bronx, NY', false, true, 'Available'),
('Annie Legnini','Ua9dUh7IkOQnumORXggQ97IAyis2', 'https://pkimgcdn.peekyou.com/a55e9e1eed3b4cf82c7ff658596eb0d0.jpeg', 'Collage & Mixed Media', 'Creator of Bronx Faces', 444-555-888, 'Bronx, NY', false, true, 'Available'),
('Monica Hernandez','fjmPsFY8jvPFLX9DsFFQjiiZYVh2', 'https://static.wixstatic.com/media/5d56fa_ed32fca8fa2e4f9ea3c81b1eaa74f55a~mv2.jpg/v1/fill/w_429,h_536,al_c,q_90/IMG_8680.webp', 'Oil Paint & Canvas', 'First Generation Dominican Artist', 444-555-888, 'Bronx, NY', false, true, 'Available'),
('Fred Emmanuel', 'SSQmKH488PUYED1oJe0MPKidPaE2', 'https://i.imgur.com/5OjHAg1.jpg', 'Pop Art', 'Fred Emmanuelle, known professionally as just FredEE, is an American artist and designer', 123-456-7877, 'Rochester, NY', false, true, 'Available'),
('Mike Mitchell', 'C8QFbExthBMvPkGZ2CtM13bcWoi1', 'https://geekxlovin.files.wordpress.com/2014/05/this-one-3.jpg', 'Surrealism', 'Mike Mitchell is an American artist known for his pop surrealism', 123-456-7899, 'Los Angeles, CA', false, true, 'Available'),
('Jonathan Solter', 'lLRNjT58uVQkDPagXaBW1HMdGRk1', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe0ikHZj4pxQ3LJ6Q06deAfajXXNJ4dg0X0w&usqp=CAUP', 'Visionary Art', 'Jonathan Solter is an artist living and working in the Bay Area. Growing up in the redwood forests of Northern California, he started making art at an early age with the loving support of his family. This began with mazes and labyrinths, leading to the creation of new worlds from both his imagination and the natural environment; and turning more towards Psychedelic art after high school', 917-123-4567, 'Oakland, CA', false, true, 'Not Available'),
('Alex Polanco', 'wD7INEdpccYJr5ilh2GVGPDZicq2', 'http://alexpolancoart.com/images/IMG_2433.jpg', 'Visionary Art', 'Taino artist, born in Kiskeya (Dominican Republic)', 347-265-5122 , 'New York, NY', false, true, 'Available');


INSERT INTO artwork (title, artist_id,  image) VALUES
('title 5', 'SItsbxhHWLTDxvQ1wrQQwnSlnES2', 'https://images.squarespace-cdn.com/content/v1/591cf35d20099ed1a3cc9c94/1495073736483-WD16PW5W6Y5QFIOAENL2/XCQ8Qcr.jpg?format=750w'),
('Awake', 'CUotx1PC0NaAlDkoAQGPE7DD8jb2', 'https://mearone.com/wp-content/uploads/2021/03/TRIPFULL.jpg'),
('Planet X', 'CUotx1PC0NaAlDkoAQGPE7DD8jb2', 'https://i.ytimg.com/vi/3Gf8vz7ZI3c/maxresdefault.jpg'),
('title 7', 'LydaEG5k94TfDmT9KIKAhdzG9Tx2', 'https://cdn.shopify.com/s/files/1/1043/4860/products/14ers_original_batik_12_by_17_300_2048x2048.JPG?v=1455754701'),
('Imposter', 'x8CeahIL7jaZ3rENptL7d9mY6t52', 'https://images.squarespace-cdn.com/content/v1/591cf35d20099ed1a3cc9c94/1623360518321-JSZT50V1NGB5KT6VTIMT/imposter.jpg'),
('Darkness', 'x8CeahIL7jaZ3rENptL7d9mY6t52', 'https://images.squarespace-cdn.com/content/v1/591cf35d20099ed1a3cc9c94/1628462669836-Y77I8WYLBECL8YS1DX50/darkness.jpg'),
('Feelings are Magic', 'x8CeahIL7jaZ3rENptL7d9mY6t52', 'https://images.squarespace-cdn.com/content/v1/591cf35d20099ed1a3cc9c94/1634682072658-YGV8GRBOWBJIDTT23EIC/rocio.jpg'),
('Didn’t Come From No Rib', 'Ua9dUh7IkOQnumORXggQ97IAyis2', 'https://images.squarespace-cdn.com/content/v1/56b3ed2cb654f954edaa6c5a/1520570603049-GZD7FUPM6O209RALOKM2/DIDNT+COME+FROM+NO+RIB+final.jpeg'),
('Untitled', 'Ua9dUh7IkOQnumORXggQ97IAyis2', 'https://images.squarespace-cdn.com/content/v1/56b3ed2cb654f954edaa6c5a/1476230231232-8LI8R7MV46BYK1OZRA26/10881653_10205370638689319_5516323048521139071_n.jpg'),
('Bodega Boys', 'Ua9dUh7IkOQnumORXggQ97IAyis2', 'https://images.squarespace-cdn.com/content/v1/56b3ed2cb654f954edaa6c5a/1491239973949-42T8IY3C4FTQE8QN6CD9/Desus+and+Mero+mixed+media.JPG'),
('Jengibre', 'fjmPsFY8jvPFLX9DsFFQjiiZYVh2', 'https://static.wixstatic.com/media/5d56fa_3a3a2f30cc34448c890d5f3724b8b014~mv2.jpg/v1/fill/w_494,h_605,al_c,q_90/5d56fa_3a3a2f30cc34448c890d5f3724b8b014~mv2.jpg'),
('I want a house', 'fjmPsFY8jvPFLX9DsFFQjiiZYVh2', 'https://static.wixstatic.com/media/5d56fa_7a3108dde9ab49639f5df72a2b5ef875~mv2_d_2621_3930_s_4_2.jpg/v1/fill/w_494,h_740,al_c,q_90/5d56fa_7a3108dde9ab49639f5df72a2b5ef875~mv2_d_2621_3930_s_4_2.jpg'),
('Are you okay?', 'fjmPsFY8jvPFLX9DsFFQjiiZYVh2', 'https://static.wixstatic.com/media/5d56fa_08fe1f4b56c54a749b0c82ac1bc5d513~mv2.jpeg/v1/fill/w_494,h_744,al_c,q_90/5d56fa_08fe1f4b56c54a749b0c82ac1bc5d513~mv2.jpeg'),
('covide 19', 'SSQmKH488PUYED1oJe0MPKidPaE2', 'https://lh3.googleusercontent.com/a5145CjqO3BtSpr70bBCrCiaDMaLUI5U8MJlBgreNY5wYRDBVOOLhM8112Dub8n2ys4lKUbFmCK9nvZ8MdbJFBtqQQ8BRZPOPt2t=w600'),
('woman of dignity', 'SSQmKH488PUYED1oJe0MPKidPaE2', 'https://lh3.googleusercontent.com/uonorn3L54s7QU0BC1_1K-sEelR1m1bYwbfZIu6hNAofr8sXiQ3if9d4uyHd7byf37JUhv2_-tkSb3EjKlFiEtPGKuCKhxdksJldDg=w600'),
('XxxTentacion', 'SSQmKH488PUYED1oJe0MPKidPaE2', 'https://lh3.googleusercontent.com/oboVFs7KKYBB52oBI1TM0M47EBnvpmLxOjHf9MAt80X5P2v1oxIpMc2Q9EC3eOQDmHwvz00Q-Z5I1TkNCbIxzg_bHToVKo-LbNnl=w600'),
('Made in America', 'C8QFbExthBMvPkGZ2CtM13bcWoi1', 'https://i.imgur.com/DvqmxBQ.jpeg'),
('Django', 'C8QFbExthBMvPkGZ2CtM13bcWoi1', 'https://i.imgur.com/Jh9u8cz.jpeg'),
('Gourmet Coffee', 'C8QFbExthBMvPkGZ2CtM13bcWoi1', 'https://i.imgur.com/pHnMD2h.jpeg'),
('Urban Fungus', 'lLRNjT58uVQkDPagXaBW1HMdGRk1', 'https://cdncozygallery.addons.business/8330/181126091119lc1611d6d-xs.jpg?c=10'),
('Moon Goddess', 'lLRNjT58uVQkDPagXaBW1HMdGRk1', 'https://cdncozygallery.addons.business/8330/181126091116lc1611gtt-xs.jpg?c=10'),
('Northern Light', 'lLRNjT58uVQkDPagXaBW1HMdGRk1', 'https://cdncozygallery.addons.business/8330/181126091115lc1611iJn-xs.jpg?c=10'),
('Bliss', 'lLRNjT58uVQkDPagXaBW1HMdGRk1', 'https://cdncozygallery.addons.business/8330/181126091108lc1611VqE-xs.jpg?c=10'),
('Origins', 'wD7INEdpccYJr5ilh2GVGPDZicq2', 'http://alexpolancoart.com/images/Origins_Preview.jpg'),
('Divine Being', 'wD7INEdpccYJr5ilh2GVGPDZicq2', 'http://alexpolancoart.com/images/DivineBeing_Preview.jpg'),
('Conscious Awareness', 'wD7INEdpccYJr5ilh2GVGPDZicq2', 'http://alexpolancoart.com/images/Cawareness_Preview.jpg'),
('Vision of the Light', 'wD7INEdpccYJr5ilh2GVGPDZicq2', 'http://alexpolancoart.com/images/VisionOfTheLight_2x.jpg');


INSERT INTO venues ( name, venue_profile_photo, owner_id, venue_info, address, price) VALUES  
('Emerson Art Exhibitions', 'https://media.timeout.com/images/105439629/image.jpg', 'ZE6t5nOcxwMMhFxtaanEMBSWlYn2','Emerson art exhibitions are designed to provoke thought, broaden understanding of the world and spark curiosity and imagination. The Emerson encourages appreciation of the visual arts by curating and hosting art exhibitions of significant community value. The Emerson seeks exhibitions that interpret not only regional topics, but also touch upon national and international issues.' ,'2453 Broadway, New York NY 10043', 10000),
('The Paper Box', 'https://nysmusic.com/site/wp-content/uploads/2018/01/tkenna_lespectacle6_08.jpg', 'ZE6t5nOcxwMMhFxtaanEMBSWlYn2', 'The Paper Box is an independently owned music and arts complex in East Williamsburg, Brooklyn. We value artistic expression in all its forms and have hosted a multitude of events since Summer 2012, including live music shows, DJ parties, theater performances, and label showcases. We’ve also hosted many private events including; weddings, bar mitzvahs corporate events, and baby showers. We are a licensed venue with a full bar and certificate of public assembly and Insurance.' ,'17 Meadow St. Brooklyn, NY 11206', 0),
('Bogart House', 'https://i.ticketweb.com//i/venue/436405_Venue.jpg?v=2', 'SItsbxhHWLTDxvQ1wrQQwnSlnES2', 'Multiple spaces, indoor space and outdoor rooftop, Funktion-One Sound System, Full Bar, Speakeasy Vibes','230 Bogart St, Brooklyn, NY 11206', 2000),
('The Bronx Brewery', 'https://vinepair.com/wp-content/uploads/2020/06/microsite_bronxbrewery_header3.jpg', 'SItsbxhHWLTDxvQ1wrQQwnSlnES2', 'Outdoor space is great for vending', '856 E 136th St, Bronx, NY 10454', 500),
('Mon Amour Coffee & Wine Bar', 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.6435-9/121962026_956581248199997_481543841988055427_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=Nr-TcqwhovUAX8O-wdO&_nc_ht=scontent-lga3-1.xx&oh=5f0173dc5650f64d2c08c826391e89a8&oe=61A1C504', 'SItsbxhHWLTDxvQ1wrQQwnSlnES2', 'Cozy, French-inspired coffee shop in the Bronx', '234 W 238th St, Bronx, NY 10463', 0),
('Port Morris Distillery', 'https://static01.nyt.com/images/2015/04/22/nyregion/DISTILLERYweb4/DISTILLERYweb4-articleLarge.jpg?quality=75&auto=webp&disable=upscale', 'SItsbxhHWLTDxvQ1wrQQwnSlnES2', 'Pitorro distillery in the South Bronx', '780 E 133rd St, Bronx, NY 10454', 300),
('Nighthawk Cinema', 'https://images.adsttc.com/media/images/55f7/2f4f/fd5f/d3e8/0e00/0090/slideshow/caliper-theatre-15.jpg?1442262834', 'ZE6t5nOcxwMMhFxtaanEMBSWlYn2', 'Old-school cinema in Brooklyn', '136 Metropolitan Ave, Brooklyn, NY 11249', 0);


INSERT INTO venue_images (venue_id, photo_url) VALUES   
(1,'https://cdn.theculturetrip.com/wp-content/uploads/2019/04/feature_vertical-gallery-chicago-_-8.jpg'),
(1,'https://www.tripsavvy.com/thmb/VPYlfEARBBZbqwu3aGl9a7VfLHg=/3000x1687/smart/filters:no_upscale()/GettyImages-472768194-5d167ebc1a634312b25a98ca5d6613f9.jpg'),
(1,'https://d4qwptktddc5f.cloudfront.net/easy_thumbnails/thumbs_Interior-Design-American-Kennel-Club-Museum-of-the-Dog-New-York-01-0319.jpg.770x0_q95.jpg'),
(1,'https://img.theculturetrip.com/1440x807/smart/wp-content/uploads/2019/01/dg00xh.jpg'),
(1,'https://arttoartgallery.com/wp-content/uploads/2021/01/newslide2-1.jpg'),
(1,'https://arttoartgallery.com/wp-content/uploads/2020/07/slidehpome-1.jpg'),
(2,'https://lh3.googleusercontent.com/proxy/hbubu-VDHkandWlogIVK9b-F8g93ZQroUogQQcfIbsJ9d_0C7IXUojHhZBUnznUuMDo68mLyClWAmBG9irIxVBC-BrwWmtpllftrOoIcu6wpIex6Tb4KbUNx9VHx5QWX1bxbGitxxXKFiHIjVM0'),
(2,'http://thepaperbox.nyc/wp-content/uploads/2016/02/bar-185x185.jpg'),
(2,'http://thepaperbox.nyc/wp-content/uploads/2016/02/thepaperboxbrooklyn3-185x185.jpg'),
(2,'http://thepaperbox.nyc/wp-content/uploads/2016/02/venue-day-950x680.jpg'),
(3,'https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fpartyslate.imgix.net%2Fphotos%2F1013132%2Fphoto-ce8c76fb-e757-4cc5-a140-1f9f27ae15db.jpg%3Fixlib%3Djs-2.3.2%26w%3D1200%26h%3D630%26fit%3Dcrop%26crop%3Dfaces%252Cedges'),
(3,'https://eventective-media.azureedge.net/2831936_lg.jpg'),
(3,'https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fpartyslate.imgix.net%2Fcompanies%2F24352%2Fcover-image-a3eae026-5b9c-4fa8-af19-78ae3cbcba51.jpg%3Fixlib%3Djs-2.3.2%26w%3D1200%26h%3D630%26fit%3Dcrop%26crop%3Dfaces%252Cedges'),
(3,'https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fscontent-lga3-1.xx.fbcdn.net%2Fv%2Ft1.18169-9%2F14462948_1152292251473791_2209580590703423669_n.jpg%3F_nc_cat%3D110%26ccb%3D1-5%26_nc_sid%3D9267fe%26_nc_ohc%3DqIavN6HxDngAX84BAvv%26_nc_ht%3Dscontent-lga3-1.xx%26oh%3D37cb116efff26514cefd0e3628f94036%26oe%3D61858E99'),
(3,'https://fever.imgix.net/plan/photo/7a5b9d32-dea4-11e9-bf03-06551cb39bc6.jpg?w=550&h=550&auto=format&fm=jpg'),
(4, 'https://thebronxbrewery.com/wp-content/uploads/2021/09/Backyard-people-e1632154409984-665x1024.jpg'),
(5, 'https://images.squarespace-cdn.com/content/v1/54ad93f9e4b06a324abc18f1/1453307686618-09XA4APXCEDJPDXJX292/image-asset.jpeg'),
(5, 'https://s3-media3.fl.yelpcdn.com/bphoto/AbLi4bUCt0lVHKvxHFxaaw/348s.jpg');
