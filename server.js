const express = require('express')
const db_router = require('./data/db_router.js')

const server = express();
server.use(express.json())
server.use(db_router)

server.get('/',(req,res) => {
    res.send(`
    <h2>David's Unit 4 Project 2 API</h>
    <p>Welcome to my project API</p>
  `);
})

module.exports = server