const express = require('express');
const app = express();

const tokenCheck =(req,res,next)=>{
    console.log('token checked')
    next();
}

app.get('/user',tokenCheck,(req,res)=>{
    res.send('data fetched successfully')
})
app.listen(5000,()=>{
    console.log('task done successfully')
})