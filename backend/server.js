const express = require("express");
const { MongoClient } = require("mongodb");
const bodyparser = require("body-parser");

// // we can use dotenv and make a .env file after using this line
// require('dotenv').config()

// the code we used up fot .env is same as the code below, just the code below looks a bit clean
const dotenv = require("dotenv");
dotenv.config();

// console.log(process.env) // remove this after you've confirmed it is working
// console.log(process.env.MONGO_URI)

// Connection URL
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

// Database Name
const dbName = "pass-manager";

const app = express();
const port = 3000;
app.use(bodyparser.json());

client.connect();

// Get all the passwords
app.get("/", async (req, res) => {
  const db = client.db(dbName);
  const collection = db.collection("documents");
  const findResult = await collection.find({}).toArray();
  res.json(findResult);
});

// Save a password
app.post("/", async (req, res) => {
  const db = client.db(dbName);
  const collection = db.collection("documents");
  const findResult = await collection.find({}).toArray();
  res.send(req.body);
});

// Delete a password

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
