// db connection

const knex = require("knex")
const knexfile = require("../knexfile")

// package.json "test", "server"

// knexfile.development
// knexfile.testing
// knexfile.fooBar

module.exports = knex(knexfile[process.env.NODE_ENV]) // need to specify which config 

// CROSS-ENV USED IN THIS CASE TO RUN SCRIPTS IN package.json

//  "scripts": {
//     "test": "cross-env NODE_ENV=testing jest --no-watchman",
//     "server": "cross-env NODE_ENV=development nodemon index.js",
//     "start": "node index.js"
//   },
