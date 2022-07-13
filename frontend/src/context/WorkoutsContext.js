import { createContext, useReducer } from "react";

// create new context and save it to a function, export it at the same time
export const WorkoutsContext = createContext()

//REDUCER FUNCTION - 2 arguments, the previous state befor making change to it, action which equals the dispatch 
export const workoutsReducer = (state, action) => {
    switch (action.type) {
        case "SET_WORKOUTS":
            return {
                workouts: action.payload
            }  
        case "CREATE_WORKOUT":
            return {
                workouts: [action.payload, ...state.workouts]
            }    
        default:
            return state
    }
}

// CONTEXT PROVIDER COMPONENT
// provde the context to our application component tree, will wrapp the rest of our application.
// we destructure the children propery from the props, it represents all the children components 
// WorkoutsContextProvider wraps which is the <App/> component in index.js
export const WorkoutsContextProvider = ({children}) => {
    // useReducer(2 arguments), our reduce name and initial value of state
    const [state, dispatch] = useReducer(workoutsReducer, {
        workouts: null
    })

    

    return (
        <WorkoutsContext.Provider value={{ ...state, dispatch }}>
          { children }
        </WorkoutsContext.Provider>
      )
} 

