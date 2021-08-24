BEGIN;

DROP TABLE IF EXISTS admin CASCADE;

CREATE TABLE admin (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100)  NOT NULL ,
    password VARCHAR(100) NOT NULL
);
-- facke datat
INSERT INTO admin (username, password) VALUES ('elham2000fadel@gmail.com', '12345');

COMMIT;