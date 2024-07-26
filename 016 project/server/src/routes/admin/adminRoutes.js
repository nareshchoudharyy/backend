const express = require('express');
const { adminLogin } = require('../../controllers/mainController');

const adminRoutes = express.Router();
adminRoutes.post('/login', adminLogin)

module.exports = adminRoutes;