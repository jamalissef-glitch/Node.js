const express = require('express');
const router = express.Router();
const { getUsers, getUserInfo, updateUser, createUser } = require('../controllers/users');

router.get('/', getUsers);
router.get('/:id', getUserInfo);
router.post('/create', createUser);
router.put('/update/:id', updateUser);
router.delete('/delete/:id', deleteUser);

module.exports = router;


// routes example 