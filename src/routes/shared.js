const { Router } = require('express');
const {
    sharedGet,
} = require('../controllers');

const router = Router();

router.get('/', sharedGet);

module.exports = router;