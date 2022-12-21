-- seeding table member
INSERT INTO "member" (name) VALUES('admin');
INSERT INTO "member" (name) VALUES('users');
-- seeding table user
INSERT INTO "user" (firstname,lastname,email,login,password,member_type) VALUES('admin','Doe','admin@doe.fr','admin','admin',1);


-- seeding table access
INSERT INTO "access" (name) VALUES('cabine VIP');
INSERT INTO "access" (name) VALUES('vertiaire des starts');
INSERT INTO "access" (name) VALUES('champagne');
INSERT INTO "access" (name) VALUES('arriver 2 heures avant le concert');
INSERT INTO "access" (name) VALUES('annulation sans frais');
INSERT INTO "access" (name) VALUES('venir avec un ami sans frais');
INSERT INTO "access" (name) VALUES('repas avec start');
INSERT INTO "access" (name) VALUES('dédicace privée');
