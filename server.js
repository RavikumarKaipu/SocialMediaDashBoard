import React from "react";
const express = require("express");
const app = express();
const cors = require("cors");
const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;
const mongoURL = "mongodb://localhost:27017/ravidb";

app.use(cors());
app.use(express.json());

// Connect to the MongoDB database
let db;

MongoClient.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
  if (error) {
    console.log("Error connecting to the database:", error);
  } else {
    console.log("Connected to MongoDB successfully");
    db = client.db();
  }
});


app.post("/login", (req, res) => {
  // Handle login logic and interact with the database using the 'db' object
  // Example:
  const { email, password } = req.body;

  db.collection("users").findOne({ email, password }, (error, user) => {
    if (error) {
      console.log("Error finding user:", error);
      res.status(500).json({ error: "Internal server error" });
    } else if (!user) {
      res.status(404).json({ error: "Invalid credentials" });
    } else {
      res.json({ message: "Login successful" });
    }
  });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
