require('dotenv').config()

const express = require('express')

//Create express app, saves express function in app constant
const app = express();

//MIDDLEWARE
// note: every time a request comes in, this function will fire.      
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.get('/', (req, res) => {
    res.json({message: "Welcome to the app!"})

})

// listen for requests
app.listen(process.env.PORT, () => {
    console.log('listening on port 4000')
})

