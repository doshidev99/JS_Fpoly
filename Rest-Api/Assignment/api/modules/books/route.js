const express = require('express');
const router = express.Router();

const { getBooks, createBook, updateBook, deleteBook, searchBook } = require('./controller')

router.get('/', getBooks);
router.post('/', createBook);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);
router.get('/search', searchBook);

module.exports = router;