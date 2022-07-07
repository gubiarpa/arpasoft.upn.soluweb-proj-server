const axios = require('axios');
const { request, response, json } = require('express');
const { Contacto } = require('../models');
const { ObjectId } = require('mongoose').Types;

const contactoPost = async (req = request, res = response) => {

    try {

        if (!req.headers.captcha) {
            res.json({ msg: 'Captcha Token is undefined' });
        }
        const secretKey = process.env.RECAPTCHA_SECRET_KEY;
        const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${req.headers.captcha}`;

        const { data } = await axios({
            method: 'get',
            url: verifyUrl,
        });

        const { success, score } = data;

        if (!success || score < 0.4) {
            return res.status(400).json({
                msg: 'Seguramente, eres un robot',
                score: body.score
            });
        }

        console.log('body', req.body);
        const { name, telephone, message } = req.body;

        const contacto = new Contacto({
            name,
            telephone,
            message
        });

        await contacto.save();

        return res.status(200).json({
            msg: 'Has sido verificado',
            score: body.score
        });

    } catch (error) {
        console.warn(error);
        res.status(400).send('Something broke!');
    }
}

module.exports = {
    contactoPost,
}
