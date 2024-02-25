const express = require('express');
const bodyParser = require('body-parser');
const sendEmail = require('./mail.js');
const cors = require('cors');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
app.use(
  cors({
    origin: ['https://mailproject.vercel.app'],
    methods: ['POST', 'GET'],
    credentials: true,
  })
);
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json({ limit: '50mb' }));
app.get('/', (req, res) => {
  const indexPath = path.join(__dirname, 'public', 'index.html');
  res.sendFile(indexPath);
});


app.post('/form', (req, res) => {
  const userInput = req.body.text;
  const userEmail = req.body.email;
  try {
    sendEmail(userInput, userEmail);
  } catch (error) {
    console.log(error);
  }
  res.redirect('/');
});

app.listen(port);
