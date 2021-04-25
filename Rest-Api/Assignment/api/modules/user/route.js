const express = require('express');
const router = express.Router();

const { getUsers, createUser, deleteUser, updateUser } = require('./controller')

router.get('/', getUsers);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;