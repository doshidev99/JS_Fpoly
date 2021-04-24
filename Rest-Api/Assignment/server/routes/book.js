const express = require('express')
const bookController = require('../controllers/bookController')

const router = express.Router()

router.get('/', bookController.getAll)
router.get('/:id', bookController.getDetail)

router.post('/create', bookController.createBook)
router.put('/:id', bookController.updateBook)
router.delete('/:id', bookController.deleteBook)

router.get('/search', bookController.searchBook)

module.exports = router