const { DataTypes } = require('sequelize')
const sequelize = require('../../db')

const User = sequelize.define('user', {
    name: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        defaultValue: 'user',
        validate: {
            isIn: [[undefined, 'admin', 'user']]
        }
    }
})

module.exports = User