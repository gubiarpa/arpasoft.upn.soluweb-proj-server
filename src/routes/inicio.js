const { Router } = require('express');
const {
    inicioGet,
} = require('../controllers');

const router = Router();

router.get('/', inicioGet);

module.exports = router;