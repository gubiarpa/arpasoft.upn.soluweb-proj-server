const { Schema, model } = require('mongoose');

const InicioSchema = Schema({
    slogan: {
        type: String,
    },
    welcome: {
        type: String,
    },
    customer1: {
        type: String,
    },
    testimony1: {
        type: String,
    },
});

InicioSchema.methods.toJSON = function () {
    const { __v, _id, ...inicio } = this.toObject();
    inicio.uid = _id;
    return inicio;
}

module.exports = model('Inicio', InicioSchema);