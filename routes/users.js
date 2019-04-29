const express = require('express');
const router = express.Router();
const userControll = require('../controllers/user');

router.get('/', userControll.read);
router.post('/', userControll.create);
router.post('/login', userControll.login);
router.get('/:id', userControll.readById);
router.put('/:id', userControll.updateById);
router.delete('/:id', userControll.delete);



module.exports = router;