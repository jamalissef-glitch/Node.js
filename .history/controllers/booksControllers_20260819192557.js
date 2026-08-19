
const Book = require('../models/Book');

exports.createBook = async (req, res) => {
 try {
  const { title, author, publishedYear, genre } = req.body;
  if (!title || !author) {
   return res.status(400).json({ message: 'Title and Author are required' });
  }

  const newBook = new Book({ title, author, publishedYear, genre });
  const savedBook = await newBook.save();
  res.status(201).json(savedBook);
 } catch (error) {
  res.status(500).json({ message: 'Error creating book', error: error.message });
 }
};

exports.getBooks = async (req, res) => {
 try {
  const { year } = (req.query);
  let filter = {};
  if (year) {
   filter.publishedYear = Number(year);
  }

  const books = await Book.find(filter);
  res.status(200).json(books);
 } catch (error) {
  res.status(500).json({ message: 'Error fetching books', error: error.message });
 }
};

exports.searchBooks = async (req, res) => {
 try {
  const { genre } = req.query;
  if (!genre) {
   return res.status(400).json({
    message: 'Genre search query is required'
   });
  }
  const books = await Book.find({ genre: { $regex: genre, $options: 'i' } });
  res.status(200).json(books);
 } catch (error) {
  res.status(500).json({ message: 'Error searching books', error: error.message });
 }
};
