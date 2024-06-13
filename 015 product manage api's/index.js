const express = require('express');
require('dotenv').config();
const allRoutes = require('./src/app');

const app = express();
app.use(express.json())
app.use(allRoutes)


app.listen(process.env.PORT, () => {
    console.log(`server is running at port ${process.env.PORT}`)
})