const express = require('express');
const upload = require('../../middlewares/multer/upload');
const { insertProduct, showProduct, deleteProduct } = require('../../controllers/controller');

const productRoutes = express.Router();

productRoutes.get('/show_products', showProduct);
productRoutes.post('/add_product', upload, insertProduct);
productRoutes.delete('/delete_product/:_id', deleteProduct);

module.exports = productRoutes;