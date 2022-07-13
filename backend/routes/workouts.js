const { response } = require('express')
const express = require('express')
const Workout = require('../models/workoutModel')

const {createWorkout, getOneWorkout, getWorkouts} = require('../controllers/workoutControllers')

const router = express.Router()

// GET ALL WORKOUTS
router.get('/', getWorkouts)

// GET A SINGLE WORKOUT
router.get('/:id', getOneWorkout )

// POST A NEW WORKOUT
router.post('/', createWorkout )

// DELETE A WORKOUT
router.delete('/:id', (req, res) => {
    res.json({message: 'DELETE a new Workout'})
})

// UPDATE A WORKOUT
router.patch('/:id', (req, res) => {
    res.json({message: 'UPDATE a Workout'})
})

module.exports = router