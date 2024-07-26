const Product = require("../../models/product/Product");
const fs = require('fs');
const path = require('path');

const updateProduct = async (req, res) => {
    try {

        //if product id not equal to 24 character it returns the fuction woith 404 status code
        if (req.params._id.length != 24) {
            return res.status(404).json({ msg: 'invalid product id' });
        }
        //cheacking if id exists
        const ifExist = await Product.findOne(req.params);
        if (!ifExist) return res.status(404).json({ msg: 'product not found' });
        const { name, description, price, mrp } = req.body;
        const data = {
            name,
            description,
            price,
            mrp
        }
        for (const key in data) {
            if ((data[key] == undefined) || (data[key] == "")) {
                delete data[key];
            }
        }
        if (req.files.thumbnail != undefined) {
            data.thumbnail = await req.files.thumbnail[0].filename;
            if (fs.existsSync(path.join('src', 'uploads', ifExist.thumbnail))) {
                fs.unlinkSync(path.join('src', 'uploads', ifExist.thumbnail))
            }
        }
        if (req.files.images != undefined) {
            const images = req.files.images.map((value) => {
                return value.filename;
            })
            data.images = await images;
            ifExist.images.forEach((imgData) => {
                if (fs.existsSync(path.join('src', 'uploads', imgData))) {
                    fs.unlinkSync(path.join('src', 'uploads', imgData))                                                                                                                                    
                }
            })
        }
        const response = await Product.updateOne(req.params, {
            $set: data
        })
        res.status(200).json({ msg: 'product updated successfully', data: response });
    }                                                 
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'internal server error' });
    }
}
module.exports = updateProduct;