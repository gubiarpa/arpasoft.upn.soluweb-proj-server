const { Schema, model } = require('mongoose');

const AplicationSchema = Schema({
    name: {
        type: String,
    },
    state: {
        type: Boolean,
        default: true,
    }
});

AplicationSchema.methods.toJSON = function() {
    const { __v, _id,...aplication } = this.toObject();
    aplication.uid = _id;
    return aplication;
}

module.exports = model('Aplication', AplicationSchema);