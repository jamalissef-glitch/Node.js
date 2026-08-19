const express = require('express');
const userRouter = require('./routes/userRoutes');

userRouter.get('/', getUsers);

module.exports = userRouter;