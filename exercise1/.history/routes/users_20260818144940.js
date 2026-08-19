const express = require('express');
const userRouter = express.Router();
const { getUsers } = require('../controllers/users');

router.get('/', getUsers);

module.exports = userRouter;