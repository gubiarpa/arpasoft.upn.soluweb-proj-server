const { Schema, model } = require('mongoose');

const ServicioSchema = Schema({
    service1: {
        type: String,
    },
    description1: {
        type: String,
    },
    service2: {
        type: String,
    },
    description2: {
        type: String,
    },
    service3: {
        type: String,
    },
    description3: {
        type: String,
    },
});

ServicioSchema.methods.toJSON = function () {
    const { __v, _id, ...servicio } = this.toObject();
    servicio.uid = _id;
    return servicio;
}

module.exports = model('Servicio', ServicioSchema);