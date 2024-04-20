import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div className="menu">
            <div className="menu-item">
                <span class="material-symbols-outlined">sprint</span>
                <Link to="/activity">Activity</Link>
            </div>
            <div className="menu-item">
                <span class="material-symbols-outlined">store</span>
                <Link to="/activity">Store</Link>
            </div>
            <div className="menu-item">
                <span class="material-symbols-outlined">shopping_cart</span>
                <Link to="/activity">Purchase</Link>
            </div>
            <div className="menu-item">
                <span class="material-symbols-outlined">currency_rupee</span>
                <Link to="/activity">Purchase</Link>
            </div>
            <div className="menu-item">
                <span class="material-symbols-outlined">concierge</span>
                <Link to="/activity">Enquiry</Link>
            </div>
            <div className="menu-item">
                <span class="material-symbols-outlined">engineering</span>
                <Link to="/activity">Project</Link>
            </div>
            <div className="menu-item">
                <span class="material-symbols-outlined">receipt_long</span>
                <Link to="/activity">Support</Link>
            </div>
        </div>

    )
}

export default Menu;