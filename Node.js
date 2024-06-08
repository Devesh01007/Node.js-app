Set Up the Node.js Application
Create a simple "Hello World" Node.js application.
mkdir hello-world-nodejs
cd hello-world-nodejs
npm init -y
npm install express


Create  app.js

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
