const express = require('express');
const app = express();
app.get('/', (req,res)=>{
    res.send("At Home or default page(get)")
})
app.post('/', (req,res)=>{
    res.send("At Home(post)")
})
app.get('/About',(req,res)=>{
    res.send('At about page')
})
app.listen(5000, ()=>{
    console.log("Runing the app")
})