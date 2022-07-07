const { Router } = require('express');
const {
    servicioGet,
} = require('../controllers');

const router = Router();

router.get('/', servicioGet);

module.exports = router;