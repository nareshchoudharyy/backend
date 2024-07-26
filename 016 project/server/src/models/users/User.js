const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String
    }
})
const User = new mongoose.model('users',userSchema);
module.exports = User;