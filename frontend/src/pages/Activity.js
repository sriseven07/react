import { useEffect } from "react";
import { useActivityContext } from "../hooks/useActivityContext";

import ActivityDetails from "../components/ActivityDetails";
import AddActivity from "../components/form/addActivity";


const Activity = () => {
    const { activities, dispatch } = useActivityContext();

    useEffect(() => {
        const fetchWorkouts = async () => {
          const response = await fetch('/activity', {
            headers: {
            }
          })
          const json = await response.json()
    
          if (response.ok) {
            dispatch({type: 'SET_WORKOUTS', payload: json})
            fetchWorkouts()
          }
        }
    
    }, [dispatch])

    return (
        <div className="page">
            <span className="pageTitle">ACTIVITY</span>
            <AddActivity />
            { activities && activities.map(activity => (
                <ActivityDetails activity={activity} key={activity._id} />
            ))}
        </div>

    )
}

export default Activity;