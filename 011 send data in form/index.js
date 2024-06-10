const express = require('express');
const { MongoClient, MongoNetworkError } = require('mongodb');
const multer = require('multer');

const app = express();
app.use(express.json())
const multExc = multer();


const url = 'mongodb://localhost:27017';
const database = 'backendWSB-83';
const client = new MongoClient(url);

const dbConnection = async () => {
    await client.connect();
    const db = client.db(database);
    const collection = db.collection('users');
    return collection;
}

//read user data
app.get('/read_users', async (req, res) => {
    try {
        const collection = await dbConnection();
        const response = await collection.find().toArray();
        res.status(200).json({data: response })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ msg: "internal server error" })
    }
})



//insert user with form or raw json format
app.post('/inset_user', multExc.none(), async (req, res) => {
    try {
        const collection = await dbConnection();
        const response = await collection.insertOne(req.body);
        console.log(response)
        res.status(200).json({ msg: "User successfully added", data: response })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ msg: "internal server error" })
    }
})



//update user with id
app.put('/update_user/:id',async(req,res)=>{
    try {
        const collection = await dbConnection();
        const response = await collection.updateOne(req.params,{
            $set:req,body
        });
        console.log(response)
        res.status(200).json({ msg: "User successfully updated", data: response })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ msg: "internal server error" })
    }
})

//delete user with id
app.delete('/delete_user/:_id',async(req,res)=>{
    try {
        const collection = await dbConnection();
        const response = await collection.deleteOne(req.params);
        console.log(response,req.params)
        res.status(200).json({ msg: "User removed", data: response })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ msg: "internal server error" })
    }
})

app.listen(7000, () => {
    console.log('server is running at port 7000');
})

// {
//     "_id": "666528e204148e324dff75fe"
// },
// {
//     "_id": "66652904ceb5c37b802c2aae"
// }