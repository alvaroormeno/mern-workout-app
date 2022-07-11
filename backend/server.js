const express = require('express')

//Create express app, saves express function in app constant
const app = express();

app.get('/', (req, res) => {
    res.json({message: "Welcome to the app!"})

})

// listen for requests
app.listen(4000, () => {
    console.log('listening on port 4000')
})