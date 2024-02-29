const User = require('../models/user')
const jwt = require('jsonwebtoken') //lo importamos para poder crear el token
const bcyrypt = require('bcrypt') //encripta la contraseña

const signup = async (req, res) => {
    try {
        const salt = bcyrypt.genSaltSync(parseInt(process.env.BCRYPT_SALT))
        req.body.password = bcyrypt.hashSync(req.body.password, salt)

        const user = await User.create(req.body)
        console.log(user)
        const token = jwt.sign( //crear el token
            { email: user.email }, //identifica al usuario como unico
            process.env.JWT_SECRET, //secret
            { expiresIn: '7d' } //solo se pone al terminar la aplicacion
        )
        //res.status(200).send('Account created')
        //res.status(200).json( { token }) //lo podemos poner sin llaves y te devuelve el token solo, asi te puestra el objeto con su clave valor
        res.status(200).json( {token: token, message: "Account created"} ) //json devuelve un objeto lo ponemos asi para poder mostrar dos cosas 
    } catch (error) {
        console.log(error)
        res.status(500).send('Error signing up')
    }
}

const login = async (req, res) => {
    try {
        const user = await User.findOne({
            where: {
                email: req.body.email
            }
        })

        if (!user) return res.status(500).send('Email or password incorrect') 
        if (!bcrypt.compareSync(req.body.password, user.password)) return res.status(500).send('Password incorrect')//contraseña sin encriptar que meten a logearse y contraseña encriptada creada cuando se signup
        
        const token = jwt.sign( //crear el token
            { email: user.email }, //identifica al usuario como unico
            process.env.JWT_SECRET, //secret
            { expiresIn: '7d' } //solo se pone al terminar la aplicacion
        )
        res.status(200).json({ token: token }) 
    } catch (error) {
        console.log(error)
        res.status(500).send('Error logging up')
    }
}

module.exports = {
    signup,
    login
}