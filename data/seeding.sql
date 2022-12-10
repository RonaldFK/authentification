-- seeding table user
INSERT INTO "user" (firstname,lastname,email,login) VALUES('admin','Doe','admin@doe.fr','admin');

-- seeding table member
INSERT INTO "member" (name) VALUES('admin');

-- seeding table access
INSERT INTO "access" (name) VALUES('cabine VIP');
INSERT INTO "access" (name) VALUES('vertiaire des starts');
INSERT INTO "access" (name) VALUES('champagne');
INSERT INTO "access" (name) VALUES('arriver 2 heures avant le concert');
INSERT INTO "access" (name) VALUES('annulation sans frais');
INSERT INTO "access" (name) VALUES('venir avec un ami sans frais');
INSERT INTO "access" (name) VALUES('repas avec start');
INSERT INTO "access" (name) VALUES('dédicace privée');
