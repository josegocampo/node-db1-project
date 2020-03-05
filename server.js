const express = require('express');
const server = express();
const accountsRouter = require('./routes/accountsRouter')


const db = require('./data/dbConfig.js');


server.use(express.json());

server.use('/accounts', accountsRouter);

server.get('/', (req, res) =>{
        res.send(` <h1 style="text-align:center; margin-top: 100px"> WELCOME TO THE ACCOUNTS API</h1> `)
}
)


server.use((err, req, res, next) => {
        res.status(500).json({ message: 'There was an internal Server Error'})
})


module.exports = server;