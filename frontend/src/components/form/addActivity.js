import { useState } from 'react';

const AddActivity = () => {
    const [projectNumber, setProjectNumber] = useState("");
    const [ActivityName, setActivityName] = useState("");
    const [ActivityDescription, setActivityDescription] = useState("");
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const activity = {projectNumber, ActivityName, ActivityDescription};

        const response = await fetch ('', {
            method: 'POST',
            body: JSON.stringify(activity),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }

        if (response.ok) {
            setProjectNumber('')
            setActivityName('')
            setActivityDescription('')
            setError(null)
            setEmptyFields([])
        }
    }
    return (
        <form onSubmit={handleSubmit} className="subForm">
            <span className="subFormTitle">Add Activity</span>
            <div className="subFormContent">
                <label>Project Number</label>
                <input 
                    type="text" 
                    onChange={(e) => setProjectNumber(e.target.value)}
                    value={projectNumber}
                    maxLength={4}
                    className={emptyFields.includes('projectNumber') ? 'error': ''}
                />
                <label>Activity Name</label>
                <input 
                    type="text" 
                    onChange={(e) => setActivityName(e.target.value)}
                    value={ActivityName}
                    maxLength={4}
                    className={emptyFields.includes('ActivityName') ? 'error': ''}
                />
                <label>Activity Description</label>
                <textarea 
                    type="text" 
                    onChange={(e) => setActivityDescription(e.target.value)}
                    value={ActivityDescription}
                    maxLength={4}
                    className={emptyFields.includes('ActivityDescription') ? 'error': ''}
                />
            </div>
            <div className="subFormBtn">
                <button className="formBtn">Add Activity</button>
                {error && <div className='error'>{error}</div>}
            </div>
        </form>
    )
}

export default AddActivity