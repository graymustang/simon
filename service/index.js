
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const uuid = require('uuid');

const port = process.argv.length > 2 ? process.argv[2] : 3000;
const authCookieName = 'token';

app.use(express.json());
app.use(cookieParser());

let users = [];
let scores = [];

let apiRouter = express.Router();
app.use('/api', apiRouter);

app.get(/.*/, (_req, res) => {
  res.send({ msg: 'Simon service' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
