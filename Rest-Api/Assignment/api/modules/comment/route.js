const express = require('express');
const router = express.Router();

const { getComments, getComment, createComment } = require('./controller')

router.get('/', getComments);
router.get('/:id', getComment);
router.post('/', createComment);
// router.put('/:id', updateUser);
// router.delete('/:id', deleteUser);

module.exports = router;