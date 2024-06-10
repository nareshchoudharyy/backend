const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/newDBmongoose')
    .then(() => {
        console.log('database connected successfully')
    })
    .catch((err) => {
        console.log(err)
    })

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    mobile: Number,
    email: {
        type: String,
        required: true,
        unique: true
    }
})

const User = mongoose.model('users', userSchema)

const app = express()
app.use(express.json())

app.get('/read_users',async(req,res)=>{
    const response =await User.find();
    res.status(200).json({message:'data fetched successfully', data: response})
})

app.post('/insert_users', async (req, res) => {
    try {
        const data = req.body;
        const userdata = new User(data)
        const response = await userdata.save()
        res.status(200).json({ msg: "fetched successfully" })
    }
    catch(error){
        console.log(error)
        res.status(500).json({ msg: "internal server error" })
    }
})

app.listen(6700, () => {
    console.log('server is running at port 6700')
})