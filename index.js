require('dotenv').config() //lo ponemos arriba del todo siempre

const morgan = require('morgan')
const express = require('express') //lanzar servidor
const sequelize = require('./db')

const api = express()  //express arrancado dentro de api


const dbCheck = async () => {
    try {
        await sequelize.authenticate()
        console.log('Connected to Guaguas DB')
    } catch (error) {
        throw new Error(error)
    }
}

api.use(morgan('dev'))
api.use(express.json())
api.get('/', (req, res) => res.send('Connected to Guaguas'))

api.listen(process.env.PORT, (error) => { //servidor en el puerto 3000
    if (error) throw new Error('Cannot start API')

    console.log('*'.repeat(50))
    console.log(`Guaguas API running on port ${process.env.PORT}`)
    console.log('*'.repeat(50))

})
