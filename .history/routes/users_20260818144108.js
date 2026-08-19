const express = require('express');
const userRouter = require('./routes/userRoutes');
const { } = require('../controllers/users');

userRouter.get('/', getUsers);

module.exports = userRouter;