// Express App Setup
const express = require('express')
const dotenv = require('dotenv').config({ path: '.env'})
const app = express();
app.use(express.json());

// DB init
const mongoose = require('mongoose');
// JWT 
const jwt = require('jsonwebtoken');
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
const authRouter = require('./routes/api/users');

// Express route handlers
const api = async () =>{
  app.use('/api/users', authRouter); 

}

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
});
