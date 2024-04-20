const AddActivity = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit");
    }
    return (
        <form onClick={handleSubmit} className="subForm">
            <span className="subFormTitle">Add Activity</span>
            <div className="subFormContent">
                <label>Project Number</label>
                <input type="text" name="" id="" maxLength={4}/>
                <label>Activity Name</label>
                <input type="text" name="" id="" />
                <label>Activity Description</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <div className="subFormBtn">
                <button className="formBtn">Add Activity</button>
            </div>
        </form>
    )
}

export default AddActivity;