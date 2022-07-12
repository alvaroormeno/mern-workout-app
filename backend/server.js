require('dotenv').config()

const express = require('express')
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
app.use('/api/workouts', workoutRoutes)

// listen for requests
app.listen(process.env.PORT, () => {
    console.log('listening on port 4000')
})

