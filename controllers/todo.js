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
                next(err);
                res
                    .status(500)
                    .json({ msg: 'internal server error' })
            })
    }

    static read(req, res) {
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
                next(err);
            })
    }

    static readById(req, res, next) {
        Todo
            .findByPk(req.params.id)
            .then(todo => {
                if (todo) {
                    res
                        .json(todo);
                } else {

                    throw 'Not found'
                }
            })
            .catch(err => {
                next(err);
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
                next(err)
                res
                    .status(500)
                    .json(err);
            })
    }

    static updateOneKeyById(req, res) {
        let obj = {}
        obj[req.body.key] = req.body.value

        Todo
            .update(obj, {
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
                next(err)
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