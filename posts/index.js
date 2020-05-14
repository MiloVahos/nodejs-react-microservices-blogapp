const express = require('express');
const bodyparser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');

const app =  express();
app.use(bodyparser.json());
app.use(cors());

const posts = {};

app.get('/posts', (req, res) => {
  res.send(posts);
});

app.post('/posts', (req, res) => {
  const id = randomBytes(4).toString('hex');
  const { title } = req.body;
  posts[id] = {
    id, title
  };
  res.status(201).send(posts[id]);
});

app.listen(4000, () => {
  console.log('Listen on 4000');
});