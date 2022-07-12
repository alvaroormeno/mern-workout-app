const { response } = require('express')
const express = require('express')
const Workout = require('../models/workoutModel')

const router = express.Router()

// GET ALL WORKOUTS
router.get('/', (req, res) => {
    res.json({message: 'Get all workouts'})
}) 

// GET A SINGLE WORKOUT
router.get('/:id', (req, res) => {
    res.json({message: 'GET A SINGLE WORKOut'})
})

// POST A NEW WORKOUT
router.post('/', async (req, res) => {
    // grab properties from rq body byt destructing req.body
    const {title, load, reps} = req.body
    
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

})

// DELETE A WORKOUT
router.delete('/:id', (req, res) => {
    res.json({message: 'DELETE a new Workout'})
})

// UPDATE A WORKOUT
router.patch('/:id', (req, res) => {
    res.json({message: 'UPDATE a Workout'})
})

module.exports = router