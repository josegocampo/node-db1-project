const express = require('express');
const server = express();
const accountsRouter = require('./routes/accountsRouter')


const db = require('./data/dbConfig.js');


server.use(express.json());

server.use('/accounts', accountRouter);


server.use((err, req, res, next) => {
        res.startus(500).json({ message: 'There was an internal Server Error'})
})








module.exports = server;