const { request, response } = require('express');
const { Servicio } = require('../models');
const { ObjectId } = require('mongoose').Types;

const servicioGet = async (req = request, res = response) => {

    try {
        const [servicio] = await Servicio.find();
        res.json(servicio);
    } catch (error) {
        console.error('Can not get list of entities');
        console.error(error);
        res.status(400).send('Something broke!');
    }
}

module.exports = {
    servicioGet,
}
