const express = require('express')
const router = express.Router()

const HomeController = require('../controller/HomeController')

router.get('/',HomeController.home)

module.exports = router