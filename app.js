const express = require('express');
const bodyParser = require('body-parser');
const sendEmail = require('./mail.js');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(express.static(''));

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

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
