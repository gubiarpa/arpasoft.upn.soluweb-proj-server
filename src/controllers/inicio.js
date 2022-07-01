const { request, response } = require('express');
const { Inicio } = require('../models');
const { ObjectId } = require('mongoose').Types;

const inicioGet = async (req = request, res = response) => {

    try {
        const [inicio] = await Inicio.find();
        res.json(inicio);
    } catch (error) {
        console.error('Can not get list of entities');
        console.error(error);
        res.status(400).send('Something broke!');
    }
}

module.exports = {
    inicioGet,
}
