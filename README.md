# knex-learn-mod

## Installing Dependencies
Give a web server (an Express application) read and write access to a database using a Knex.js, a JavaScript-based database query and schema builder.

`npm init -y`

### Add:
  - a web server: Express
  - a database client for your database management system ( DBMS ): Postgres
  - a query and schema builder, Knex.js

`npm i express pg knex`

## Initializing Knex and Configure
Knex operates based off a configuration file called the knexfile.js. Generate a "Knexfile template" at the root of your project.

`npx knex init`

## Create a "migration"

`npx knex migrate:make create_movies`

## Run the latest migrations to update database schema.

`npx knex migrate:latest`

## Seeding Data

`npx knex seed:make initial_movies`

`npx knex seed:run`

## Create an App.js to use Express
