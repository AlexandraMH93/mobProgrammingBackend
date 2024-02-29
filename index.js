require('dotenv').config() //lo ponemos arriba del todo siempre

const morgan = require('morgan')
const express = require('express') //lanzar servidor
const sequelize = require('./db')

const api = express()  //express arrancado dentro de api

const dbSync = require('./db/sync.js')

const dbCheck = async () => {
    try {
        await sequelize.authenticate()
        await dbSync()
        console.log('Connected to Guaguas DB')
    } catch (error) {
        throw new Error(error)
    }
}

api.use(morgan('dev'))
api.use(express.json())
api.get('/', (req, res) => res.send('Connected to Guaguas'))
api.use('/api', require('./api/routes'))

api.listen(process.env.PORT, async (error) => { //servidor en el puerto 3000
    if (error) throw new Error('Cannot start API')
    await dbCheck()
    console.log('*'.repeat(50))
    console.log(`Guaguas API running on port ${process.env.PORT}`)
    console.log('*'.repeat(50))

})
