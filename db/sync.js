const User = require('../api/models/user')
const Line = require('../api/models/line')

const dbSync = async () => {
    try {
        //await User.sync()
        //await Line.sync()
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = dbSync