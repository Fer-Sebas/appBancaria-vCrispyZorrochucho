// Importar dependencias
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = 5000;

const usersRouter = require('./routes/users');
const transactionRouter = require('./routes/transactions');
const accountsRouter = require('./routes/accounts');

// Middleware   
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Rutas
app.use('/users', usersRouter);
app.use('/transactions', transactionRouter);
app.use('/accounts', accountsRouter);

mongoose.connect(process.env.ATLAS_URI, {useNewUrlParser: true});
const db = mongoose.connection;

db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Fetching database...\nDatabase connection stablished'));

// Inicializar servidor
app.listen ( port, () => console.log(`Initialising server...\nServer initialized on port: http://localhost:${port}`) );

// Renderizar homepage
app.get ('/', (req, res) => { res.status(200).sendFile('public/index.html', {root: __dirname}); });
