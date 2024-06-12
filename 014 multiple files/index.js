const express = require('express');
const upload = require('./middlewares/multer');
const Product = require('./model/Product');

require("./config")
const app = express();
app.use(express.json())



app.get('/show_products', async (req, res) => {
    try {
        const response = await Product.find()
        res.status(200).json({
            msg: "data fetched successfully",
            data: response
        })
    }
    catch (eror) {
        console.log(error);
        res.status(500).json({ msg: 'internal server error' });
    }
})
app.post('/add_products', upload, async (req, res) => {
    try {
        const { name } =await req.body;
        await console.log(req.files)
        const productData =await new Product({
            name: name,
            thumbnail:req.files.filename
        });
        const response = await productData.save();
        res.status(200).json({
            msg: "data fetched successfully",
            data: response
        })
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'internal server error' })
    }
})

app.listen(4600, () => {
    console.log('server is running at 4600')
})