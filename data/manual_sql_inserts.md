/c runs;

CREATE TABLE IF NOT EXISTS
  runs (
  run_id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  image_url VARCHAR(255),
  distance VARCHAR(50),
  elevation VARCHAR(50),
  votes INTEGER,
  route_url VARCHAR(255),
  description TEXT NOT NULL,
  restaurants TEXT NOT NULL,
  bars TEXT NOT NULL);
  INSERT INTO runs (name, image_url, distance, elevation, votes, route_url, description, restaurants, bars) VALUES(
    'Green Lake Trail',
    'green_lake_trail.jpg',
    '2.78',
    '44',
    0,
    'https://www.google.com/maps/d/u/0/embed?mid=12RFkXWqfNvgSrEwE6rdog5LRvu_92BSW',    
    'The inner loop around Green Lake Park',
    'Bongos, Turnpike Pizza, Spud Fish & Chip',
    'Olde 99 Pub, St. Andrews Bar & Grill, &Uumlber Tavern, Duck Island Ale House, Shelter Lounge'
  );
  INSERT INTO runs (name, image_url, distance, elevation, votes, route_url, description, restaurants, bars) VALUES(
    'Myrtle Edwards Park Trail',
    'myrtle_edwards_trail.jpg',
    '5.8',
    '59',
    0,
    'https://www.google.com/maps/d/u/0/embed?mid=1cKvVc5hovg03rEcAbaVBKa2ESMeTF7pb',
    'From the Seattle-Bainbridge Ferry Terminal, through the Sculpture Park, Myrtle Edwards Park, Centennial Park, to Elliott Bay Park, and back.',
    'The Pink Door, Petra Mediterranean Bistro, Umi Sake House, Tilikum Place Cafe, Toulouse Petit',
    'Fad&ouml Irish Pub Seattle, Amber, Sarajevo Restaurant & Lounge'
  );
  INSERT INTO runs (name, image_url, distance, elevation, votes, route_url, description, restaurants, bars) VALUES(
    'Alki Beach Trail',
    'alki_beach_trail.jpg',
    '5.25',
    '50',
    0,
    'https://www.google.com/maps/d/u/0/embed?mid=1PJQ8UwPpzGf_yyaM-88CuO8r5TVV8I5X',
    'From the West Seattle Ferry Terminal at Seacrest Park to the Alki Point Lighthouse and back.', 
    'Fruit Chatter Box, Blue Moon Burgers, Pepperdock Restaurant, Alki Cafe, Christos On Alki',
    'Alki Beach Pub, Cactus Alki Beach, El Chupacabra Alki, Salty''s on Alki Beach'
  );
  INSERT INTO runs (name, image_url, distance, elevation, votes, route_url, description, restaurants, bars) VALUES(
    'Fremont Trail',
    'fremont_trail.jpg',
    '3.92',
    '68',
    0,
    'https://www.google.com/maps/d/u/0/embed?mid=1xumt_7cnFqRYAEQbL6KzagLmwxe_tuY0',
    'From Hale''s Brewery through the Fremont neighborhood to Gasworks Park and back along the Burke-Gilman trail.', 
    'Jai Thai Restaurant, Fr&#275lard Pizza Company, Cafe Turko, Chinapie',
    'Fremont Dock Sports Bar & Grill, Pacific Inn Pub, The Barrel Thief, LTD Bar and Grill, The George & Dragon Pub, Red Door, Outlander Brewery and Pub'
  );
  INSERT INTO runs (name, image_url, distance, elevation, votes, route_url, description, restaurants, bars) VALUES(
    'Arboretum Trail',
    'arboretum_trail.jpg',
    '3.63',
    '246',
    0,
    'https://www.google.com/maps/d/u/0/embed?mid=1E5sPwTN7eNTrgNur4v29HBl3FtSl60yy',
    'A loop from the Arboretum''s Botanical Gardens, through Foster Island, Marsh Island, over the 520 bridge, through the Japanese Garden, and back to the start.', 
    'Cafe Largo',
    'Purr Cocktail Lounge'
  );
  INSERT INTO runs (name, image_url, distance, elevation, votes, route_url, description, restaurants, bars) VALUES(
    'Discovery Park Trail',
    'discovery_park_trail.jpg',
    '2.74',
    '381',
    0,
    'https://www.google.com/maps/d/u/0/embed?mid=1DLm4vgkLWOEflj4-TabCPj9JdKulEMAn',
    'The loop trail through Discovery Park',
    'Discovery Espresso',
    ''
  );
  INSERT INTO runs (name, image_url, distance, elevation, votes, route_url, description, restaurants, bars) VALUES(
    'Volunteer Park Trail',
    'volunteer_park_trail.jpg',
    '2.12',
    '195',
    0,
    'https://www.google.com/maps/d/u/0/embed?mid=1jC1f8aQh9YGz6_MxwlGAjxQt0m1zUxJO',
    'A loop from Volunteer Park through the Montlake neighborhood, around the reservoir, and back to the start.',
    'Volunteer Park Cafe, Vios Cafe & Marketplace',
    'Harry''s Bar, Liberty'
  );
  INSERT INTO runs (name, image_url, distance, elevation, votes, route_url, description, restaurants, bars) VALUES(
    'Golden Gardens Trail',
    'golden_gardens_trail.jpg',
    '4.52',
    '60',
    0,
    'https://www.google.com/maps/d/u/0/embed?mid=1b55vedbUN92dm-jsaB8Bhz57YYa_uY8_',
    'From Meadow Point at the top of Golden Gardens Park, down to the Ballard Locks and back.',
    'Ristorante Picolinos, Geo''s Cuban & Creole Cafe, Food Stall, Little Coney, Jibe Espresso Bar, Un Bien, Ray''s Boathouse, Red Mill Totem House, Lockspots Cafe',
    'The Matador'
  );
  INSERT INTO runs (name, image_url, distance, elevation, votes, route_url, description, restaurants, bars) VALUES(
    'Magnuson Park Trail',
    'magnuson_park_trail.jpg',
    '2.5',
    '69',
    0,
    'https://www.google.com/maps/d/u/0/embed?mid=1iYsjttm5uwMVZ4evLv__xQx6ZS-wXGIl',
    'A loop along the waterfront and frog trail in Magnuson Park.',
    'Pagliacci Pizza, Sand Point Grill',
    ''
  );
  INSERT INTO runs (name, image_url, distance, elevation, votes, route_url, description, restaurants, bars) VALUES(
    'Seward Park Trail',
    'seward_park_trail.jpg',
    '2.39',
    '310',
    0,
    'https://www.google.com/maps/d/u/0/embed?mid=1KbxqR4-u6Ike45w_qdrduDxTYw5Veiel',
    'A loop around Bailey Peninsula in Seward Park.',
    '',
    ''
  );

CREATE TABLE IF NOT EXISTS
users (
user_id SERIAL PRIMARY KEY,
name VARCHAR(255));
INSERT INTO users (name) VALUES('sample');