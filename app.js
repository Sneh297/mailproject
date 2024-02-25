const express = require('express');
const bodyParser = require('body-parser');
const sendEmail = require('./mail.js');
const cors = require('cors');

const app = express();
const port = 3000;
app.use(
  cors({
    origin: ['https://mailproject.vercel.app/'],
    methods: ['POST', 'GET'],
    credentials: true,
  })
);
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json({ limit: '50mb' }));
app.get('/', async (req, res) => {
  try {
    const htmlFilePath = path.join('./index.html');
    const htmlContent = await fs.readFile(htmlFilePath, 'utf8');
    res.send(htmlContent);
  } catch (error) {
    console.error('Error reading HTML file:', error);
    res.status(500).send('Internal Server Error');
  }
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
