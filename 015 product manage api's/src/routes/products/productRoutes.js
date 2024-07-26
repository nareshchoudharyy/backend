const express = require('express');
const upload = require('../../middlewares/multer/upload');
const { insertProduct, showProduct, deleteProduct, updateProduct } = require('../../controllers/controller');

const productRoutes = express.Router();

productRoutes.get('/show_products', showProduct);
productRoutes.post('/add_product', upload, insertProduct);
productRoutes.put('/update_product/:_id', upload, updateProduct);
productRoutes.delete('/delete_product/:_id', deleteProduct);

module.exports = productRoutes;