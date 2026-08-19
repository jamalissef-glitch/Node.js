const express = require('express');
const router = express.Router();

router.get('/', getPosts);
router.get('/:id', getPost);


module.exports = router;