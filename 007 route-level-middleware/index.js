const express = require('express');
const app = express();

const tokenCheck=(req,res,next)=>{
    console.log('at Middleware function')
    next();
}
app.use(tokenCheck);

app.get('/',(req,res)=>{
    res.send('at home page using app.get')
})
app.post('/',(req,res)=>{
    res.send('at home page using app.post');
})
app.listen("5000",()=>{
    console.log('Website is running at Port:- 5000')
})