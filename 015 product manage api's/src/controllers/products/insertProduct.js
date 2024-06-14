const Product = require("../../models/product/Product");

const insertProduct = async (req, res) => {
    try {
        const { name, description, price, mrp } = req.body;
        const thumbnail = req.files.thumbnail[0].filename;
        const images = req.files.images.map((imgData) => {
            return imgData.filename;
        });
        const data = new Product({
            name,
            description,
            price,
            mrp,
            thumbnail,
            images
        })
        const response = await data.save();
        console.log('product inserted');
        res.status(200).json({ msg: 'product inserted successfully', data: response });
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'internal server error' });
    }
}
module.exports = insertProduct;