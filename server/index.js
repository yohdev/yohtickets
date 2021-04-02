// Express App Setup
const express = require('express')
const dotenv = require('dotenv').config({ path: '.env'})
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());

// DB init
const mongoose = require('mongoose');

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
        api();
} catch (err) {
      console.error(err);
} finally{
    
}
}

// Function calls
main();


const usersRouter = require('./routes/api/users');
// Express route handlers
const api = async () =>{
  
  app.use('/api/users', usersRouter); 

}


app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
});
