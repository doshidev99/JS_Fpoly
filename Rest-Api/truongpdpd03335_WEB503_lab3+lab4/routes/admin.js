const express = require('express')
const router = express.Router()

const AdminController = require('../controller/AdminController')

router.get('/',AdminController.index)
router.get('/add',AdminController.add)
router.get('/cate',AdminController.cate)
router.get('/user',AdminController.user)

module.exports = router