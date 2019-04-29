const { User } = require('../models');
const { decode } = require('../helpers/bcrypt')
const { sign } = require('../helpers/jwt');

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

    static login(req, res) {
        User
            .findOne({
                where: {
                    email: req.body.email
                }
            })
            .then(user => {
                if (user) {
                    const isPasswordCorrect = decode(req.body.password, user.password);

                    if (isPasswordCorrect) {
                        const token = sign({
                            userId: user.id,
                            email: user.email
                        });

                        res
                            .status(201)
                            .json({ token });
                    } else {
                        res
                            .status(400)
                            .json({ msg: 'Invalid username/password' })
                    }
                } else {
                    res
                        .status(400)
                        .json({ msg: 'Invalid username/password' })
                }
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
                if (users) {
                    res
                        .json(users);
                } else {
                    res
                        .status(404)
                        .json(users);
                }
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
                if (user) {
                    res
                        .json(user);
                } else {
                    res
                        .status(404)
                        .json(users);
                }
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
        User
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
                console.log(err);
                res
                    .status(500)
                    .json({ msg: 'internal server error' })
            })
    }
}

module.exports = userController;