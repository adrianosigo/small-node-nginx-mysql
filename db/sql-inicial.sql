CREATE TABLE people (
    id serial PRIMARY KEY,
    name text NOT NULL
);

INSERT INTO people (name) VALUES ('Nome Um');
INSERT INTO people (name) VALUES ('Nome Dois');
INSERT INTO people (name) VALUES ('Nome Tres');