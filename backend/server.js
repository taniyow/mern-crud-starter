// import env file for credentials
require('dotenv').config()

// import express
const express = require('express')

// import ODM library
const mongoose = require('mongoose')

// import routes
const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')

// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log('Connected to DB + Listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })