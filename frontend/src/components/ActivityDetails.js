import { useActivityContext }  from '../hooks/useActivityContext'

//date-fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

// components

const ActivityDetails = ({ activity }) => {
    const { dispatch } = useActivityContext()

    return (
        <div className="activity-details">
            <h4>{activity.ActivityName}</h4>
            <p><strong>Project Number :</strong>{activity.projectNumber}</p>
            <p><strong>Description :</strong>{activity.ActivityDescription}</p>
            <p>{formatDistanceToNow(new Date(activity.createdAt), { addSuffix: true })}</p>
            <span className="material-symbols-outlined">delete</span>
        </div>
    )
}

export default ActivityDetails