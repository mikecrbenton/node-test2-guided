const supertest = require("supertest")
const server = require("../server")
const db = require("../data/config")

beforeEach( async () => {
   // reseeds before each test to restart database
   await db.seed.run()
})

// this is a jest hook that will run after all the tests in the file run
afterAll( async () => {
   // close database connection before the test runner ends, to
   // prevent any warnings about leaks
   await db.destroy()
})


describe("Hobbits Integration Tests", () => {
   
   it("get /hobbits", async () => {
      const res = await supertest(server).get("/hobbits")
      // STATUS CODE
      expect(res.statusCode).toBe(200)
      // MIME TYPE
      expect(res.type).toBe("application/json")
      // DATA
      expect(res.body.length).toBeGreaterThanOrEqual(4)   // data/seeds
      expect(res.body[0].name).toBe("sam")  // check first record
   })

   it("gets a single hobbit by ID", async () => {
      const res = await supertest(server).get("/hobbits/2")
      expect(res.statusCode).toBe(200)
      expect(res.type).toBe("application/json")
      expect(res.body.id).toBe(2)
      expect(res.body.name).toBe("frodo")
   })

   it("expects an error for hobbit not in database", async () => {
      const res = await supertest(server).get("/hobbits/20")
      expect(res.statusCode).toBe(404)
   })

   it("Post/Create a new hobbit", async ()=> {
      const res = await supertest(server)
         .post("/hobbits")
         .send( { name: "bilbo" })

      expect(res.statusCode).toBe(201)
      expect(res.type).toBe("application/json")
      expect(res.body.name).toBe("bilbo")
      expect(res.body.id).toBeDefined()    // don't know exact number returned
   })


})

