

const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());


let books = [
 { id: 1, title: "Atomic Habits", author: "James Clear" },
 { id: 2, title: "The Pragmatic Progtammer", author: "Andy Hunt" }
];

app.get('/books', (req, res) => {
 res.json(books)
});


app.get('/books/search', (req, res) => {
 const authorName = req.query.author;
 if (!authorName) {
  return res.status(400).json({ error: 'Fadlan geli author query params (tusaale: /books/search?author=James)' })
 }

 const fillteredBooks = books.filter(b => b.author.toLowerCase().includes(authorName.toLowerCase()))
 res.json(fillteredBooks)
});


app.get('/books/:id', (req, res) => {
 const bookId = parseInt(req.params.id);
 const book = books.find(b => b.id === bookId);
 if (!book) {
  return res.status(404).json({ error: 'Book not found' });
 }
 res.json(book);
});


app.post('/books', (req, res) => {

 const { title, author } = req.body;

 if (!title || !author) {
  return res.status(400).json({ error: 'Fadlan buuxi title iyo author' });
 }

 const newBook = {
  id: books.length > 0 ? books[books.length - 1].id + 1 : 1,
  title: title,
  author: author
 };
 books.push(newBook);
 res.status(201).json(newBook);
});

app.listen(PORT, () => {
 console.log(`Server is running ${PORT}`);
});


