const { Router } = require('express');
const {
    productGet,
} = require('../controllers');

const router = Router();

router.get('/', productGet);

module.exports = router;