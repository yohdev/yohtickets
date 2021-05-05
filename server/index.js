// Express App Setup
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config({ path: '.env'})

// ENV
const port = process.env.PORT || 5000;

let app = express();
app.use(express.json());

// Import DB
import InitiateMongoServer from './db.js';

InitiateMongoServer();

// Import Routes
import { userRoutes } from './users/userRoutes.js';

//Use CORS
app.use(cors());

// Express route handlers
app.use('/api/users', userRoutes);


app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
});
