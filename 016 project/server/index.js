const express = require('express');
const allRoutes = require('./src/app');
const path = require('path');
const { adminRegister } = require('./src/controllers/mainController');
require('dotenv').config();
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname,'src','uploads')))

adminRegister();
app.use(allRoutes);

app.listen(process.env.PORT,()=>{
    console.log(`server is running at port ${process.env.PORT}`)
})