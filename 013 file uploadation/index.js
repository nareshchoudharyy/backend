const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const Product = require('./models/Product');

const app = express();
app.use(express.json())


mongoose.connect('mongodb+srv://naresh:dbNCatlas@cluster0.dt4ttg5.mongodb.net/database1_temp?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log('database connected successfully')
    })
    .catch((err) => {
        console.log(err)
    })


const multerStorage = multer.diskStorage({
    destination: (req, file, next) => {
        next(null, 'uploads');
    },
    filename: (req, file, next) => {

        const newFileName = Date.now() + file.originalname;
        next(null, newFileName);
    }
})

const uploadMiddleware = multer({storage:multerStorage}).single('thumbnail');

app.get('/read_data', async (req, res) => {
    try {
        const response = await Product.find();
        res.status(200).json({ msg: 'data fetched successfully', data: response })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ msg: 'internal server error' })
    }
})
app.post('/insert_data',uploadMiddleware, async (req, res) => {
    
    try {
        const {name} = req.body;
        const productData = new Product({
            name:name,
            thumbnail:req.file.filename
        })
        const response = await productData.save();
        res.status(200).json({ msg: 'data fetched successfully', data: response })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ msg: 'internal server error' })
    }
})

app.listen(5000, () => {
    console.log('server running on port 5000')
})