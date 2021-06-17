const express = require('express');
const { green, yellow } = require('chalk');
const path = require('path');

const PORT = 3000;

const app = express();

app.get('/', (req, res) => {
  console.log(yellow(`GET '/'`));
  res.sendFile(path.join(__dirname, 'src', 'html', 'index.html'));
});

app.get('/css/index.css', (req, res) => {
  console.log(yellow(`GET '/css/index.css`));
  res.sendFile(path.join(__dirname, 'src', 'css', 'index.css'));
});

app.get('/js/index.js', (req, res) => {
  console.log(yellow(`GET '/js/index.js/`));
  res.sendFile(path.join(__dirname, 'src', 'js', 'index.js'));
});

app.get('/favicon.ico', (req, res) => {
  console.log(yellow(`GET '/favicon.ico'`));
  res.sendFile(path.join(__dirname, 'public', 'favicon.ico'));
});

app.listen(PORT, () => {
  console.log(green(`Listening on PORT ${PORT}`));
});
