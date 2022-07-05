const { request, response } = require('express');
const { Shared } = require('../models');
const { ObjectId } = require('mongoose').Types;

const sharedGet = async (req = request, res = response) => {

    try {
        const [shared] = await Shared.find();
        res.json(shared);
    } catch (error) {
        console.error('Can not get list of entities');
        console.error(error);
        res.status(400).send('Something broke!');
    }
}

module.exports = {
    sharedGet,
}
