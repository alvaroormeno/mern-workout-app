const mongoose = require('mongoose')

const Schema = mongoose.Schema

const workoutSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    }
}, {timestamps: true})

// schema defines the structure of a document/information inside our database

// a modal applies a schema to a particular modal, and we use the modal to interact with a collection of that name


// Exporting the model with two arguments (name, schema )
module.exports = mongoose.model('Workout', workoutSchema)