const { Router } = require('express');
const {
    aplicationGet,
    aplicationPost,
} = require('../controllers');

const router = Router();

router.get('/', aplicationGet);
router.post('/', aplicationPost);

module.exports = router;