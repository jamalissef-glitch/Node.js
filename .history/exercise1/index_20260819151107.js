
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());


let books = [
 { id: 1, title: "Atomic Habits", author: "James Clear" },
 { id: 1, title: "The Pragmatic Progtammer", author: "Andy Hunt" },
]

app.get('/books', (req, res) => {
 res.json(books);
});


app.get('/books/search', (req, res) => {
 const authorName = req.query.author;
 if (!authorName) {
  return res.status(400).json({ error: 'Fadlan geli author query params (tusaale: /books/search?author=James)' });
 }

 const fillteredBooks = books.filter(b => b.author.toLowerCase().includes(authorName.toLowerCase()));
 res.json(fillteredBooks);
})




app.listen(PORT, () => {
 console.log(`Server is running ${PORT}`);
});