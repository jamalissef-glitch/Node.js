const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const booksRouter = require('./routes/books');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.use('/books', booksRouter);

mongoose.connect(process.env.MONGO_URI)
 .then(() => {
  console.log('mongo is connected');
  app.listen(PORT, () => {
   console.log(`Server is running on http://localhost:${PORT}`);
  });
 })
 .catch(err => console.log('Mongoose connection error:', err));