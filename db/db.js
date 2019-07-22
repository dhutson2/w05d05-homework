const mongoose = require('mongoose')

const connectionString = 'mongodb://localhost/rappers'

mongoose.connect(connectionString, {useNewUrlParser: true})

mongoose.connection.on('connected', () => {
    console.log(`mongoose connected to ${connectionString}`)
})

mongoose.connection.on('disconnected', () => {
    console.log(`mongoose disconnected from ${connectionString}`)
})

mongoose.connection.on('error', (err) => {
    console.log(`mongoose encountered error ${err}`)
})