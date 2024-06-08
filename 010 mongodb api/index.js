const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
app.use(express.json());

const url = 'mongodb://localhost:27017'
const database = 'wsb-83';
const client = new MongoClient(url);

const dbCollection = async () => {
    await client.connect();
    const db = await client.db(database);
    const collection = await db.collection('users');
    return collection;
}

//read single Data with name as param
app.get('/read_user/:name', async (req, res) => {
    try {
        const collection = await dbCollection();
        const response = await collection.findOne(req.params);
        res.status(200).json({ msg: 'fetched successfully', data: response })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'internal server error' })
    }
})


//read all Data
app.get('/read_users', async (req, res) => {
    try {
        const collection = await dbCollection();
        const response = await collection.find().toArray();
        console.log(response)
        res.status(200).json({ msg: 'fetched successfully', data: response })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'internal server error' })
    }
})

//add single User
app.post('/insert_user', async (req, res) => {
    try {
        const collection = await dbCollection();
        const response = await collection.insertOne(req.body);
        res.status(200).json({ msg: 'Successfully added user', data: response })

    }
    catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'internal server error' })
    }
})

//add Multiple users
//add multiple users in an array containg the details of all users in multiple array
// [ 
//   {name:"{{randomFullName}}",batch:"Batch-83", email:"{{randomEmail}}"},
//   {name:"{{randomFullName}}",batch:"Batch-83", email:"{{randomEmail}}"},
//   {name:"{{randomFullName}}",batch:"Batch-83", email:"{{randomEmail}}"} 
// ]
app.post('/insert_users', async (req, res) => {
    try {
        // const response = req.body;
        const collection = await dbCollection();
        const response = await collection.insertMany(req.body);
        console.log(response)
        res.status(200).json({ msg: 'Successfully added user', data: response })

    }
    catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'internal server error' })
    }
})

//update single Users with name
app.put('/update_user/:name', async (req, res) => {
    try {
        const collection = await dbCollection();
        const response = await collection.updateOne(
            req.params, {
            $set: req.body
        })
        res.status(200).json({ msg: 'Successfully Updated user', data: response })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'internal server error' })
    }
})

//update multiple users with batch code
app.put('/update_users/:batch', async (req, res) => {
    try {
        const collection = await dbCollection();
        const response = await collection.updateMany(
            req.params, {
            $set: req.body
        })
        res.status(200).json({ msg: 'Successfully Updated user', data: response })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'internal server error' })
    }
})

//delete single User
app.delete('/delete_user/:name', async (req, res) => {
    try {
        //delete single user with their name
        const collection = await dbCollection();
        const response = await collection.deleteOne(req.params);
        console.log(response)
        res.status(200).json({ msg: 'Successfully Updated user', data: response })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'internal server error' })
    }
})

//delete multiple Users
app.delete('/delete_users/:batch', async (req, res) => {
    try {
        //delete users with batchcode
        const collection = await dbCollection();
        const response = await collection.deleteMany(req.params);
        console.log(response)
        res.status(200).json({ msg: 'Successfully Updated user', data: response })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'internal server error' })
    }
})



app.listen(4700, () => {
    console.log('server is running at port 4700 port');
})