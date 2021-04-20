const express = require('express');

const UserController = require('../controller/UserController')

const router = express.Router();

// [GET] /blog/posts
router.post('/', UserController.getAll)

// [POST]
router.post('/register', UserController.register)

module.exports = router;