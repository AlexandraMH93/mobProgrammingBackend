const User = require('../models/user')

const signup = async (req, res) => {
    try {
        const user = await User.create(req.body)
        res.status(200).send('User sign up')
    } catch (error) {
        console.log(error)
        res.status(500).send('Error signing up')
    }
}

module.exports = signup