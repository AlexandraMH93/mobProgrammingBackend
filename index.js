require('dotenv').config() //lo ponemos arriba del todo siempre

const express = require('express') //lanzar servidor

const api = express()  //express arrancado dentro de api

api.listen(process.env.PORT, (error) => { //servidor en el puerto 3000
    if (error) throw new Error('Cannot start API')

    console.log('*'.repeat(50))
    console.log(`Guaguas API running on port ${process.env.PORT}`)
    console.log('*'.repeat(50))

})
