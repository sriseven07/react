import { Link } from 'react-router-dom';

const ActivityMenu = () => {
    return (
        <div className="subMenu">
            <div className="pageTitle">
                <h3>Activity</h3>
            </div>
            <div className="menuContent">
                <Link><span class="material-symbols-outlined">note_add</span></Link>
                <h5>Add</h5>
            </div>
        </div>
        
    )
}

export default ActivityMenu;