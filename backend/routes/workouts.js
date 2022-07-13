const { response } = require('express')
const express = require('express')
const Workout = require('../models/workoutModel')

const {createWorkout, getOneWorkout, getWorkouts, deleteWorkout, updateWorkout} = require('../controllers/workoutControllers')

const router = express.Router()

// GET ALL WORKOUTS //
router.get('/', getWorkouts)

// GET A SINGLE WORKOUT //  
router.get('/:id', getOneWorkout )

// POST A NEW WORKOUT //
router.post('/', createWorkout )

// DELETE A WORKOUT //
router.delete('/:id', deleteWorkout)

// UPDATE A WORKOUT //
router.patch('/:id', updateWorkout)

module.exports = router


// NOTE:
// These routes first use the express router, then the url we need and then the controller function