const express =require('express');
const multer =require('multer');
const { default: mongoose } = require('mongoose');

mongoose.connect('mongodb+srv://naresh:dbNCatlas@cluster0.dt4ttg5.mongodb.net/database1_temp?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{
console.log('database connected successfully')
})
.catch((error)=>{
    console.log(error)
})

const multerStorage = multer.diskStorage({
    destination:(req,file,next)=>{
        next(null,'uploads')
    },
    filename:(req,file,next)=>{

    }
})

const upload = multer({storage:multerStorage}).single('thumbnail');

const app = express();
const userSchema = mongoose.Schema({
    name:String,
    thumbnail:Number,
    email:String
})

app.get('/read_users')



app.listen(5000,()=>{
    console.log('server is running at port 5000')
})