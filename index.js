import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
import bodyParser from 'body-parser';
import createMongoURI from './config/dbConnect.js';
import dotenv from 'dotenv'


dotenv.config();



// Initialize the app
const app = express();
const port = process.env.PORT||9000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
createMongoURI();


// User Schema
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const User = mongoose.model('User', UserSchema);

// Routes
app.get('/health', (req, res) => {
  res.send('Server Health is ok');
});

// Create user
app.post('/users', async (req, res) => {
  const { name, email } = req.body;
  const newUser = new User({ name, email });
  try {
    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all users
app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
