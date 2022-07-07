const { Schema, model } = require('mongoose');

const PriceSchema = Schema({
    price1: {
        type: Number
    },
    price2: {
        type: Number
    },
    price3: {
        type: Number
    },
    price4: {
        type: Number
    },
    price5: {
        type: Number
    },
    price6: {
        type: Number
    },
    price7: {
        type: Number
    },
    price8: {
        type: Number
    },
});

PriceSchema.methods.toJSON = function () {
    const { __v, _id, ...price } = this.toObject();
    price.uid = _id;
    return price;
}

module.exports = model('Price', PriceSchema);