const { Schema, model } = require('mongoose');

const SharedSchema = Schema({
    slogan: {
        type: String,
    },
    welcome: {
        type: String,
    },
    phone: {
        type: String,
    },
    email: {
        type: String,
    },
    location: {
        type: String,
    },
});

SharedSchema.methods.toJSON = function () {
    const { __v, _id, ...inicio } = this.toObject();
    inicio.uid = _id;
    return inicio;
}

module.exports = model('Shared', SharedSchema);