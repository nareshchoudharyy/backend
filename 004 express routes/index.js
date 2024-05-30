const express = require('express')
const app = express();
app
app.get('/', (req,res)=>{
    res.send('at default');
});
app.get('/home', (req,res)=>{
    res.send('at home');
});
app.get('/another', (req,res)=>{
    res.send('at another');
});

app.listen(5000, ()=>{
    console.log("running")
})