import { WorkoutsContext } from "../context/WorkoutsContext";
import { useContext } from "react";

// hook function
export const useWorkoutsContext = () => {
    const context = useContext(WorkoutsContext)

    if(!context) {
        throw Error(" useWorkoutsContext must be used inside a WorkoutContextProvider")
    }

    return context
}