const express = require('express')

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
router.post('/', (req, res) => {
    res.json({message: 'POST a new Workout'})
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