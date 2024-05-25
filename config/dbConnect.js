
import dotenv from 'dotenv';
dotenv.config() 
const createMongoURI = () => {
  const { MONGO_USERNAME, MONGO_PASSWORD, MONGO_DB_NAME } = process.env;
 
  if (!MONGO_USERNAME || !MONGO_PASSWORD || !MONGO_DB_NAME ) {
    throw new Error('Missing required environment variables for MongoDB connection.');
  }

  const uri = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@mernstack-pagination.dmkoc.mongodb.net/${MONGO_DB_NAME}?retryWrites=true&w=majority`;
  //MONGO_URI="mongodb+srv://topu:Hphp2010f@mernstack-pagination.dmkoc.mongodb.net/rayan-typescript-mern-3?retryWrites=true&w=majority"

  return uri;
};

export default createMongoURI;
