//import
//mongoose connect with url
//userSchema
//model

// read = user.find 
// insert = 1) take data from req 2) new User(req.body)  3)userData.save()

const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/newDBmongoose_tmp')
    .then(() => {
        console.log('database connected successfully')
    })
    .catch((err) => {
        console.log(err)
    })

const userSchema = mongoose.Schema({
    name:String,
    number: Number,
    email: String
});

const User = mongoose.model('users', userSchema);

app.get('/read_users',async(req,res)=>{
    try{
        const response = await User.find();
        res.status(200).json({message:"data fetched successfully",data:response})
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:"internal server error"})
    }
})
app.post('/insert_user', async(req,res)=>{
    try{
        const newData = req.body;
        const userData =  new User(newData);
        const response = await userData.save();
        res.status(200).json({msg:'user inserted successfullu',data:response})
    }
    catch(error){
        console.log(error)
        res.status(500).json({msg:"internal server error"})
    }
})

app.listen(4000, () => {
    console.log('server is running at port 4000')
})