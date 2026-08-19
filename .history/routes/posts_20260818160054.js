const express = require('express');
const router = express.Router();

router.get('/', getPosts);
router.get('/:id', getPosts);


module.exports = router;