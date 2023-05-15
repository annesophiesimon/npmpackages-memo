const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const npmpackagesRoutes = require('./routes/npmpackages');
const userRoutes = require('./routes/user');
const { MongoClient, ServerApiVersion } = require('mongodb');

// mongoose.connect(process.env.MONGO_URI)
//     .then(() => {
//         console.log("Sucessfully connect to mongoDB");
//     }).catch((error) => {
//         console.log("enable to connect to mongoDB");
//         console.error(error);
//     });

    const client = new MongoClient(process.env.MONGO_URI, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
    });

    async function run() {
      try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
      } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
      }
    }
    run().catch(console.dir);
    
const app = express();
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/api/npmpackages', npmpackagesRoutes);
app.use('/api/users', userRoutes);

module.exports = app;
