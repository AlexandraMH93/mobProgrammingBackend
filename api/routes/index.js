const router = require('express').Router()

const  { checkAuth  } = require('../middlewares/auth') 

router.use('/auth', require('./auth'))
router.use('/line', checkAuth, require('./line')) // para hacer cualquier peticion sobre las lineas hay que autorizar con el token

module.exports = router