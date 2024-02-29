const router = require('express').Router()

const AuthRouter = require('./auth') 

router.use('/auth', AuthRouter)

module.exports = router