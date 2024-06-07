const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
app.use(express.json())


const url = 'mongodb://localhost:27017'
const database = "wsb-83";

const client = new MongoClient(url);

const dbConnection = async () => {
    await client.connect();
    const db = await client.db(database);
    const collection = await db.collection('users');
    return collection;
}
// read user 
app.get('/read_users', async (req, res) => {
    try {
        const collection = await dbConnection();
        const response = await collection.find().toArray();
        res.status(200).json({ msg: "fetched successfully", data: response })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ msg: "internal server error", data: res.body })
    }
})

// insert user 
app.post('/insert_users', async (req, res) => {
    try {
        const collection = await dbConnection();
        const response = await collection.insertOne(req.body);
        res.status(200).json({ 'msg': "Successfully Fetched", 'data': response })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ msg: "Internal server error" })
    }
})

// update user
app.put('/update_users/:name', async (req, res) => {
    try {
        const collection = await dbConnection();
        const response = await collection.updateOne(
            req.params, {
            $set: req.body
        })
        res.status(200).json({ msg: 'fetched successfully', data: response })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ msg: "Internal server error" })
    }
})
app.listen(5000, () => { console.log("app running at 5000 port") })