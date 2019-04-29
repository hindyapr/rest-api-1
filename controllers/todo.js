const { Todo } = require('../models');

class todoController {
    static create(req, res) {
        Todo
            .create({
                title: req.body.title,
                description: req.body.description,
                userId: req.decode.userId
            })
            .then(todo => {
                res
                    .status(201)
                    .json(todo);
            })
            .catch(err => {
                // console.log(err);
                res
                    .status(500)
                    .json({ msg: 'internal server error' })
            })
    }

    static read(req, res) {
        console.log('masuk')
        Todo
            .findAll({
                where: {
                    userId: req.decode.userId
                }
            })
            .then(todos => {
                if (todos) {
                    res
                        .json(todos);
                } else {
                    res
                        .status(404)
                        .json(todos);
                }
            })
            .catch(err => {
                // console.log(err);
                res
                    .status(500)
                    .json({ msg: 'internal server error' })
            })
    }

    static readById(req, res, next) {
        console.log('masuk')
        Todo
            .findByPk(req.params.id)
            .then(todo => {
                if (todo) {
                    res
                        .json(todo);
                } else {
                    res
                        .status(404)
                        .json(todo);
                }
            })
            .catch(err => {
                // console.log(err, '<<<<<<< controll');
                next(err);
                // res
                //     .status(500)
                //     .json({ msg: 'internal server error' })
            })
    }

    static updateById(req, res) {
        Todo
            .update({
                title: req.body.title,
                description: req.body.description,
            }, {
                where: {
                    id: req.params.id
                }
            })
            .then(success => {
                if (success) {
                    res.json({ msg: "data berhasil diupdate" })
                } else {
                    res
                        .status(404)
                        .json({ msg: "data tidak ditemukan" })
                }
            })
            .catch(err => {
                res
                    .status(500)
                    .json(err);
            })
    }

    static delete(req, res) {
        console.log('masuk');
        Todo
            .destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(success => {
                if (success) {
                    res.json({ msg: "data berhasil dihapus" })
                } else {
                    res
                        .status(404)
                        .json({ msg: "data tidak ditemukan" })
                }
            })
            .catch(err => {
                next(err);
                res
                    .status(500)
                    .json({ msg: 'internal server error' })
            })
    }
}

module.exports = todoController;