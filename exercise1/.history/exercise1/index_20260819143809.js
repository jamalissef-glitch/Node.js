
const express = require('express');
const app = express();

app.use(express.json());


let books = [
 { id: 1, title: "Atomic Habits", author: "James Clear" },
 { id: 1, title: "The Pragmatic Progtammer", author: "Andy Hunt" },
]

app.get('/books', (req, res) => {
 res.json(books);
});



const PORT = 3000;
app.listen(PORT, () => {
 console.log(`Server-ka wuxuu ka shaqaynayaa port ${PORT}`);
});