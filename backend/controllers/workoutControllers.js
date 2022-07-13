const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')

// GET all workouts
const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({createdAt: -1})

    res.status(200).json(workouts)
}

// GET a single workout
const getOneWorkout = async (req, res) => {
    const {id} = req.params 

    // check if id is valid
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such workout"})
    }

    const workout = await Workout.findById(id)

    if (!workout) {
        return res.status(404).json({error: "no such workout exists"})
    }

    res.status(200).json(workout)
}

// CREATE a new workout
const createWorkout = async(req, res) => {
    // grab properties from rq body byt destructing req.body
    const {title, load, reps} = req.body
    // add doc to db
    try {
        const workout = await Workout.create({
            title,
            load,
            reps
        }) 
        res.status(200).json(workout)
    } catch (error){
        res.status(400).json({error: error.message})
    }
}

// DELETE workout

// UPDATE workout


module.exports = {
    createWorkout,
    getWorkouts,
    getOneWorkout
}