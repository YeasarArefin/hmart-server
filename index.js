const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
const ObjectId = require('mongodb').ObjectId;
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hmart Server Running");
});

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.3xxnz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {

    try {

        await client.connect();
        const database = client.db("hmart");
        const laptopsCollection = database.collection("laptops");
        const usersCollection = database.collection("users");
        const ordersCollection = database.collection("orders");
        const reviewCollection = database.collection("reviews");

        app.post('/laptops', async (req, res) => {

            const data = req.body;
            const result = await laptopsCollection.insertOne(data);
            res.json(result);

        });

        app.get('/laptops', async (req, res) => {

            const data = await laptopsCollection.find({}).toArray();
            res.send(data);

        });

        app.get('/laptops/:_id', async (req, res) => {

            const id = req.params._id;
            const query = { _id: ObjectId(id) };
            const data = await laptopsCollection.findOne(query);
            res.send(data);

        });

        app.delete('/laptops/:_id', async (req, res) => {

            const id = req.params._id;
            const query = { _id: ObjectId(id) };
            const data = await laptopsCollection.deleteOne(query);
            res.send(data);

        });

        app.post('/users', async (req, res) => {

            const data = req.body;
            const result = await usersCollection.insertOne(data);
            res.json(result);

        });

        app.put('/users', async (req, res) => {

            const data = req.body;
            const filter = { email: data.email };
            const options = { upsert: true };
            const updateDoc = { $set: data };
            const result = await usersCollection.updateOne(filter, updateDoc, options);
            res.json(result);

        });

        app.get('/users', async (req, res) => {

            const data = await usersCollection.find({}).toArray();
            res.send(data);

        });

        app.get('/users/:email', async (req, res) => {

            const email = req.params.email;
            const query = { email };
            const user = await usersCollection.findOne(query);
            let isAdmin = false;
            if (user?.role === 'admin') {
                isAdmin = true;
            }
            res.json({ admin: isAdmin });

        });

        app.put('/users/admin', async (req, res) => {

            const data = req.body;
            const filter = { email: data.email };
            const updateDoc = { $set: { role: "admin" } };
            const result = await usersCollection.updateOne(filter, updateDoc);
            res.json(result);

        });

        app.post('/orders', async (req, res) => {

            const data = req.body;
            const result = await ordersCollection.insertOne(data);
            res.json(result);

        });

        app.get('/orders', async (req, res) => {

            const result = await ordersCollection.find({}).toArray();
            res.json(result);

        });

        app.get('/orders/:_id', async (req, res) => {

            const id = req.params._id;
            const query = { _id: ObjectId(id) };
            const result = await ordersCollection.findOne(query);
            res.send(result);

        });

        app.put('/orders/:_id', async (req, res) => {

            const id = req.params._id;
            const updatedStatus = req.body;
            const query = { _id: ObjectId(id) };
            const options = { upsert: true };
            const updateDoc = {
                $set: {
                    status: updatedStatus
                },
            };
            const result = await ordersCollection.updateOne(query, updateDoc, options);
            res.json(result);

        });

        app.delete('/orders/:_id', async (req, res) => {

            const id = req.params._id;
            const query = { _id: ObjectId(id) };
            const result = await ordersCollection.deleteOne(query);
            res.json(result);

        });

        app.post('/reviews', async (req, res) => {
            let newReview = req.body;
            const result = await reviewCollection.insertOne(newReview);
            res.send(result);
        });

        app.get('/reviews', async (req, res) => {
            const result = await reviewCollection.find({}).toArray();
            res.send(result);
        });

    } finally {
        // await client.close();
    }

} run().catch(console.dir);

app.listen(port, () => console.log("response from port", port));