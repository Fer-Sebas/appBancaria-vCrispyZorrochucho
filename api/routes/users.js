// Importar dependencias
const router = require('express').Router()
const ObjectID = require("bson-objectid");
let User = require('../models/users.model')
let Account = require('../models/account.model')
let Counter = require('../models/counters.model')

async function getUserSerial (req, res, next) {
    try{ 
        userSerial = await Counter.findOne({ title: 'users' })
    }
    catch (err) { return res.status(500).json('Server error !!!') }
    res.userSerial = userSerial
    next()
}

// GET - Ver usuarios
router.route('/').get( async (req, res) => { User.find().then(users => res.json(users)).catch(err => res.status(500).json('Error: ' + err)); });

// POST - Añadir usuarios
router.route('/').post( getUserSerial, (req,res) => {

    const _id = userSerial + 1
    const username = req.body.username
    const birthDate = req.body.birthDate
    const email = req.body.email;
    const address = req.body.address;
    const idDoc = req.body.idDoc;
    const password = req.body.password;

    const newUser = new User( { _id, username, birthDate, email, address, idDoc, password } );
    
    // Incrementar contador
    Counter.findOneAndUpdate( { title: "users" } , { number: userSerial + 1 })
    .then(res.status(200).json('Counter Incremented')).catch(err => res.status(500)) 

    // newUser.save().then(() => res.status(201).json('User added!')).catch(err => res.status(500).json('Error: ' + err));

});

// GET - Ver usuario
router.route('/:id').get( getUser, (req, res) => { res.send(user) } );

// GET - Ver cuentas de un usuario
router.route('/:id/accounts').get( getUser, getUserAccounts, (req,res) => { res.send(accounts) })

// POST - Añadir cuenta
router.route('/:id/accounts').post( getUser, getAccountSerial, (req,res) => {

    const number = accountSerial.number + 1
    const owner = {
       name: user.username.first + ' ' + user.username.last,
       id: user._id
    }
    const _id = ObjectID()

    const newAccount = new Account( { _id, number, owner, } )

    // Incrementar contador
    Counter.findOneAndUpdate( { title: "accounts" } , { number: number })
    .then(res.status(200).json('Counter Incremented')).catch(err => res.status(500).json('Error: ' + err))      

    // Guardar cuenta en colección
    newAccount.save()
    .then(res.status(200).json('Account Saved')).catch(err => res.status(500).json('Error: ' + err))

    // // Crear referencia en documento de usuario
    User.findOneAndUpdate( { _id: user._id }, { $push: { accounts: { number } } } )
    .then(res.status(200).json('Reference Added')).catch(err => res.status(500).json('Error: ' + err))

});

async function getUser (req, res, next) {
    try {
        user = await User.findById(req.params.id)
        if (user == null) { return res.status(404).json('Cannot find user') }
    } catch (err) { return res.status(500).json('Server error') }
    res.user = user
    next();
}

async function getUserAccounts (req, res, next) {
    try{
        accounts = await Account.find({ "owner.id": req.params.id })
        if (accounts == null) { return res.status(404).json('Cannot find accounts') }
    } catch (err) { return res.status(500).json('Server error') }
    res.accounts = accounts
    next()
}

async function getAccountSerial (req, res, next) {
    try{ 
        accountSerial = await Counter.findOne({ title: 'accounts' })
    }
    catch (err) { return res.status(500).json('Server error !!!') }
    res.accountSerial = accountSerial
    next()
}




module.exports = router;