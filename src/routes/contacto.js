const { Router } = require('express');
const {
    contactoPost,
} = require('../controllers');

const router = Router();

router.post('/', contactoPost);

module.exports = router;