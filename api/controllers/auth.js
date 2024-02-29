const User = require('../models/user')
const jwt = require('jsonwebtoken') //lo importamos para poder crear el token
const bcyrypt = require('bcrypt') //encripta la contraseña

const signup = async (req, res) => {
    try {
        const salt = bcyrypt.genSaltSync(parseInt(process.env.BCRYPT_SALT))
        req.body.password = bcyrypt.hashSync(req.body.password, salt)

        const user = await User.create(req.body)

        const token = jwt.sign( //crear el token
            { email: user.email }, //identifica al usuario como unico
            process.env.JWT_SECRET, //secret
            { expiresIn: '7d' }
        )
        //res.status(200).send('Account created')
        res.status(200).json( {token} )
    } catch (error) {
        console.log(error)
        res.status(500).send('Error signing up')
    }
}

module.exports = signup