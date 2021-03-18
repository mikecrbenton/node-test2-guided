// $ npm install supertest --save-dev
const supertest = require("supertest")

// no longer in index - separation of concerns
// closes server properly when not in index.js
//const server = require("../index")

// IMPORTING SERVER, NOT INDEX
// SUPERTEST STARTS AND ENDS SERVER 
const server = require("../server") 

// test("Hello World", () => {
//    expect(2+2).toBe(4)
// })

// -------------DOES IT RETURN THE EXPECTED :
// - STATUS CODE  ( 200,404, 500 etc...)
// - DATA FORMAT  ( JSON, HTML, XML etc..)
// - DATA         ( Object itself )

// async because we are making an http call
test("get /", async () => {
   const result = await supertest(server).get("/")
   // STATUS CODE
   expect(result.statusCode).toBe(200)
   // FORMAT ( MIME Type )
   expect(result.type).toBe("application/json")
   expect(result.headers["content-type"]).toBe('application/json; charset=utf-8')
   // RESPONSE DATA
   expect(result.body.message).toBe("Welcome to our API")
   expect(result.body.message).toBeTruthy()
   expect(result.body.message).toBeDefined()
})





