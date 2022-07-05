const { request, response } = require('express');
const { Contacto } = require('../models');
const { ObjectId } = require('mongoose').Types;

const contactoPost = async (req = request, res = response) => {

    try {
        console.log(req.headers);
        res.json({});
    } catch (error) {
        console.error('Can not get list of entities');
        console.error(error);
        res.status(400).send('Something broke!');
    }
}

module.exports = {
    contactoPost,
}
