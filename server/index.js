// Express App Setup
const express = require('express')
// DB init
const {MongoClient} = require('mongodb');
// Config import
const db = require('./config/keys')
// Express 
const app = express();
app.use(express.json());
// ENV
const PORT = 8080;


const main = async () =>{
  const client = new MongoClient(db,{ useNewUrlParser: true, useUnifiedTopology: true });
  try {
      // Connect to the MongoDB cluster
      await client.connect();

      // Make the appropriate DB calls
      await  listDatabases(client);

  } catch (err) {
      console.error(err);
  } finally {
      await client.close();
  }
}

main();

const listDatabases = async (client) =>{
  databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));
}






// Express route handlers

app.get('/', (req, res) => {
  res.send('Hi');
});

app.get('/values/all', async (req, res) => {
  res.send('Hi');
});

app.get('/values/current', async (req, res) => {
  res.send('Hi');
});


app.listen(8080, (process.env.PORT || PORT), () => {
  console.log(`Listening at http://localhost:${PORT}`)
});
