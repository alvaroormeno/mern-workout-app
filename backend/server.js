require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')

//Create express app, saves express function in app constant
const app = express();

//MIDDLEWARE
// note: every time a request comes in, this function will fire.      
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use(express.json())
 
//routes
// our main route, we give a url and then the workoutRoutes
app.use('/api/workouts', workoutRoutes)

// connect to database
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
        console.log('connected to db & listening on port 4000')
})
    })
    .catch((error) => {
        console.log(error)
    })



