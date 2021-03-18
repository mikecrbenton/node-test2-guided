// Everything moved to server.js

// IMPORT SERVER AND 'START'

const server = require("./server")

const port = process.env.PORT || 5000

// supertest 

server.listen(port, () => {
	console.log(`Running at http://localhost:${port}`)
})


