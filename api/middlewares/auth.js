const jwt = require('jsonwebtoken')

const User = require('./../models/user')

const checkAuth = (req, res, next) => {
    if (req.headers.authorization) return res.status(401).send('Unauthorized') 

    jwt.verify(req.headers.authorization, process.env.JWT_SECRET, async (err, payload) => {
        try { //ponemos el try en la funcion callback
            if (err) return res.status(401).send('Token not valid. Unauthorized')

            const user = await User.findOne({ where: { email: payload.email } })

            if (!user) return res.status(401).send('No user. Unauthorized')

            res.locals.user = user //local storage

            next() //ejecuta el siguiente middleware
        } catch (error) {
            console.log(error)
            res.status(500).send('Error on auth')
        }
        
    })
}

module.exports = { checkAuth }