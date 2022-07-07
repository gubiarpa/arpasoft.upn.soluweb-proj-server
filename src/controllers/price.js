const { request, response } = require('express');
const { Price } = require('../models');
const { ObjectId } = require('mongoose').Types;

const precioGet = async (req = request, res = response) => {

    try {
        const [precio] = await Price.find();
        res.json(precio);
    } catch (error) {
        console.error('Can not get list of entities');
        console.error(error);
        res.status(400).send('Something broke!');
    }
}

module.exports = {
    precioGet,
}
