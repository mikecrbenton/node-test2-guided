module.exports = {

   // "PRODUCTION" DATABASE
   development: {

      client: "sqlite3",
      useNullAsDefault: true,
      connection: {
         filename: "./data/hobbits.db3",
      },
      migrations: {
         directory: "./data/migrations",
      },
      seeds: {
         directory: "./data/seeds",
      },
   },
   // TESTING DATABASE
   testing: {

      client: "sqlite3",
      useNullAsDefault: true,
      connection: {
         filename: "./data/test.db3",
      },
      migrations: {
         directory: "./data/migrations",
      },
      seeds: {
         directory: "./data/seeds",
      },

   }
   // can create as many db configurations as you need

} //exports

// NOW YOU NEED TO SPECIFY WHICH CONFIG WHEN RUNNING KNEX COMMANDS

// npx knex migrate:latest --env=development
// npx knex migrate:latest --env=testing

// npx knex seed:run --env=development
// npx knex seed:run --env=testing


