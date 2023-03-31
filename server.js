const express = require('express');
const axios = require('axios');
require('dotenv').config();
const app = express();

const port = 3000;

app.use(express.static('../public'));

app.get('/xyz', (req, res) => {
  res.send('Hello World!');
});

app.get('/:imageprompt', async (req, res) => {
  try {
    const imageprompt = req.params.imageprompt;
    const response = await axios({
      method: 'post',
      url: 'https://api.openai.com/v1/images/generations',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      },
      data: {
        model: 'image-alpha-001',
        prompt: `Generate an image of ${imageprompt}`,
        n: 3,
        size: '256x256',
        response_format: 'url'
      }
    });

    const imageUrl = response.data.data[0].url;
    res.send(`<img src="${imageUrl}" alt="${imageprompt}">`);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error generating image');
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
