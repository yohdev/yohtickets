// DB init
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({ path: '.env'})

const uri = process.env.ATLAS_URI;

const InitiateMongoServer = async () =>{
    try {
          // Connect to the MongoDB cluster
          await mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true  });
            const connection = mongoose.connection;
            connection.once('open', () => {
              console.log("MongoDB database connection established successfully");     
            })
    } 
    catch (err) {
          console.error(err);
    }
    }

    export default InitiateMongoServer;