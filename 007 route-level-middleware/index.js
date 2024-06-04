const express = require('express');
const app = express();
const router1 = express.Router();
const router2 = express.Router();
const router3 = express.Router();

const m1=(req,res,next)=>{
    console.log('at m1 middleware for router1 using services as its route')
    next();
}
router1.use(m1);
router1.get('/',(req,res)=>{
    res.send('at services (get)')
})
router1.post('/',(req,res)=>{
    res.send('at services (post)')
})
router1.put('/',(req,res)=>{
    res.send('at services (put)')
})
router1.patch('/',(req,res)=>{
    res.send('at services (patch)')
})
router1.delete('/',(req,res)=>{
    res.send('at services (delete)')
})

const m2=(req,res,next)=>{
    console.log('at m2 middleware for router2 using services as its route')
    next();
}
router2.use(m2);
router2.get('/',(req,res)=>{
    res.send('at gallery file (get)')
})
router2.post('/',(req,res)=>{
    res.send('at gallery file (post)')
})
router2.put('/',(req,res)=>{
    res.send('at gallery file (put)')
})
router2.patch('/',(req,res)=>{
    res.send('at gallery file (patch)')
})
router2.delete('/',(req,res)=>{
    res.send('at gallery file (delete)')
})

const m3=(req,res,next)=>{
    console.log('at m3 middleware for router3 using services as its route')
    next();
}
router3.use(m3);
router3.get('/',(req,res)=>{
    res.send('at router3 file (get)')
})
router3.post('/',(req,res)=>{
    res.send('at router3 file (post)')
})
router3.put('/',(req,res)=>{
    res.send('at router3 file (put)')
})
router3.patch('/',(req,res)=>{
    res.send('at router3 file (patch)')
})
router3.delete('/',(req,res)=>{
    res.send('at router3 file (delete)')
})


const tokenCheck=(req,res,next)=>{
    console.log('At Middleware function-App')
    next();
}
app.use(tokenCheck);

app.get('/',(req,res)=>{
    res.send('at home page using app.get')
})
app.post('/',(req,res)=>{
    res.send('at home page using app.post');
})

app.use('/services', router1);
app.use('/gallery', router2);
app.use('/router3', router3);

app.listen(5000,()=>{
    console.log('Website is running at Port:- 5000')
})