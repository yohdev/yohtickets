// const keys = require('./keys');

// Express App Setup
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());


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


app.listen(8080, (err) => {
  console.log(`Listening at http://localhost:8080`)
});
