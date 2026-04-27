INSERT INTO country_entity (id, name, iso_code) VALUES (1, 'Colombia', 'CO');
INSERT INTO country_entity (id, name, iso_code) VALUES (2, 'United Kingdom', 'UK');
INSERT INTO country_entity (id, name, iso_code) VALUES (3, 'Japan', 'JP');
INSERT INTO country_entity (id, name, iso_code) VALUES (4, 'Germany', 'DE');
ALTER TABLE country_entity ALTER COLUMN id RESTART WITH 5;

INSERT INTO city_entity (id, name, country_id) VALUES (1, 'Bogota', 1);
INSERT INTO city_entity (id, name, country_id) VALUES (2, 'London', 2);
INSERT INTO city_entity (id, name, country_id) VALUES (3, 'Berlin', 4);
INSERT INTO city_entity (id, name, country_id) VALUES (4, 'Tokio', 3);
ALTER TABLE city_entity ALTER COLUMN id RESTART WITH 5;
