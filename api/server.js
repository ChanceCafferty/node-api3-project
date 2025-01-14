const express = require('express');
const { logger } = require('./middleware/middleware')
const server = express();
const usersRouter = require('./users/users-router')

// remember express by default cannot parse JSON in request bodies

// global middlewares and the user's router need to be connected here

// middlewares
server.use(express.json())
server.use(logger)

//users router
server.use('/api/users', usersRouter);

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

module.exports = server;
