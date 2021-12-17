// Importar dependencias
const router = require('express').Router()
let Transaction = require('../models/transaction.model')
let Account = require('../models/account.model')

router.route('/complaints').get( getUserComplaints, (req, res) => {
    res.send(complaints);
})

router.route('/:id').get( getUserTransactions, (req, res) => {
    res.send(transactions);
})

router.route('/').post( checkSenderAccount, checkTargetAccount, (req, res) => {

    const amount = parseInt(req.body.amount)
    const total = amount + (amount * 1 / 100)
    const senderNewBalance = parseInt(senderAccount.balance) - parseInt(total)
    const targetNewBalance = parseInt(targetAccount.balance) + parseInt(amount)

    const from ={ 
        accountOwner: senderAccount.owner.name,
        accountNumber: senderAccount.number,
        id: senderAccount.owner.id
    }
    const to ={ 
        accountOwner: targetAccount.owner.name,
        accountNumber: targetAccount.number,
        id: targetAccount.owner.id
    }

    if (req.body.from === 10000000) {

        // Increase target account balance
        Account.findOneAndUpdate({number: targetAccount.number}, {balance: targetNewBalance})
        .then(res.status(200).json('Funds added')).catch(err => res.status(500).json('Error: ' + err));

        // Instantiate and push new transaction        
        const newTransaction = new Transaction( { from, to, amount } );
        newTransaction.save().then(() => res.status(201).json('Transaction Created')).catch(err => res.status(500).json('Error: ' + err));

    }

    else {

        // Check if sender balances is enough after tax
        if (senderAccount.balance > total) {

            // Reduce sender account balance
            Account.findOneAndUpdate({number: senderAccount.number}, {balance: senderNewBalance})
            .then(res.status(200)).catch(err => res.status(500).json('Error: ' + err));

            // Increase target account balance
            Account.findOneAndUpdate({number: targetAccount.number}, {balance: targetNewBalance})
            .then(res.status(200)).catch(err => res.status(500).json('Error: ' + err));

            // Instantiate and push new transaction
            const newTransaction = new Transaction( { from, to, amount } );
            newTransaction.save().then(() => res.status(201).json('Transaction Created')).catch(err => res.status(500).json('Error: ' + err));

        }

        else {
            res.send(`No Money`)
        }

    }

    
})

router.route('/').put((req, res) => {
    // TO do, add complaint handler
})

async function getUserTransactions (req, res, next) {
    try{
        transactions = await Transaction.find({$or: [{ "from.id": req.params.id }, { "to.id": req.params.id }]})
        if (transactions == null) { return res.status(404).json('Cannot find transactions') }
    } catch (err) { return res.status(500).json('Server error') }
    res.transactions = transactions
    next()
}

async function getUserComplaints (req, res, next) {
    try{
        complaints = await Transaction.find({ "complaint.hasComplaint": true })
        if (complaints == null) { return res.status(404).json('Cannot find complaints') }
    } catch (err) { return res.status(500).json('Server error') }
    res.complaints = complaints
    next()
}

async function checkSenderAccount (req, res, next) {
    try{
        senderAccount = await Account.findOne({ number: req.body.from })
        if (senderAccount == null) { return res.status(404).json('Cannot find sender account') }
    } catch (err) { return res.status(500).json('Server error') }
    res.senderAccount = {senderAccount}
    next()
}

async function checkTargetAccount (req, res, next) {
    try{
        targetAccount = await Account.findOne({ number: req.body.to })
        if (targetAccount == null) { return res.status(404).json('Cannot find accounts') }
    } catch (err) { return res.status(500).json('Server error') }
    res.targetAccount = {targetAccount}
    next()
}

module.exports = router;
