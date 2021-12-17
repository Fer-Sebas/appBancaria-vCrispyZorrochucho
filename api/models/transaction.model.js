// Importar dependencias
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Instanciación objeto Transacción
const transactionScheme = new Schema ({
    from:{ 
       accountOwner: { type: String, required: true },
       accountNumber: { type: Number, required: true },
       id: { type: Number, required: true }
    },
    to:{ 
        accountOwner: { type: String, required: true },
        accountNumber: { type: Number, required: true },
       id: { type: Number, required: true }
    },
    amount: { type: Number, required: true },
    date: { type: Date, default: Date.now() },
    complaint: {
        hasComplaint: { type: Boolean, default: false },
        description: { type: String , default: ' '},
        response: { type: String, default: ' ' }
    }
});

// Relacionar objeto Usuario con DB

module.exports = mongoose.model('Transaction', transactionScheme)