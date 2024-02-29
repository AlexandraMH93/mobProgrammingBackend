const router = require('express').Router()

const { checkAdmin } = require('../middlewares/auth') 

const createLine  = require('../controllers/line')

router.post('/', checkAdmin, createLine)

module.exports = router 