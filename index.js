const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello, Dockerized Node.js App!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


// Replace 'your_connection_string' with the actual connection string from MongoDB Atlas
const connectionString = 'mongodb+srv://jay:ClPTaJtE9IEVFBis@cluster1.dqug6tn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1';

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB Atlas');
});

// Define your MongoDB schema and models here

