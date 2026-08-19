const express = require('express');
const router = express.Router();
const { getUsers, getUserInfo } = require('../controllers/users');

router.get('/', getUsers);
router.get('/:id', getUserInfo);

module.exports = router;


// routes example 