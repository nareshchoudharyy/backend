const express = require('express');
const { registerUser } = require('../../controllers/mainController');

const userRouter = express.Router();
userRouter.post('/register_user', registerUser)

module.exports = userRouter;