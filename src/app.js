const express = require('express');
const {
  sayHello,
  uppercase,
  lowercase,
  firstCharacter,
  firstCharacters,
} = require('./lib/strings');

const { add, subtract, multiply, divide, remainder } = require('./lib/numbers');

const app = express();

app.use(express.json());

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
    res.status(200).json({ result: firstCharacter(req.params.string) });
  } else {
    res.status(200).json({ result: firstCharacters(req.params.string, req.query.length) });
  }
});
app.get('/numbers/add/:n1/and/:n2', (req, res) => {
  const n1 = parseInt(req.params.n1);
  const n2 = parseInt(req.params.n2);

  if (isNaN(n1) || isNaN(n2)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: add(n1, n2) });
  }
});
app.get('/numbers/subtract/:n1/from/:n2', (req, res) => {
  const n1 = parseInt(req.params.n2);
  const n2 = parseInt(req.params.n1);

  if (isNaN(n1) || isNaN(n2)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: subtract(n1, n2) });
  }
});
app.post('/numbers/multiply', (req, res) => {
  if (!req.body.a || !req.body.b) {
    res.status(400).send({ error: 'Parameters "a" and "b" are required.' });
  }

  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);

  if (isNaN(a) || isNaN(b)) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else {
    res.status(200).send({ result: multiply(a, b) });
  }
});
app.post('/numbers/divide', (req, res) => {
  if (req.body.a === 0) {
    res.status(200).json({ result: 0 });
  } else if (req.body.b === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else if (!req.body.a || !req.body.b) {
    res.status(400).send({ error: 'Parameters "a" and "b" are required.' });
  }

  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);

  if (isNaN(a) || isNaN(b)) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else {
    res.status(200).send({ result: divide(a, b) });
  }
});
app.post('/numbers/remainder', (req, res) => {
  if (req.body.a === 0) {
    res.status(200).json({ result: 0 });
  } else if (req.body.b === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else if (!req.body.a || !req.body.b) {
    res.status(400).send({ error: 'Parameters "a" and "b" are required.' });
  }

  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);

  if (isNaN(a) || isNaN(b)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).send({ result: remainder(a, b) });
  }
});
module.exports = app;
