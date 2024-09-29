const express = require('express');
const utils = require('./modules/utils');
const app = express();
const port = 3000;

// Basic GET route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/getDate', (req, res) => {
  res.send(    
  `<html>
    <body>
      <p style="color: blue;">
        Hello ${req.query.name}. What a beautiful day. Server current date and time is ${utils.getDate()}
      </p>
    </body>
  </html>`
)});

app.get('/writeFile', (req, res) => {
    utils.appendToFile(req.query.text);  
    res.send('Data appended to file!')
  });

app.get('/readFile/:filename', (req, res) => {
    const text = utils.readFile(req.params.filename);

    if (text) {
      res.send(text);
    } else {
      return res.status(404).send(`<h1>404 - File Not Found</h1><p>The file <strong>${req.params.filename}</strong> does not exist.</p>`);
    }
  
  });

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});