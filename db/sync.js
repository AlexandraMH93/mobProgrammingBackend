const User = require('../api/models/user')

const dbSync = async () => {
    try {
        await User.sync()
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = dbSync