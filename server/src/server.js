const express = require ("express")
const cors = require("cors")
const {join} = require("path")
const listEndpoints = require("express-list-endpoints")
const eventDataRouter = require("./eventData")

const server = express()
const port = process.env.PORT || 3001

server.use(express.json()) //very important for displaying data otherwise shows null 
/* const corsOptions = {
    origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1) {
        callback(null, true)
      } else {
        callback(new Error("Not allowed by CORS"))
      }
    },
  } */
  
  server.use(cors())
server.use("/form", eventDataRouter)

console.log(listEndpoints(server))

server.listen(port, ()=> {
    console.log("Running on port", port)
})
