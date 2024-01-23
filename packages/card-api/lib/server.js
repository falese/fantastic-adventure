const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const env = require('dotenv')
const app = express();
const port = 3000;


const apiTarget = 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/sets/Classic';


const apiProxy = createProxyMiddleware({
  target: apiTarget,
  changeOrigin: true,
  pathRewrite: {
    '^/cards': '', 
    headers: {
      'X-RapidAPI-Key': 'a09c19c074mshb6f0a0f395bdc8bp173ffcjsncf284913904b',
      'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
      } 
  },
  onProxyReq(onProxyReq){
    onProxyReq.setHeader('X-RapidAPI-Key','a09c19c074mshb6f0a0f395bdc8bp173ffcjsncf284913904b');
    onProxyReq.setHeader('X-RapidAPI-Host','omgvamp-hearthstone-v1.p.rapidapi.com');
    
  }
});


app.use('/cards', apiProxy);

app.get('/spec', (req, res) => {
  const jsonPayload = require('./card-api-spec.json')
  
  

  res.json(jsonPayload);
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});