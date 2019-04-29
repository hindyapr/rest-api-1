const express = require('express');
const router = express.Router();
const users = require('./users');
const userControll = require('../controllers/user');
const todos = require('./todos');

router.use('/api/signUp', userControll.create);
router.use('/api/signIn', userControll.login);
router.use('/api/todos', todos);

router.use('/api/users', users);


module.exports = router;