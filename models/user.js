'use strict';
const { encode } = require('../helpers/bcrypt')
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: DataTypes.STRING,
        password: DataTypes.STRING
    }, {});
    User.associate = function(models) {
        // associations can be defined here
    };

    User.beforeCreate((user, options) => {
        user.password = encode(user.password);
    });
    return User;
};