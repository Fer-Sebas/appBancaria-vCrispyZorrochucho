// Importar dependencias
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Instanciación objeto Usuario
const userSchema = new Schema (
    {
        _id: { type: Number },
        username: { 
            first: { type: String, required: true, trim: true, minlenght: 3 },
            last: { type: String, required: true, trim: true, minlenght: 3 }
        },
        idDoc : {
            type: { type: String, required: true },
            number: { type: Number, required: true },
            date: { type: Date, required: true}
        },
        birthDate: { type: Date, required: true },
        email: { type: String, required: true },
        userType: { type: String, default: 'USER' },
        address: { type: String, required: true },
        accounts: { type: Array },
        password: { type: String, required: true }
    }, 
    {
        timestamps: true,
    }
);

// Relacionar objeto Usuario con DB
module.exports = mongoose.model('User', userSchema);;