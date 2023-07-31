// 1. Create web server
// 2. Create route handlers
// 3. Start web server
// 4. Install nodemon

// 1. Create web server
const express = require('express');
const app = express();

// 2. Create route handlers
// app.get('/', (req, res) => {
//   res.send('Hi there');
// });

// app.post('/', (req, res) => {
//   res.send('Post request');
// });

// app.get('/comments', (req, res) => {
//   res.send('Comments');
// });

// 3. Start web server
app.listen(3000, () => {
  console.log('Listening');
});

// 4. Install nodemon
// npm install -g nodemon
// nodemon index.js
// npm run dev
