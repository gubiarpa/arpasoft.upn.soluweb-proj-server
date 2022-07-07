const { Router } = require('express');
const {
    precioGet,
} = require('../controllers');

const router = Router();

router.get('/', precioGet);

module.exports = router;