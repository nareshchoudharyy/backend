const Product = require("../../models/product/Product");

const showProduct = async (req, res) => {
    try {
        const productId = req.params;
        const response =await Product.find();
        const filePath = `${req.protocol}://${req.get('host')}/uploads`;
        res.status(200).json({ msg: 'data fetched successfully', ImagesPath:filePath ,data:response});
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'internal server error' });
    }
}
module.exports = showProduct;