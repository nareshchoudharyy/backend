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
        const { name } = await req.body;
        const productData = await new Product({
            name: name,
            thumbnail: req.files.thumbnail[0].filename
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
app.put('/update_products/:_id', upload, async (req, res) => {
    try {
        const { name } = await req.body;
        const productData = await new Product({
            name: name,
            thumbnail: req.files.thumbnail[0].filename
        });
        const response = await productData.updateOne(req.params, {
            $set: productData
        });

        console.log(name)
        console.log(req.params)
        console.log(response)
        console.log(productData)

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
app.delete('/delete_data/:_id', async (req, res) => {

    try {
        const response = await Product.deleteMany(req.params);
        console.log(response)
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