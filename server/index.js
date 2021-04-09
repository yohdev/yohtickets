// Express App Setup
import express from 'express';
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
import {userRouter} from './routes/api/users.js';
//import auth from './middleware/authmiddleware.js';

// Express route handlers
app.use('/api', userRouter);


app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
});
