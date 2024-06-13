const express = require('express');
const insertProduct = require('../../controllers/products/insertProduct');
const upload = require('../../middlewares/multer/upload');

const productRoutes = express.Router();

productRoutes.post('/add_product', upload, insertProduct);

module.exports = productRoutes;