const express = require('express');
const path = require("path");
const app = express();
const htmlPath = path.join(__dirname,'public');
app.use(express.static(htmlPath));

app.get('/',(req,res)=>{
    res.sendFile(`${htmlPath}/index.html`)
})
app.get('/about',(req,res)=>{
    res.sendFile(`${htmlPath}/about.html`)
})
app.get('/courses',(req,res)=>{
    res.sendFile(`${htmlPath}/courses.html`)
})
app.get('/gallery',(req,res)=>{
    res.sendFile(`${htmlPath}/gallery.html`)
})
app.get('/enquiry',(req,res)=>{
    res.sendFile(`${htmlPath}/enquiry.html`)
})
app.get('/contact',(req,res)=>{
    res.sendFile(`${htmlPath}/contact_us.html`)
})

app.listen(5000,()=>{
    console.log('running the file')
})