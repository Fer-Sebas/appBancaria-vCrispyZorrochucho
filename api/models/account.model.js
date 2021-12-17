// Importar dependencias
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Instanciación objeto Cuenta
const accountScheme = new Schema (
    {   
        _id : { type: Schema.Types.ObjectId },    
        number: { type: Number, unique: true, required: true },
        owner: { 
            name: { type: String },
            id: { type: Number },
        },
        balance: { type: Number, default: 0 },
        status: { type: String, default: "PENDING" }
    }
);

// Relacionar objeto Usuario con DB
module.exports = mongoose.model('Account', accountScheme);