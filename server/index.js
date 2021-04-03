// Express App Setup
import express from 'express';
import dotenv from 'dotenv';
dotenv.config({ path: '.env'})
let app = express();
app.use(express.json());

// DB init
import mongoose from 'mongoose';
// JWT 
import jwt from 'jsonwebtoken';
const accessTokenSecret = 'youraccesstokensecret';

// ENV
const uri = process.env.ATLAS_URI;
const port = process.env.PORT || 5000;


const main = async () =>{
try {
      // Connect to the MongoDB cluster
      await mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true  });
        const connection = mongoose.connection;
        connection.once('open', () => {
          console.log("MongoDB database connection established successfully");     
        })
        await api();
} 
catch (err) {
      console.error(err);
}
}

// Function calls
main();

// Import Routes
import { authRouter } from './routes/api/users.js';

//const authRouter = require('./routes/api/users');

// Express route handlers
const api = async () =>{
  app.use('/api/users', authRouter); 

}

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
});
