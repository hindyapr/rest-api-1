const { Todo } = require('../models')

module.exports = function(req, res, next) {

    Todo
        .findOne({
            where: {
                id: req.params.id
            }
        })
        .then(todo => {
            if (todo) {
                if (todo.userId === req.decode.userId) {
                    next()
                }
            } else {

                throw 'Not found'
                    // res
                    //     .status(404)
                    //     .json({ msg: 'not found' })
            }
        })
        .catch(err => {
            console.log(err, '<<<<<<< dicatch');
            next(err);
            // res
            //     .status(500)
            //     .json({ msg: 'Internal server error' })
        })
}