CREATE DATABASE february;

/* \c february */
CREATE TABLE "users" (
    "id" SERIAL PRIMARY KEY,
    "name" text NOT NULL,
    "email" text NOT NULL UNIQUE,
    "phonenumber" text NOT NULL UNIQUE,
    "password" varchar NOT NULL
);

CREATE TABLE task(
    "id" SERIAL PRIMARY KEY,
    "title" VARCHAR(255),
    "content" VARCHAR(255),
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES person (id)
)