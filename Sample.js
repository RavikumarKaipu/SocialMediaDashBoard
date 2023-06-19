import { MongoClient } from 'mongodb';

// MongoDB connection URL
const url = 'mongodb://localhost:27017';

// Database name
const dbName = 'ravidb';

// Login function
async function login(email, password) {
  try {
    // Create a new MongoDB client
    const client = new MongoClient('http://localhost:3000/');

    // Connect to the MongoDB server
    await client.connect();

    // Access the database
    const db = client.db(dbName);

    // Access the users collection
    const collection = db.collection('users');

    // Find the user document with the provided email and password
    const user = await collection.findOne({ email, password });

    // Close the MongoDB client
    client.close();

    return user; // Return the user document if found, otherwise null
  } catch (error) {
    console.error('Error occurred during login:', error);
    throw error;
  }
}

// Usage example
login('user@example.com', 'password')
  .then((user) => {
    if (user) {
      console.log('Login successful:', user);
    } else {
      console.log('Invalid credentials');
    }
  })
  .catch((error) => {
    console.error('An error occurred:', error);
  });
