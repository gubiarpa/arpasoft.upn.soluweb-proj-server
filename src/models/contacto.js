const { Schema, model } = require('mongoose');

const ContactoSchema = Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    message: {
        type: String,
    },
});

ContactoSchema.methods.toJSON = function () {
    const { __v, _id, ...contacto } = this.toObject();
    contacto.uid = _id;
    return contacto;
}

module.exports = model('Contacto', ContactoSchema);