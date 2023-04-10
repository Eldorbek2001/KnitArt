const express = require('express');
const axios = require('axios');
require('dotenv').config();
const app = express();

const port = 3000;

app.use(express.static('public'));

app.get('/xyz', (req, res) => {
  res.send('Hello World!');
});

app.get('/cd', async (req, res) => {
  res.send('Hello World!');  
  
  
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
