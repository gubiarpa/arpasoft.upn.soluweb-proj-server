const { Schema, model } = require('mongoose');

const ProductSchema = Schema({
    title: {
        type: String,
    },
    content: {
        type: String,
    },
    state: {
        type: Boolean,
        default: true,
    }
});

ProductSchema.methods.toJSON = function () {
    const { __v, _id, ...product } = this.toObject();
    product.uid = _id;
    return product;
}

module.exports = model('Product', ProductSchema);