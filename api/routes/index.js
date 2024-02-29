const router = require('express').Router()

const  { checkAuth } = require('../middlewares/auth') 

router.use('/auth', require('./auth'))
router.use('/line', checkAuth, require('./line'))

module.exports = router