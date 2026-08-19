const express = require('express');
const router = express.Router();
const { getUsers, getUserInfo, updateUser, createUser } = require('../controllers/users');

router.get('/', getUsers);
router.get('/:id', getUserInfo);
router.post('/', createUser);
router.put('/update', updateUser);

module.exports = router;


// routes example 