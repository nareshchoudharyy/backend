const express = require('express');
const app = express();
//taking mongoclient from mongodb package
const {MongoClient} = require('mongodb');

app.use(express.json());

app.get('/', (req, res) => {
    try {
        res.status(200).json({ 'msg': 'Okey : Fetched Successfully' })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ 'msg': 'Internal Server Error' })
    }
})
app.post('/adddata', (req, res) => {
    try {
        console.log(req.body)
        res.status(200).json({
            'msg': "ok"
        });
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'Internal Server Error' });
    }
})


app.listen(5000, () => {
    console.log('File run Successful')
})