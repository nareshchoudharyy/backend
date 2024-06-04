const express = require('express');
const app = express();


const token = "nc123";
const tokenCheck =(req,res,next)=>{
    const usertoken = req.params.val;
    if(!usertoken){
        res.status(400).json({msg:'please Provide token Id'})
    }
    else if(usertoken != token){
        res.status(401).json({msg:'Invalid token Id'})
    } else{
        next();
    }
}
// app.use(tokenCheck)
app.get('/',(req,res)=>{
    res.send('at home page')
})
app.get('/user/:val?',tokenCheck,(req,res)=>{
    res.send('data fetched successfully for user')
})
app.get('/admin:val?',tokenCheck,(req,res)=>{
    res.send('data fetched successfully for admin')
})
app.get('/dev:val?',tokenCheck,(req,res)=>{
    res.send('data fetched successfully for developer')
})
app.listen(5000,()=>{
    console.log('task done successfully')
})