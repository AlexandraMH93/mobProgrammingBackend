const router = require('express').Router()

const createLine  = require('../controllers/line')

router.post('/', createLine)

module.exports = router 