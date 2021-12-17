// Importar dependencias
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Instanciación objeto Cuenta
const counterSchema = new Schema (
    {     
        title: { type: String },
        number: { type: Number },
    }
);

// Relacionar objeto Usuario con DB
module.exports = mongoose.model('Counter', counterSchema);