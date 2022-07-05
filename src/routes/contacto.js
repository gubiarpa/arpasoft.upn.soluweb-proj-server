const { Router } = require('express');
const {
    contactoPost,
} = require('../controllers');

const router = Router();

router.get('/', contactoPost);

module.exports = router;