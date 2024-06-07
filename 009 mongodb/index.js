const express = require('express');
const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const database = async () => {
    await client.connect();
    const db = client.db('test_database');
    return db;
}

const insertData = async () => {
    const db = await database();
    const adminCollection = db.collection('admins');
    const response = await adminCollection.insertOne({
        fname: "tuntun",
        lname: "mausi",
        age: "12"
    })
    console.log(response);
}
// insertData();

const readData = async()=>{
    try{
        const db = await database();
        const adminCollection = await db.collection('admins');
        const response = await adminCollection.find().toArray();
        console.log(response)
    }
    catch(err){
        console.log(err)
    }
}
readData();

const app = express();
app.use(express.json())

app.listen(5000, () => { console.log('app running at port 5000') })