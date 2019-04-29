const { User } = require('../models')
const { verify } = require('../helpers/jwt')

module.exports = function(req, res, next) {
    try {
        const decode = verify(req.headers.token);

        User
            .findOne({
                where: {
                    email: decode.email
                }
            })
            .then(user => {

                if (user) {
                    req.decode = decode;
                    next()
                } else {

                    throw 'not authorized'
                        // res
                        //     .status(401)
                        //     .json({ msg: 'not authorized' })
                }
            })
            .catch(err => {
                res
                    .status(500)
                    .json({ msg: 'Internal server error' })
            })

    } catch (error) {

    }
}