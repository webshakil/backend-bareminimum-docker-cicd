import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const createMongoURI = () => {
  const { MONGO_USERNAME, MONGO_PASSWORD, MONGO_DB_NAME } = process.env;

  if (!MONGO_USERNAME || !MONGO_PASSWORD || !MONGO_DB_NAME) {
    throw new Error('Missing required environment variables for MongoDB connection.');
  }
  const uri = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@mernstack-pagination.dmkoc.mongodb.net/${MONGO_DB_NAME}?retryWrites=true&w=majority`;

  mongoose.connect(uri)
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));

  return uri;
};

export default createMongoURI;
