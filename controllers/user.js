const { User } = require('../models');

class userController {
    static create(req, res) {
        User
            .create({
                email: req.body.email,
                password: req.body.password
            })
            .then(user => {
                res
                    .status(201)
                    .json(user);
            })
            .catch(err => {
                console.log(err);
                res
                    .status(500)
                    .json({ msg: 'internal server error' })
            })
    }

    static read(req, res) {
        User
            .findAll({})
            .then(users => {
                res
                    .json(users);
            })
            .catch(err => {
                console.log(err);
                res
                    .status(500)
                    .json({ msg: 'internal server error' })
            })
    }

    static readById(req, res) {
        User
            .findByPk(req.params.id)
            .then(user => {
                res
                    .json(user);
            })
            .catch(err => {
                console.log(err);
                res
                    .status(500)
                    .json({ msg: 'internal server error' })
            })
    }

    static updateById(req, res) {
        User
            .update({
                email: req.body.email,
                password: req.body.password,
            }, {
                where: {
                    id: req.params.id
                }
            })
            .then(data => {
                res
                    .json(data);
            })
            .catch(err => {
                res
                    .status(500)
                    .json(err);
            })
    }

    static delete(req, res) {
        User
            .destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(user => {
                res.json(user);
            })
            .catch(err => {
                console.log(err);
                res
                    .status(500)
                    .json({ msg: 'internal server error' })
            })
    }
}

module.exports = userController;