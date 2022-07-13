import React, {useState} from 'react'

const WorkoutForm = () => {

    // STATES for title, load & reps
    const [title, setTitle] = useState('')
    const [load, setLoad] = useState('')
    const [reps, setReps] = useState('')
    const [error, setError] = useState(null)

    //SUBMIT FUNCTION
    const handleSubmit = async (e) => {
        //Always the default action of submitting a form is to reload the page, we want to prevent that
        e.preventDefault()
        // grab the state value and save it on const workout
        const workout = {title, load, reps}

        const response = await fetch('/api/workouts/', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'content-Type': 'application/json'
            }
        })
        const json = await  response.json()

        if(!response.ok) {
            setError(json.error)
        } 
        if (response.ok) {
            //reset all values after adding workout
            setTitle('')
            setLoad('')
            setReps('')
            setError(null)
            console.log("new workout added", json)
        }

        
    }

  return (
    <form className='create' onSubmit={handleSubmit}>
        <h3>Add a New Workout</h3>

        <label> Excercise Title</label>
        <input 
            type="text" 
            onChange={(e) => {setTitle(e.target.value)}}
            value={title}
        />

        <label> Load (kg): </label>
        <input 
            type="number" 
            onChange={(e) => {setLoad(e.target.value)}}
            value={load}
        />

        <label> Reps: </label>
        <input 
            type="number" 
            onChange={(e) => {setReps(e.target.value)}}
            value={reps}
        />

        <button>Add Workout</button>
        {error && <div>{error}</div>}
    </form>
  )
}

export default WorkoutForm