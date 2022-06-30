const { request, response } = require('express');
const { Product } = require('../models');
const { ObjectId } = require('mongoose').Types;

const productGet = async (req = request, res = response) => {

    try {

        const { from = 0, limit = 5 } = req.query;
        const query = { state: true };

        const [totalRows, products] = await Promise.all([
            Product.countDocuments(),
            Product.find().skip(from).limit(limit)
        ]);

        res.json({
            totalRows,
            aplications: products
        });

    } catch (error) {
        console.error('Can not get list of entities');
        console.error(error);
        res.status(400).send('Something broke!');
    }
}

module.exports = {
    productGet,
}
