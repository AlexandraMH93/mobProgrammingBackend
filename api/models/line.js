const { DataTypes } = require('sequelize')
const sequelize = require('../../db')

const Line = sequelize.define('line', {
    number: {
        type: DataTypes.INTEGER,
        allowNull: false, 
    },
    name: {
        type: DataTypes.STRING
    }
},
    { createdAt: false, updatedAt: false }
)

module.exports = Line