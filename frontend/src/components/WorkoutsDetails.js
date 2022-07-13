import React from 'react'

//Note, use {} to destructure the passed prop and use workout from it
const WorkoutsDetails = ({workout}) => {
  return (
    <div className="workout-details">
        <h4> {workout.title} </h4>
        <p><strong>Load kg: </strong>{workout.load}</p>
        <p><strong>Reps: </strong>{workout.reps}</p>
        <p>{workout.createdAt}</p>
    </div>
  )
}

export default WorkoutsDetails