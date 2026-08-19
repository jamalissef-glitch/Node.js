
const express = require('express');
const router = express.Router();
const {
 getBooks,
 searchBooks,
 getBookById,
 createBook,
 updateBook,
 deleteBook
} = require('../controllers/booksControllers');

router.get('/search', searchBooks);
router.get('/', getBooks);
router.get('/:id', getBookById);
router.post('/', createBook);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);

module.exports = router;