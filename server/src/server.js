const express = require ("express")
const cors = require("cors")
const {join} = require("path")
const listEndpoints = require("express-list-endpoints")
const eventDataRouter = require("./eventData")

const server = express()
const port = process.env.PORT || 3001

server.use(express.json()) //very important for displaying data otherwise shows null 

server.use("/form", eventDataRouter)

console.log(listEndpoints(server))

server.listen(port, ()=> {
    console.log("Running on port", port)
})
