const express = require('express');
const router = express.Router();
const todoControll = require('../controllers/todo');
const authentic = require('../middlewares/authentication');
const authorize = require('../middlewares/authorization');

router.use(authentic);

router.post('/', todoControll.create);
router.get('/', todoControll.read);

// router.use(authorize);

router.get('/:id', authorize, todoControll.readById);
router.put('/:id', authorize, todoControll.updateById);
router.delete('/:id', authorize, todoControll.delete);



module.exports = router;