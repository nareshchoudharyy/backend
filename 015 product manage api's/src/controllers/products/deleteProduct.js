const Product = require("../../models/product/Product");
const path = require("path");
const fs = require('fs');

const deleteProduct = async (req, res) => {
    try {
        const response = await Product.findOneAndDelete(req.params); 
        if (response === null) {
            return res.status(404).json({ msg: 'product id does not exist' });
        }
        if (fs.existsSync(path.join('src', 'uploads', response.thumbnail))) {
            fs.unlinkSync(path.join('src', 'uploads', response.thumbnail))
        };
        response.images.forEach((imgData) => {
            if (fs.existsSync(path.join('src', 'uploads', imgData))) {
                fs.unlinkSync(path.join('src', 'uploads', imgData))
            }
        })
        res.status(200).json({ msg: 'product deleted successfully'});
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'internal server error' });
    }
}
module.exports = deleteProduct;