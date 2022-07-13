import React, { useEffect } from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

//Import Components
import WorkoutsDetails from '../components/WorkoutsDetails'
import WorkoutForm from '../components/WorkoutForm'


const Home = () => {

   const {workouts, dispatch} = useWorkoutsContext()

    // Fires a function when a component is rendered, we only want it to fire once the component is first
    // rendered. To specify that we leave the dependency array [] empty.
    useEffect(() => {
        // FUNCTION TO FETCH ALL WORKOUTS
        const fetchWorkouts = async () => {
            //Using fetch to fetch info from all workouts uri and store response in const response
            const response = await fetch('/api/workouts')
            //Pass the json from response object to something we can work with
            const json = await response.json()
            // Check if response is ok, if it is...
            if(response.ok) {
                //Update Workouts state with the json response via dispatch
                dispatch({
                    type: 'SET_WORKOUTS',
                    payload: json
                })
            }
        }

        fetchWorkouts()
    }, [])


  return (
    <div className="home">
        <div className="workouts">
            {/* Cycle through the workouts only when we have some using conditional, if we have a value for 
            workouts then we can map through them. If we map workouts, we have access to each individual
            workoute hence (workout) */}
            {workouts && workouts.map((workout) => (
                <WorkoutsDetails
                key={workout.id}
                workout={workout}
                /> 
            ))}
        </div>
        <WorkoutForm/>
    </div>
  )
}

export default Home