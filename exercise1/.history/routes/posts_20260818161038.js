const express = require('express');
const { getPosts, getPostInfo } = require('../controllers/posts');
const router = express.Router();

router.get('/', getPosts);
router.get('/:id', getPostInfo);


module.exports = router;