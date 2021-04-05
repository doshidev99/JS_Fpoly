const express = require('express')
const router = express.Router()

const upload = require('../config/multer')

const ProductController = require('../controller/ProductController')

//[GET] products/:id
router.get('/:id', ProductController.detailProduct)


//[POST] /products
router.post('/', upload.single('image'), ProductController.addPost)

//[GET] /products
router.get('/', ProductController.index)


module.exports = router