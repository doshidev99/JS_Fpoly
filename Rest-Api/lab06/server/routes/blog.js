const express = require('express');
const cors = require('cors')

const blogController = require('../controllers/blog')

const router = express.Router();

// [GET] /blog/posts
router.get('/posts',cors(), blogController.getPosts)
router.get('/post', blogController.getPostById)

// [POST] /blog/post
router.post('/post', blogController.createPost)

// // [Delete]
router.delete('/post', blogController.deletePost)

// // [update]
// router.put('/post/:postId', blogController.updatePost)

module.exports = router;