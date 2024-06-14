const express = require('express');
require('dotenv').config();
const allRoutes = require('./src/app');
const path = require('path');

const app = express();

app.use(express.json());
app.use('/uploads', express.static(path.join('src', 'uploads')))
app.use(allRoutes);


app.listen(process.env.PORT, () => {
    console.log(`server is running at port ${process.env.PORT}`)
})