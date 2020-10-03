const express = require('express');
const {
  sayHello,
  uppercase,
  lowercase,
  firstCharacter,
  firstCharacters,
} = require('./lib/strings');

const app = express();

app.get('/strings/hello/:passedResponse', (req, res) => {
  res.status(200).json({ result: sayHello(req.params.passedResponse) });
});

app.get('/strings/upper/:string', (req, res) => {
  res.status(200).json({ result: uppercase(req.params.string) });
});

app.get('/strings/lower/:string', (req, res) => {
  res.status(200).json({ result: lowercase(req.params.string) });
});

app.get('/strings/first-characters/:string', (req, res) => {
  if (Object.keys(req.query).length === 0) {
    res.status(200).send({ result: firstCharacter(req.params.string) });
  } else {
    res.status(200).send({ result: firstCharacters(req.params.string, req.query.length) });
  }
});
module.exports = app;
