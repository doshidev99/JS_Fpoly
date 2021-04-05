const express = require('express')
const router = express.Router()

const cateController = require('../controller/cateController')

//[GET] /cate/:id
router.get('/:cate', cateController.cate)

//[GET] /cate
router.get('/',cateController.index)

module.exports = router