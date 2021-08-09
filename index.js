const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get('/', (req, res, next) => {
  res.send(`henlo`);
});

app.listen(3002, () => {
  console.log(`Server listening on 3002`)
});