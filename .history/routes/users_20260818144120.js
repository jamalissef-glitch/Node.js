const express = require('express');
const userRouter = require('./routes/userRoutes');
const { getUsers } = require('../controllers/users');

userRouter.get('/', getUsers);

module.exports = userRouter;